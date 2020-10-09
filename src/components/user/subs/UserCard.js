import React from "react";
import {ListGroupItem, Card, CardTitle, CardText} from "reactstrap";

function UserCard({ username, first_name, last_name, email }) {
    return (
        <ListGroupItem>
            <Card>
                <CardTitle>
                    <h4>{username}</h4>
                </CardTitle>
                <CardText>
                    <h5>{first_name} {last_name}</h5>
                    <p>{email}</p>
                </CardText>
            </Card>
        </ListGroupItem>
    )
}

export default UserCard;