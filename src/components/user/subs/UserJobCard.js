import React from "react";
import {ListGroupItem, Card, CardTitle, CardText} from "reactstrap";

function UserJobCard({ id, title, company_handle, state }) {
    return (
        <ListGroupItem key={id}>
            <Card>
                <CardTitle>
                    <h4>{title}</h4>
                </CardTitle>
                <CardText>{state ? "Applied" : "Not Applied"}</CardText>
            </Card>
        </ListGroupItem>
    )
}

export default UserJobCard;