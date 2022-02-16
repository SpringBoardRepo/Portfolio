import "./Intro.css";
import image from "./image/PImg.png";

import Container from 'react-bootstrap/Container'


function Intro() {

    return (

        <Container className="intro">
            <div className="intro-left">
                <div className="intro-left-wrapper">
                    <h2>Hello, My Name is</h2>
                    <h1 className="name">Poorva Rathore</h1>
                    <div className="title">
                        Full Stack Software Developer
                    </div>
                    <p className="description">
                        I am a Software Developer who design and develop Websites
                    </p>
                </div>
            </div>
            <div className="intro-right">
                <div className="bg-i"></div>
                <img src={image} alt="" className="image" />
            </div>
        </Container>
    )
}

export default Intro;