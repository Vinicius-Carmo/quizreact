import { useContext } from "react"
import { QuizContext } from "../context/quiz"
import './Opcoes.css'

const Opcoes = ({option, answer, selectOption}) => {

  const [quizState,dispatch] = useContext(QuizContext)

  return (
    <div className={`option ${quizState.answerSelected && option === answer ? 'correct'  : ''} ${quizState.answerSelected && option !== answer ? 'wrong'  : ''}`} 
     onClick={() => selectOption()}
     >
        <p>{option}</p>
    </div>
  )
}

export default Opcoes