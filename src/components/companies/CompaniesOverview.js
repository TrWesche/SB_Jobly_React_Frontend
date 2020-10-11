import React, { useState } from "react";
import { Card, CardBody, CardTitle, CardText, ListGroup } from "reactstrap";
import CompanyCard from "./subs/CompanyCard";

function CompaniesOverview() {
    const sampleValue = [
        {
            handle: "MSFT",
            name: "Microsoft",
            description: "Enterprise software company",
            logo_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/1200px-Microsoft_logo.svg.png"
        }]

    const [companyList, setCompanyList] = useState(sampleValue);

    return (
        <section>
            <Card>
                <CardBody>
                    <CardTitle>
                        <h2>Companies Overview Placeholder</h2>
                    </CardTitle>
                    <CardText>
                        <p>To be completed.</p>
                    </CardText>
                    <ListGroup>
                        {companyList.map(company => CompanyCard(company))}
                    </ListGroup>
                </CardBody>
            </Card>
        </section>
    )

}

export default CompaniesOverview;