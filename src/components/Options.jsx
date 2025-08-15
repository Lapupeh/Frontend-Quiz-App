
export default function Options({question, dispatch, answer, isSubmitted, answerContent}) {
   const letters = ['A', 'B', 'C', 'D'];
   const hasAnswer = answer !== null;

   function getIcon(isSubmitted, option, answer, index, hasAnswer) {
    if(isSubmitted && hasAnswer ) {
        if(option === question.answer) {
            return '/images/icon-correct.svg'
        }
        else if(index === answer) {
            return '/images/icon-incorrect.svg'
        }
        else {
            return null;
        }
    }
    else {
        return null;
    }
   }

  return (
    <div className="options">
        {question.options.map((option, index)=> 
                <button 
                key={index} 
                className={` btn 
                    ${index === answer ? 'clicked' : '' }
                    ${hasAnswer && isSubmitted && index === answer ? 
                        answerContent === question.answer ? 'correct' : 'wrong' 
                        : ''}`}
                disabled={isSubmitted}
                onClick={()=> dispatch({type: "newAnswer", payload: index})}>
                <div>
                    <span className={index === answer ? 'clickedLetter' : ''}>{letters[index]}</span>
                    <p>{option}</p>
                </div>
                <img src={getIcon(isSubmitted, option, answer, index, hasAnswer)} alt="" />
                </button>
            )}
    </div>
  )
}
