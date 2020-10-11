import React from "react";
import {ListGroupItem, Card, CardTitle, CardText} from "reactstrap";

function UserJobCard({ id, title, company_handle, state }) {
    return (
        <ListGroupItem id={id}>
            <Card>
                <CardTitle>
                    <h4>{title}</h4>
                </CardTitle>
                <CardText>
                    <p>Equity: {state}</p>
                </CardText>
            </Card>
        </ListGroupItem>
    )
}

export default UserJobCard;