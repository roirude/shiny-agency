import { Link, useParams } from "react-router"

export default function Survey() {
    const { questionNumber } = useParams()
    const currentNumber = questionNumber ? parseInt(questionNumber, 10) : 1
    const prev = currentNumber === 1 ? currentNumber : currentNumber - 1
    const next = currentNumber + 1
    return (
        <div>
            <h1>Questionnaire 🧮</h1>
            <h2>Question {questionNumber}</h2>

            <nav>
                <Link to={`/survey/${prev}`}>Précédent</Link>
                <Link to={currentNumber !== 10 ? `/survey/${next}` : `/results`}>Suivant</Link>
            </nav>
        </div>
    )
}