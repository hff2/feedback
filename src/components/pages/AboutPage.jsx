import Card from "../shared/Card"
import { Link } from "react-router-dom"

function AboutPage() {
    return (
        <Card>
            <div className="about">
                <h1>About This Project</h1>
                <p>This is a React app to leave feedback for a product or service.</p>
                <p>Used Framework and kits：</p>
                <ul>
                    <li>● React Hooks</li>
                    <li>● react-icons</li>
                    <li>● react-router v6</li>
                </ul>
                <p>
                    <Link to="/feedback">Back To Home</Link>
                </p>
            </div>
        </Card>
    )
}

export default AboutPage