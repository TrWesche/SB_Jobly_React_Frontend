import React from "react";
import {ListGroupItem, Card, CardTitle, CardText, CardLink} from "reactstrap";

function UserCard({ username, first_name, last_name, email }) {
    return (
        <ListGroupItem key={username}>
            <Card>
                <CardTitle>
                    <h4>{username}</h4>
                </CardTitle>
                <CardText>{first_name} {last_name}</CardText>
                <CardText>{email}</CardText>
                <CardLink href={`/users/${username}`}>View Profile</CardLink>
            </Card>
        </ListGroupItem>
    )
}

export default UserCard;