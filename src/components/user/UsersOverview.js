import React, { useState } from "react";
import { Card, CardBody, CardTitle, CardText, ListGroup } from "reactstrap";
import UserCard from "./subs/UserCard";


function UsersOverview() {
    const sampleValue = [
        {
            username: "testuser1",
            first_name: "Hiya",
            last_name: "ImTest",
            email: "hiya.imtest@test.com"
        }]

    const [userList, setUserList] = useState(sampleValue);
    
    return (
        <section>
            <Card>
                <CardBody>
                    <CardTitle>
                        <h2>Users</h2>
                    </CardTitle>
                    <CardText>
                        <p>We have some of the greatest people in the world on Job.ly.</p>
                        <p>TODO: Search Functionality</p>
                    </CardText>
                    <ListGroup>
                        {userList.map(user => {
                            return UserCard(user);
                        })}
                    </ListGroup>
                </CardBody>
                
            </Card>
        </section>
    )

}

export default UsersOverview;