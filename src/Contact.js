import { Container } from "react-bootstrap";
import "./Contact.css";
import { AiFillGithub, AiFillLinkedin, AiFillPhone, AiTwotoneMail } from "react-icons/ai";
import GetInTouchForm from "./GetInTouchForm";

function Contact() {
    return (
        <Container>
            <div className="contact">
                <div className="c-left">
                    <h2 className="c-title">Let's Discuss My Work</h2>
                    <div className="info-items">
                        <AiFillPhone />
                        +1(408)-620-0209
                    </div>
                    <div className="info-items">
                        <AiTwotoneMail />
                        poorvarathore05@gmail.com
                    </div>
                    <div className="info-items">
                        <AiFillLinkedin />
                        <a href="https://linkedin.com/in/poorva-rathore-baa85018b">
                            Linkedin
                        </a>
                    </div>
                    <div className="info-items">
                        <AiFillGithub />
                        <a href="https://github.com/poorvarathore05">
                            Github
                        </a>
                    </div>

                </div>
                <div className="c-right">
                    <p className="c-desc">
                        Get in touch. Always avaliable for freelancing if the right
                        project come along me!
                    </p>
                    <GetInTouchForm />
                </div>

            </div>
        </Container>
    )
}



export default Contact;