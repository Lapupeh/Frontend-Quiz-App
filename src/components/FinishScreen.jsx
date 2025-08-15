

export default function FinishScreen({subject, quizzes, points, dispatch, numQuestions}) {
  return (
    <div className="main-container">
        <div className="score-container">
            <h1>Quiz Completed</h1>
            <p>You scored...</p>
        </div>
        <div>
            <div className="result-content">
                <div className='title' aria-label={quizzes[subject]}>
                    <img src={quizzes[subject].icon} alt="title icon" className= {`icon icon-${subject + 1}`}/>
                    <h2>{quizzes[subject].title}</h2>
                </div>
                <p className="score" aria-label={`You scored ${points} points out of ${numQuestions}`}>{points}</p>
                <p className="total-score">out of {numQuestions}</p>
            </div>
            <button className="new-quiz"
            onClick={()=> dispatch({type: "newQuiz"})}>Play Again</button>
        </div>
    </div>
  )
}

