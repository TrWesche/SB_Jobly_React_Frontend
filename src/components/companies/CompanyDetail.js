import React, { useState } from "react";
import { Card, CardBody, CardTitle, CardText, ListGroup, CardImg } from "reactstrap";
import CompanyJobCard from "./subs/CompanyJobCard";

function CompanyDetail() {
    const sampleValue = 
        {
            handle: "MSFT",
            name: "Microsoft",
            num_employees: "60,000",
            description: "Enterprise software company",
            logo_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/1200px-Microsoft_logo.svg.png",
            jobs: [{
                id: "J200", 
                title: "Test Job", 
                salary: "75,000", 
                equity: "0.0"
            },
            {
                id: "J300", 
                title: "Test Job 2", 
                salary: "90,000", 
                equity: "0.0"
            }
            ]
        }

    const [companyDetails, setCompanyDetails] = useState(sampleValue);


    return (
        <section>
            <Card>
                <CardBody>
                    <CardImg width="10%" src={companyDetails.logo_url} alt={`${companyDetails.name} logo`}></CardImg>
                    <CardTitle>
                        <h2>{companyDetails.name}</h2>
                    </CardTitle>
                    <CardText>
                        <p>{companyDetails.description}</p>
                        <p>{companyDetails.num_employees}</p>
                    </CardText>
                    <ListGroup>
                        {companyDetails.jobs.map(job => CompanyJobCard(job))}
                    </ListGroup>
                </CardBody>
            </Card>
        </section>
    )

}

export default CompanyDetail;