import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Card, CardBody, CardTitle, Col, Row, CardSubtitle } from "reactstrap";
import { AuthContext } from "./AuthContext";
import "./Home.css";

function Home() {
    const { authToken } = useContext(AuthContext);

    return (
        <section>
            <Card className="home-main">
                <Col sm="1" xl="2"/>
                <Col sm="10" xl="8">
                    <Row>
                        <CardBody className="home-body">
                            <CardTitle className="home-title">
                                <h2>Welcome to Job.ly!</h2>
                            </CardTitle>
                            <CardSubtitle className="home-subtitle">
                                The web's premire site for hypothetical jobs.
                            </CardSubtitle>
                        </CardBody>
                    </Row>
                    {!authToken &&    
                    <Row>
                        <CardBody>
                            <Col>
                                <Row className="home-login">
                                    <Link to="/login">Login</Link>
                                </Row>
                                <Row className="home-register">
                                    <Link to="/register">Don't Have an Account?</Link>
                                </Row>
                            </Col>
                        </CardBody>
                    </Row>
                    }
                </Col>
                <Col sm="1" xl="2"/>
            </Card>
        </section>
    )
}

export default Home;