import React from "react";
import { Link } from "react-router-dom";
import {ListGroupItem, Card, CardTitle, CardText, Col } from "reactstrap";
import "./UserCard.css";

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
                    <Link to={`/users/${username}`}>View Profile</Link>
                </Col>
            </Card>
        </ListGroupItem>
    )
}

export default UserCard;