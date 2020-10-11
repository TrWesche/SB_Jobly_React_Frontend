import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Card, CardBody, CardTitle, CardText, ListGroup, CardImg, Button, CardLink } from "reactstrap";
import JobCard from "../job/subs/JobCard";
import apiJobly from "../../utils/apiJobly";


function UserDetail() {
    const { username } = useParams();
    
    // const sampleValue = 
    //     {
    //         username: "Testuser1", 
    //         first_name: "Testa", 
    //         last_name: "Usera", 
    //         email: "TestaUsera@test.com", 
    //         photo_url: "https://pbs.twimg.com/profile_images/1419305258/Conrad_Person_pic.jpg",
    //         jobs: [{
    //             id: "J200", 
    //             title: "Test Job", 
    //             company_handle: "MSFT", 
    //             state: false
    //         }
    //         ]
    //     }

    const [userDetails, setUserDetails] = useState({});
    const [isReady, setIsReady] = useState(false);

    useEffect(() => {
        async function getUser() {
            let res = await apiJobly.getUserDetails(username);
            setUserDetails(res);
            setIsReady(true);
        }

        getUser();
    }, [])


    const render = () => {
        if (isReady) {
            return (
                <CardBody>
                    <CardImg width="10%" src={userDetails.photo_url} alt="User Photo"></CardImg>
                    <CardTitle>
                        <h2>{userDetails.first_name} {userDetails.last_name}</h2>
                    </CardTitle>
                    <CardText>Email: {userDetails.email}</CardText>
                    <CardLink href={`/users/${userDetails.username}/edit`}>Update</CardLink>
                    <ListGroup>
                        {userDetails.jobs.map(job => JobCard(job))}
                    </ListGroup>
                </CardBody>
                
            )
        } 

        return (
            <CardBody>
                <CardText>Loading...</CardText>
            </CardBody>
        )
    }

    return (
        <section>
            <Card>
                {render()}
            </Card>
        </section>
    )

}

export default UserDetail;