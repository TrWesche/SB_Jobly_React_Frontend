import React, { useState, useEffect,  } from "react";
import { Card, CardBody, CardTitle, CardText, ListGroup } from "reactstrap";
import UserCard from "./subs/UserCard";
import apiJobly from "../../utils/apiJobly";

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
                console.log(res)
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
                <ListGroup>
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
            <Card>
                <CardBody>
                    <CardTitle>
                        <h2>Users</h2>
                    </CardTitle>
                    <CardText>We have some of the greatest people in the world on Job.ly.</CardText>
                    <CardText>TODO: Search Functionality</CardText>
                    {render()}
                </CardBody>
                
            </Card>
        </section>
    )

}

export default UsersOverview;