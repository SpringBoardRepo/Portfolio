import "./About.css"
import { Card, Container } from "react-bootstrap"
function About() {

    return (
        <Container>
            <div className="about">
                <div className="about-left">
                    <Card className="about-image">
                        <Card.Img variant="top" src="https://images.unsplash.com/photo-1617471346061-5d329ab9c574?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" />
                    </Card>
                </div>
                <div className="about-right">
                    <h2 className="heading">
                        About Me
                    </h2>
                    <p className="a-desc"> I am Full Stack Developer and I’ve built my career in the Software industry.
                        I have completed my Master's degree in Computer Science and Technology
                        and a recently graduated from Springboard.
                    </p>
                    <p className="a-descSkill">
                        I am highly skilled in JavaScript, React, Express, Node, Python, HTML, CSS/Bootstrap.
                        I am eager to put all this knowledge to work.
                        I would love the opportunity to make an impact working for your company.
                    </p>
                </div>
            </div>
        </Container>
    )
}

export default About;