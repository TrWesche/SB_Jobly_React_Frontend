import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Card, CardBody, CardTitle, CardText, ListGroup, CardImg } from "reactstrap";
import JobCard from "../job/subs/JobCard";
import apiJobly from "../../utils/apiJobly";

function CompanyDetail() {
    const { companyID } = useParams();

    // const sampleValue = 
    //     {
    //         handle: "MSFT",
    //         name: "Microsoft",
    //         num_employees: "60,000",
    //         description: "Enterprise software company",
    //         logo_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/1200px-Microsoft_logo.svg.png",
    //         jobs: [{
    //             id: "J200", 
    //             title: "Test Job", 
    //             salary: "75,000", 
    //             equity: "0.0"
    //         },
    //         {
    //             id: "J300", 
    //             title: "Test Job 2", 
    //             salary: "90,000", 
    //             equity: "0.0"
    //         }
    //         ]
    //     }

    const [companyDetails, setCompanyDetails] = useState({});
    const [isReady, setIsReady] = useState(false);

    useEffect(() => {
        async function getCompanyDetails() {
            let res = await apiJobly.getCompanyDetails(companyID);
            setCompanyDetails(res);
            setIsReady(true);
        }

        getCompanyDetails();
    }, [])

    const render = () => {
        if (isReady) {
            return (
                <CardBody>
                    <CardImg width="10%" src={companyDetails.logo_url} alt={`${companyDetails.name} logo`}></CardImg>
                    <CardTitle>
                        <h2>{companyDetails.name}</h2>
                    </CardTitle>
                    <CardText>{companyDetails.description}</CardText>
                    <CardText>{companyDetails.num_employees}</CardText>
                    <ListGroup>
                        {companyDetails.jobs.map(job => JobCard(job))}
                    </ListGroup>
                </CardBody>
            )
        } 

        return (
            <CardText>Loading...</CardText>
        )
    }

    return (
        <section>
            <Card>
                {render()}
            </Card>
        </section>
    )

}

export default CompanyDetail;