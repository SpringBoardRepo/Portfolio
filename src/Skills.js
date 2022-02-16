import { Container } from "react-bootstrap";
import './Skills.css';
const skills = ['JavaScript', 'React', 'HTMl', 'CSS', 'Bootstrap',
    'Node', 'Express', 'JQuery', 'MUi', 'Python', 'Flask',
    'Django', 'Postgresql']
function Skills() {
    return (
        <Container className="skill">
            <h2>Skills</h2>
            <div className="skills">
                <ul>
                    {skills.map((s) =>
                        <li key={s}>
                            {s}
                        </li>
                    )}
                </ul>
            </div>

        </Container>
    )
}

export default Skills;