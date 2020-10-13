import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Card, CardBody, CardTitle, CardText, Col, Row } from "reactstrap";
import JobCompanyCard from "./subs/JobCompanyCard";
import apiJobly from "../../utils/apiJobly";
import "./JobDetail.css";

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
            try {
                let job = await apiJobly.getJobDetails(jobID);
                setJobDetails(job);
                setIsReady(true);    
            } catch (error) {
                console.log(error)
            }
        }

        getTargetJob();
    }, [jobID])


    
    const jobRender = () => {
        if (isReady) {
            return (
                <CardBody>
                    <Row className="job-about">
                        <CardTitle>
                            <h2>{jobDetails.title}</h2>
                        </CardTitle>
                        <CardText>Salary: {jobDetails.salary}</CardText>
                        <CardText>Equity: {jobDetails.equity}</CardText>
                    </Row>
                    <Row className="company-card">
                        <CardTitle className="company-card-title">
                            About {jobDetails.company.name}
                        </CardTitle>
                        {JobCompanyCard({...jobDetails.company, company_handle: jobDetails.company_handle})}
                    </Row>
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
            <Card className="job-detail-main">
                <Col sm="1" xl="2"/>
                <Col sm="10" xl="8">
                {jobRender()}
                </Col>
                <Col sm="1" xl="2"/>
            </Card>
        </section>
    )

}

export default JobDetail;