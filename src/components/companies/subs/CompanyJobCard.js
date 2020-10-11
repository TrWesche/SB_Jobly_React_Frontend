import React from "react";
import {ListGroupItem, Card, CardTitle, CardText} from "reactstrap";

function CompanyJobCard({ id, title, salary, equity }) {
    return (
        <ListGroupItem id={id}>
            <Card>
                <CardTitle>
                    <h4>{title}</h4>
                </CardTitle>
                <CardText>
                    <p>Salary: {salary}</p>
                    <p>Equity: {equity}</p>
                </CardText>
            </Card>
        </ListGroupItem>
    )
}

export default CompanyJobCard;