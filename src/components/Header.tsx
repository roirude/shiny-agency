import { Link } from "react-router";

export default function Header() {
    return (
        <nav>
            <Link to="/">Accueil</Link>
            <Link to="/survey/42">Questionnaire</Link>
        </nav>
    )
}