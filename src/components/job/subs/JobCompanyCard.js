import React from "react";
import { Link } from "react-router-dom";
import {Card, CardTitle, CardText, CardImg, CardBody, Col } from "reactstrap";
import "./JobCompanyCard.css";

function JobCompanyCard({  name, num_employees, description, logo_url, company_handle }) {
    return (
        <Card>
            <Col sm="2">
                <CardImg width="10%" src={logo_url} alt={`${name} logo`}></CardImg>
            </Col>
            <Col sm="10">
                <CardBody>
                    <CardTitle>
                        <h4>{name}</h4>
                    </CardTitle>
                    <CardText>About: {description}</CardText>
                    <CardText>Company Size: {num_employees}</CardText>
                    <Link to={`/companies/${company_handle}`}>View Company Details</Link>
                </CardBody>
            </Col>
        </Card>
)
}

export default JobCompanyCard;