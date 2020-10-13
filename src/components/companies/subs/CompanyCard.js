import React from "react";
import { Link } from "react-router-dom";
import {ListGroupItem, Card, CardTitle, CardText, CardImg, CardBody, Col } from "reactstrap";
import "./CompanyCard.css";

function JobCompanyCard({  handle, name, description, logo_url }) {
    return (
        <ListGroupItem key={handle}>
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
                        <Link className="company-card-link" to={`/companies/${handle}`}>Details</Link>
                    </CardBody>
                </Col>
            </Card>
        </ListGroupItem>
    )
}

export default JobCompanyCard;