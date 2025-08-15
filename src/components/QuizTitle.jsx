

export default function({subject, quizzes}) {

  return (
    <div className='title'>
        <img src={quizzes[subject].icon} alt="title icon" className= {`icon icon-${subject + 1}`}/>
        <h2>{quizzes[subject].title}</h2>
    </div>
  )
}
