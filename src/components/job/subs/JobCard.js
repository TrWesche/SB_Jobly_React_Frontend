import React from "react";
import { Link } from "react-router-dom";
import {ListGroupItem, Card, CardTitle, CardText, Button, Col, Row } from "reactstrap";
import "./JobCard.css";

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
                <Col sm="8">
                    <Row>
                        <CardTitle>
                            <h4>{title}</h4>
                        </CardTitle>
                        {state && <CardText className="job-card-applied">Applied</CardText>}
                    </Row>
                    {company_handle && <CardText>{company_handle}</CardText>}
                    {salary && <CardText>Salary: {salary}</CardText>}
                    {equity && <CardText>Equity: {equity}</CardText>}
                </Col>
                <Col sm="4" className="job-card-links">
                    <Link to={`/jobs/${id}`}>View Details</Link>
                    <Link onClick={handleApply}>{state === "applied" ? "Retract" : "Apply"}</Link>
                </Col>
            </Card>
        </ListGroupItem>
    )
}

export default JobCard;