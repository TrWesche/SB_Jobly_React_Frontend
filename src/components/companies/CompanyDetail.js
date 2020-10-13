import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Card, CardBody, CardTitle, CardText, ListGroup, CardImg, Col, Row } from "reactstrap";
import JobCard from "../job/subs/JobCard";
import apiJobly from "../../utils/apiJobly";
import "./CompanyDetail.css";

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
            try {
                let res = await apiJobly.getCompanyDetails(companyID);
                setCompanyDetails(res);
                setIsReady(true);
            } catch (error) {
                console.log(error);
            }
        }

        getCompanyDetails();
    }, [companyID])

    const handleJobAction = async (targetJob, state) => {
        if (state === "applied") {
            await apiJobly.applyToJob(targetJob.id, {state});
        }

        if (state === "retracted") {
            await apiJobly.retractApplication(targetJob.id);
        }
        
        const updatedList = companyDetails.jobs.map((job) => {
            if (targetJob.id === job.id) {
                job.state = state;
            }
            return job;
        })
        setCompanyDetails({...companyDetails, jobs: updatedList})
    }

    const render = () => {
        if (isReady) {
            return (
                <CardBody>
                    <Row className="company-about">
                        <Col sm="2">
                            <CardImg width="10%" src={companyDetails.logo_url} alt={`${companyDetails.name} logo`}></CardImg>
                        </Col>
                        <Col sm="10">
                            <CardTitle>
                                <h2>{companyDetails.name}</h2>
                            </CardTitle>
                            <CardText>About: {companyDetails.description}</CardText>
                            <CardText>Company Size: {companyDetails.num_employees} Employees</CardText>
                        </Col>
                    </Row>
                    <Row className="company-jobs">
                        <CardTitle className="company-listings-title">Current Openings:</CardTitle>
                        <ListGroup>
                            {companyDetails.jobs.map(job => JobCard(job, handleJobAction))}
                        </ListGroup>
                    </Row>
                </CardBody>
            )
        } 

        return (
            <CardText>Loading...</CardText>
        )
    }

    return (
        <section>
            <Card className="company-detail-main">
                <Col sm="1" xl="2"/>
                <Col sm="10" xl="8">
                    {render()}
                </Col>
                <Col sm="1" xl="2"/>
            </Card>
        </section>
    )

}

export default CompanyDetail;