import { Card, Col } from "react-bootstrap";
import "./ProjectsList.css";

function ProjectsList({ name, image, url, description }) {

    return (
        <Col xs={12} sm={8} md={6} lg={4} className="projectsCard">
            <Card style={{ width: "18rem" }} className='card' >
                <Card.Img variant="top" src={image} alt="" />
                <Card.Body className="cardBody">
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        {description}
                    </Card.Text>
                    <Card.Link href={url}>Project Link</Card.Link>
                </Card.Body>
            </Card>
        </Col>

    )
}

export default ProjectsList;