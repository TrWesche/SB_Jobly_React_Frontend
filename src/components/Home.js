import React, { useContext } from "react";
import { Card, CardBody, CardLink, CardTitle } from "reactstrap";
import { AuthContext } from "./AuthContext";

// import "./Home.css";

function Home() {
    const { authToken } = useContext(AuthContext);

    return (
        <section>
            <Card>
                <CardBody>
                    <CardTitle>
                        <h2>Welcome to Job.ly!</h2>
                        <p>The web's premire site for hypothetical jobs.</p>
                    </CardTitle>
                    {!authToken &&
                        <CardBody>
                            <CardLink href="/login">Please Login to Continue</CardLink>
                        </CardBody>
                    }
                </CardBody>
            </Card>
        </section>
    )
}

export default Home;