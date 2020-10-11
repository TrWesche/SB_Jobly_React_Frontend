import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Card, CardBody, CardTitle, CardText, ListGroup, CardLink } from "reactstrap";
import JobCompanyCard from "./subs/JobCompanyCard";
import apiJobly from "../../utils/apiJobly";

function JobDetail() {
    // const sampleValue = 
    //     {
    //         id: "J9000",
    //         title: "Epic Job!",
    //         salary: "9000",
    //         equity: "0.5",
    //         company_handle: "WOOT",
    //         company: {
    //             name: "TestWootCompany", 
    //             num_employees: "30000", 
    //             description: "We yell woot at people", 
    //             logo_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Woot_Logo.svg/640px-Woot_Logo.svg.png"
    //         }
    //     }

    const { jobID } = useParams();

    const [jobDetails, setJobDetails] = useState({});
    const [isReady, setIsReady] = useState(false);


    useEffect(() => {

        async function getTargetJob() {
            let job = await apiJobly.getJobDetails(jobID);
            setJobDetails(job);
            setIsReady(true);
        }

        getTargetJob();
    }, [])


    
    const jobRender = () => {
        if (isReady) {
            return (
                <CardBody>
                    <CardTitle>
                        <h2>{jobDetails.title}</h2>
                    </CardTitle>
                    <CardText>Salary: {jobDetails.salary}</CardText>
                    <CardText>Equity: {jobDetails.equity}</CardText>
                        {JobCompanyCard(jobDetails.company)}
                    <CardLink href={`/companies/${jobDetails.company_handle}`}>View Company Details</CardLink>
                </CardBody>
            )
        } 

        return (
            <CardBody>
                <CardText>Loading...</CardText>
            </CardBody>
        )
    }


    return (
        <section>
            <Card>
                {jobRender()}
            </Card>
        </section>
    )

}

export default JobDetail;