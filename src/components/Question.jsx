import Options from "./Options";
import Progress from "./Progress";

export default function Question({question, dispatch, index, answer, isSubmitted, answerContent, isClicked, numQuestions}) {
    const hasAnswer = answer !== null;

    function handleClick() {
        if(isSubmitted) {
            dispatch({type: "nextQuestion"});
        }
        else if (index + 1 === numQuestions) {
            dispatch({type: "finishQuiz"})
        }
        else {
            dispatch({type: "submitAnswer"});
        }
    }

  return (
    <div className="main-container">
        <div className="question">
            <p>Question {index + 1} of {numQuestions}</p>
            <h2>{question.question}</h2>
            <Progress numQuestions={numQuestions} index={index}/>
        </div>
        <div>
            <div >
                <Options question={question} dispatch={dispatch} answer={answer} isSubmitted={isSubmitted} answerContent={answerContent}/>
            </div>

            {/* Submit button */}
            <button className="submit"onClick={handleClick}>
                {isSubmitted && hasAnswer ? 'Next Question' : 'Submit Answer'}
            </button>

            {/* Error Message */}
            {isClicked && !hasAnswer ? (
                <div className="error-message" aria-label="Please select an answer">
                    <img src="/images/icon-error.svg" alt="error icon" />
                    <p role="alert">Please select an answer</p>
                </div>
            ) : ''}
        </div>
    </div>
  )
}

