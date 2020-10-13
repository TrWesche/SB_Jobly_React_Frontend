import React from "react";
import {ListGroupItem, Card, CardTitle, CardText, CardLink, Col} from "reactstrap";

function UserCard({ username, first_name, last_name, email }) {
    return (
        <ListGroupItem key={username}>
            <Card>
                <Col sm="10">
                    <CardTitle>
                        <h4>{username}: {first_name} {last_name}</h4>
                    </CardTitle>
                    <CardText>{email}</CardText>
                </Col>
                <Col sm="2">
                    <CardLink href={`/users/${username}`}>View Profile</CardLink>
                </Col>
            </Card>
        </ListGroupItem>
    )
}

export default UserCard;