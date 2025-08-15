

export default function StartMenu({quizzes, dispatch}) {
  return (
    <div className="main-container">
        <div className="welcome-section">
            <h2>Welcome to the <br /><span>Frontend Quiz!</span></h2>
            <p>Pick a subject to get started.</p>
        </div>
        <div className="subject-list">
            {quizzes.map((quiz, index) => 
            <button key={index} aria-label={`Start ${quiz.title} quiz`}
            onClick={()=>dispatch({type: "quizSubject", payload: index})}>
                <img src={quiz.icon} alt={`${quiz.icon} icon`} className={`icon icon-${index + 1}`}/>
                <p className="html">{quiz.title}</p>
            </button>
            )}
            
        </div>
    </div>
  )
}
