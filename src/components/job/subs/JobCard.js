import React from "react";
import {ListGroupItem, Card, CardTitle, CardText, CardLink} from "reactstrap";

function JobCard({ id, title, company_handle = null, salary = null, equity = null, state = null }) {
    
    return (
        <ListGroupItem key={id}>
            <Card>
                <CardTitle>
                    <h4>{title}</h4>
                </CardTitle>
                {state && <CardText>Applied</CardText>}
                {company_handle && <CardText>{company_handle}</CardText>}
                {salary && <CardText>Salary: {salary}</CardText>}
                {equity && <CardText>Equity: {equity}</CardText>}
                <CardLink href={`/jobs/${id}`}>View Details</CardLink>
            </Card>
        </ListGroupItem>
    )
}

export default JobCard;