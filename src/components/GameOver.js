import { useContext } from "react"
import { QuizContext } from "../context/quiz"

import './GameOver.css'

import WellDone from '../img/welldone.svg'
const GameOver = () => {

  const [quizState, dispatch] = useContext(QuizContext)

  return (
    <div className="gameover">
        <h2>Fim de jogo!</h2>
        <p>Pontuação: {quizState.score}</p>
        <p> Você acertou: {quizState.score} de {quizState.questions.length} peruntas.</p>
        <img src={WellDone} alt="Fim do Quiz"></img>
        <button onClick={() => dispatch({type: 'NEW_GAME'}) }>Reiniciar!</button>
    </div>
  )
}

export default GameOver