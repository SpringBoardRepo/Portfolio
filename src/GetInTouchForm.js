import { useRef, useState } from 'react';
import { Col, Row, Button, FormGroup, Label, Input } from 'reactstrap';
import emailjs from 'emailjs-com';

function GetInTouchForm() {

    const formref = useRef();
    const [done, setDone] = useState(false);

    const handleSubmit = (evt) => {
        evt.preventDefault();
        emailjs.sendForm('service_g2smzcx', 'template_u887efi', formref.current, 'user_vSCzUnaZRC0a1XkvJm39D')
            .then((result) => {
                console.log(result.text);
                setDone(true);
            }, (error) => {
                console.log(error.text);
            });
    }

    return (
        <div>
            <form ref={formref} onSubmit={handleSubmit}>
                <Row>
                    <Col md={8} sx={10}>
                        <FormGroup>
                            <Label for="name">Name</Label>
                            <Input type="text"
                                name="from_name"
                                id="name"
                                placeholder="Name" />
                        </FormGroup>
                    </Col>
                    <Col md={8} sx={10}>
                        <FormGroup>
                            <Label for="email">Email</Label>
                            <Input type="email"
                                name="user_email"
                                id="email"
                                placeholder="Email" />
                        </FormGroup>
                    </Col>
                    <Col md={8} sx={10}>
                        <FormGroup>
                            <Label for="subject">Subject</Label>
                            <Input type="text"
                                name="user_subject"
                                id="subject"
                                placeholder="Subject" />
                        </FormGroup>
                    </Col>
                    <Col md={8} sx={10}>
                        <FormGroup>
                            <Label for="text">Text</Label>
                            <Input type="textarea"
                                name="message"
                                id="text"
                                placeholder="Message" />
                        </FormGroup>
                    </Col>
                    <Col md={8} sx={10}>
                        <Button size="md" color="secondary">Submit</Button>{' '}
                        {done && < Button color='success'>Thank You</Button>}
                    </Col>

                </Row>
            </form>
        </div >
    )
}


export default GetInTouchForm;