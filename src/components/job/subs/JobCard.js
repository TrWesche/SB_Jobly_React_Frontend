import React from "react";
import {ListGroupItem, Card, CardTitle, CardText, CardLink} from "reactstrap";

function JobCard({ id, title, company_handle, salary, equity, state }) {
    
    return (
        <ListGroupItem key={id}>
            <Card>
                <CardTitle>
                    <h4>{title}</h4>
                    {state ? "Applied" : "Not Applied"}
                </CardTitle>
                <CardText>{company_handle} {state}</CardText>
                <CardText>Salary: {salary}</CardText>
                <CardText>Equity: {equity}</CardText>
                <CardLink href={`/jobs/${id}`}>View Details</CardLink>
            </Card>
        </ListGroupItem>
    )
}

export default JobCard;