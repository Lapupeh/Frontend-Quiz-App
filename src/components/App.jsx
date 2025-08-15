import { useEffect, useReducer } from "react"
import data from "./data.json"
import Header from "./Header"
import Question from "./Question"
import StartMenu from "./StartMenu"
import Error from "./Error"
import QuizTitle from "./QuizTitle"
import FinishScreen from "./FinishScreen"

const initialState = {
    quizzes: [], 
    status: "loading", 
    index: 0, 
    subject: null, 
    questions: [], 
    answer: null, 
    isSubmitted: false, 
    answerContent: null, 
    isClicked: false, 
    points: 0,
    theme: "light",
}

function reducer(state, action) {
    switch(action.type) {
        case "dataReceived" :
            return {
                ...state,
                quizzes: data.quizzes,
                status: "ready", 
            }
        case "dataFailed" :
            return {
                ...state,
                status: "error",
            }
        case "quizSubject":
            return {
                ...state,
                status: "active",
                subject: action.payload,
                questions: state.quizzes[action.payload].questions
            }
        case "newAnswer": 
            const question = state.questions.at(state.index)
            return {
                ...state,
                answer: action.payload,
                answerContent: question.options[action.payload],
                points: question.options[action.payload] === question.answer ? state.points + 1 : state.points 
            }
        case "submitAnswer":
            return {
                ...state,
                isSubmitted: state.answer !== null && true,
                isClicked: true,
            }
        case "nextQuestion":
            return {
                ...state,
                index: state.index + 1,
                isSubmitted: false,
                isClicked: false,
                answer: null
            }
        case "finishQuiz": 
            return {
                ...state,
                status: "finish"
            }
        case "themeToggle":
            return {
                ...state,
                theme: action.payload
            }
        case "newQuiz" :
            return {
                ...initialState,
                status: "ready",
                quizzes: data.quizzes,
            }
        
        default: 
            throw new Error ("Action unknown")
    }
}

function App() {
    const [{quizzes, status, index, subject, questions, answer, isSubmitted, answerContent, isClicked, points, theme}, dispatch] = useReducer(reducer, initialState)
    const numQuestions = questions.length

    useEffect(function() {
        if(!data) {
        dispatch({type: "dataFailed"})
    }
    else {
        dispatch({type: "dataReceived"})
    }
    }, [])

    useEffect(function() {
        document.documentElement.classList.toggle("dark", theme === "dark");
    }, [theme])
    
    return (
        <main>
            <Header theme={theme} dispatch={dispatch}>
                {(status === "active" || status === "finish") && <QuizTitle subject={subject} quizzes={quizzes}/>}
            </Header>
            
            {status === "error" && <Error/>}
            {status === "ready" && <StartMenu quizzes={quizzes} dispatch={dispatch}/>}
            {status === "active" && <Question 
                numQuestions={numQuestions}
                question={questions[index]} dispatch={dispatch} 
                index={index} answer={answer}
                isSubmitted={isSubmitted} isClicked={isClicked}
                answerContent={answerContent}
            />}
            {status === "finish" && <FinishScreen 
                subject={subject} 
                quizzes={quizzes} points={points} 
                dispatch={dispatch} numQuestions={numQuestions}
            />}
        </main>
    )
}

export default App