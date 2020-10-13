import React from "react";
import {ListGroupItem, Card, CardTitle, CardText, CardLink } from "reactstrap";

function JobCard(job, handleJobAction) {
    const { id, title, company_handle = null, salary = null, equity = null, state = null } = job;

    const handleApply = (e) => {
        e.preventDefault();

        if (state === "applied") {
            handleJobAction(job, "retracted");
        } else {
            handleJobAction(job, "applied");
        }
    }

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
                <CardLink onClick={handleApply}>{state === "applied" ? "Retract" : "Apply"}</CardLink>
            </Card>
        </ListGroupItem>
    )
}

export default JobCard;