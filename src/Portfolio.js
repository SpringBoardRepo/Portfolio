import "./Portfolio.css";
import { Data } from "./Data";
import { Container, Row } from "react-bootstrap";
import ProjectsList from "./ProjectsList";

function Portfolio() {
    return (
        <Container>
            <div className="portfolio">
                <h2>Projects</h2>
                <Row>
                    {Data.map((d) => {
                        return <ProjectsList
                            key={d.id}
                            name={d.name}
                            url={d.url}
                            image={d.img}
                            description={d.description}
                        />
                    })}
                </Row>
            </div>
        </Container>
    )
}



export default Portfolio;