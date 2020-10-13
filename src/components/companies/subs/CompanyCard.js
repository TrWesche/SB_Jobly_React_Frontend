import React from "react";
import {ListGroupItem, Card, CardTitle, CardText, CardImg, CardBody, CardLink } from "reactstrap";

function JobCompanyCard({  handle, name, description, logo_url }) {
    return (
        <ListGroupItem key={handle}>
            <Card>
                <CardImg width="10%" src={logo_url} alt={`${name} logo`}></CardImg>
                <CardBody>
                    <CardTitle>
                        <h4>{name}</h4>
                    </CardTitle>
                    <CardText>About: {description}</CardText>
                    <CardLink href={`/companies/${handle}`}>Details</CardLink>
                </CardBody>
            </Card>
        </ListGroupItem>
    )
}

export default JobCompanyCard;