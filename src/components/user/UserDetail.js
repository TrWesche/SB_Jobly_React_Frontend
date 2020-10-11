import React, { useState } from "react";
import { Card, CardBody, CardTitle, CardText, ListGroup, CardImg, Button, CardLink } from "reactstrap";
import UserJobCard from "./subs/UserJobCard";

function UserDetail() {
    const sampleValue = 
        {
            username: "Testuser1", 
            first_name: "Testa", 
            last_name: "Usera", 
            email: "TestaUsera@test.com", 
            photo_url: "https://pbs.twimg.com/profile_images/1419305258/Conrad_Person_pic.jpg",
            jobs: [{
                id: "J200", 
                title: "Test Job", 
                company_handle: "MSFT", 
                state: "WA"
            }
            ]
        }

    const [userDetails, setUserDetails] = useState(sampleValue);

    return (
        <section>
            <Card>
                <CardBody>
                <CardImg width="10%" src={userDetails.photo_url} alt="User Photo"></CardImg>
                    <CardTitle>
                        <h2>{userDetails.first_name} {userDetails.last_name}</h2>
                    </CardTitle>
                    <CardText>
                        <p>Email: {userDetails.email}</p>
                    </CardText>
                    <CardLink href={`/users/${userDetails.username}/edit`}>Update</CardLink>
                    <ListGroup>
                        {userDetails.jobs.map(job => UserJobCard(job))}
                    </ListGroup>
                </CardBody>
            </Card>
        </section>
    )

}

export default UserDetail;