import React from "react";
import {ListGroupItem, Card, CardTitle, CardText, CardImg, CardBody } from "reactstrap";

function JobCompanyCard({  name, num_employees, description, logo_url }) {
    return (
        <ListGroupItem>
            <Card>
                <CardImg width="10%" src={logo_url} alt={`${name} logo`}></CardImg>
                <CardBody>
                    <CardTitle>
                        <h4>{name}</h4>
                    </CardTitle>
                    <CardText>About: {description}</CardText>
                    <CardText>Company Size: {num_employees}</CardText>
                </CardBody>
            </Card>
        </ListGroupItem>
    )
}

export default JobCompanyCard;