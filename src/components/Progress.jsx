
export default function Progress({numQuestions, index}) {
  return (
    <div className="progress">
        <progress max={numQuestions} value={index + 1} aria-label="Questions answered"/>
    </div>
  )
}
