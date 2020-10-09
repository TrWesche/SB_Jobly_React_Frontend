import React from "react";
import { Card, CardBody, CardTitle } from "reactstrap";
// import "./Home.css";

function Home() {
    return (
        <section>
            <Card>
                <CardBody>
                    <CardTitle>
                        <h2>Welcome to Job.ly!</h2>
                        <p>The web's premire site for hypothetical jobs.</p>
                    </CardTitle>
                </CardBody>
            </Card>
        </section>
    )
}

export default Home;