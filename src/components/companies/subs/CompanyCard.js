import React from "react";
import {ListGroupItem, Card, CardTitle, CardText, CardImg, CardBody, CardLink } from "reactstrap";

function CompanyCard({ handle, name, description, logo_url }) {
    return (
        <ListGroupItem id={handle}>
            <Card>
                <CardImg width="10%" src={logo_url} alt={`${name} logo`}></CardImg>
                <CardBody>
                    <CardTitle>
                        <h4>{name}</h4>
                    </CardTitle>
                    <CardText>
                        <p>About: {description}</p>
                    </CardText>
                    <CardLink href={`/companies/${handle}`}>Learn More</CardLink>
                </CardBody>
            </Card>
        </ListGroupItem>
    )
}

export default CompanyCard;