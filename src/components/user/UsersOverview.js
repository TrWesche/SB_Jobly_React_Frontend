import React, { useState, useEffect } from "react";
import { Card, CardBody, CardTitle, CardText, ListGroup, Col } from "reactstrap";
import UserCard from "./subs/UserCard";
import apiJobly from "../../utils/apiJobly";
import "./UsersOverview.css";

function UsersOverview() {
    // const sampleValue = [
    //     {
    //         username: "testuser1",
    //         first_name: "Hiya",
    //         last_name: "ImTest",
    //         email: "hiya.imtest@test.com"
    //     }]

    const [userList, setUserList] = useState([]);
    const [isReady, setIsReady] = useState(false);

    useEffect(() => {
        async function getUsers() {
            try {
                let res = await apiJobly.getUsers();
                setUserList(res);
                setIsReady(true);    
            } catch (error) {
                console.log(error);
            }
        }

        getUsers();
    }, [])


    const render = () => {
        if (isReady) {
            return (
                <ListGroup className="users-overview-list">
                    {userList.map(user => {
                        return UserCard(user);
                    })}
                </ListGroup>
            )
        } 

        return (
            <CardText>Loading...</CardText>
        )
    }
    
    return (
        <section>
            <Card className="users-overview-main">
                <Col sm="1" xl="2"/>
                <Col sm="10" xl="8">
                    <CardBody className="users-overview-body">
                        <CardTitle className="users-overview-title">
                            <h2>Users</h2>
                        </CardTitle>
                        <CardText className="users-overview-desc">We have some of the greatest people in the world on Job.ly.</CardText>
                        {render()}
                    </CardBody>
                </Col>
                <Col sm="1" xl="8"/>
            </Card>
        </section>
    )

}

export default UsersOverview;