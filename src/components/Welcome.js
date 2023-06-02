import quiz from '../img/quiz.svg'

import './Welcome.css'

import { useContext } from 'react'
import { QuizContext } from '../context/quiz'

const Welcome = () => {

  const [quizState, dispatch] = useContext(QuizContext)
  
  return (
    <div className="welcome">
        <h2>Seja bem-vindo</h2>
        <p>Clique no botão para começar</p>
        <button onClick={() => dispatch({type: 'CHANGE_STATE'})}>Iniciar</button>
        <img src={quiz} alt="Inicio do quiz"></img>
    </div>
  )
}

export default Welcome