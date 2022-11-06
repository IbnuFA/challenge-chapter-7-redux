import React from "react";

import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Button,Row, Col} from "react-bootstrap";
import "../style/landingPage.css";

export default function Header(){;
    return (
        <>
            <div className="header-bg">
                <Container className="header-content">
                    <Container className="header-content d-flex justify-content-center align-items-center">
                        <Row>
                            <Col className="col-md-6 col-sm-12 flex-start text-white">
                                    <h2>Doctor Strange in the Multiverse of Madness</h2>
                                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates quasi eaque quibusdam quos esse? Eos obcaecati libero asperiores blanditiis ducimus eum aperiam beatae, error nostrum veniam velit voluptatum. Dicta, earum.</p>
                                    <Button>Detail</Button>        
                            </Col>
                        </Row>
                    </Container>
                </Container>
                
            </div>
        </>
    )
}