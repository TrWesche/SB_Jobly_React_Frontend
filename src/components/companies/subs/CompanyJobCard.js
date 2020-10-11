import React from "react";
import {ListGroupItem, Card, CardTitle, CardText} from "reactstrap";

function CompanyJobCard({ id, title, salary, equity }) {
    return (
        <ListGroupItem key={id}>
            <Card>
                <CardTitle>
                    <h4>{title}</h4>
                </CardTitle>
                <CardText>Salary: {salary}</CardText>
                <CardText>Equity: {equity}</CardText>
            </Card>
        </ListGroupItem>
    )
}

export default CompanyJobCard;