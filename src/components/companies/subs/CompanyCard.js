import React from "react";
import {ListGroupItem, Card, CardTitle, CardText, CardImg, CardBody, CardLink, Col } from "reactstrap";
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
                        <CardLink className="company-card-link" href={`/companies/${handle}`}>Details</CardLink>
                    </CardBody>
                </Col>
            </Card>
        </ListGroupItem>
    )
}

export default JobCompanyCard;