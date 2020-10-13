import React, { useContext } from "react";
import { Card, CardBody, CardLink, CardTitle, Col, Row, CardSubtitle } from "reactstrap";
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
                        <CardBody className="home-login">
                            <CardLink  href="/login">Login</CardLink>
                            <CardLink  href="/register">Don't Have an Account?</CardLink>
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