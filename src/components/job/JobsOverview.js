import React, { useState, useEffect } from "react";
import { Card, CardBody, CardTitle, CardText, ListGroup, Col } from "reactstrap";
import JobCard from "./subs/JobCard";
import ContextSearch from "../ContextSearch";
import apiJobly from "../../utils/apiJobly";
import "./JobsOverview.css"

function JobsOverview() {
    // const sampleValue = [
    //     {
    //         id: "J100",
    //         title: "TestJob",
    //         company_handle: "TestCompany",
    //         salary: "$100,000",
    //         equity: "0.0",
    //         state: "CA"
    //     }]

    const searchInitialState = {search: ""}

    const [jobList, setJobList] = useState([]);
    const [isReady, setIsReady] = useState(false);
    const [searchFormData, setSearchFormData] = useState(searchInitialState);

    useEffect(() => {
        async function getJobs() {
            try {
                let res = await apiJobly.getJobs();
                setJobList(res);
                setIsReady(true);     
            } catch (error) {
                console.log(error);
            }
        }

        getJobs();
    }, [])

    const handleSearchFromChange = (e) => {
        let { name, value } = e.target;
    
        setSearchFormData(fData => ({
            ...fData,
            [name]: value
        }));
    };

    const handleSearch = async (e) => {
        e.preventDefault();

        try {
            setIsReady(false);
            let res = await apiJobly.searchJobs(searchFormData);
            setJobList(res);
            setIsReady(true);
            setSearchFormData(searchInitialState);    
        } catch (error) {
            console.log(error);
        }

    }  

    const handleJobAction = async (targetJob, state) => {
        if (state === "applied") {
            await apiJobly.applyToJob(targetJob.id, {state});
        }

        if (state === "retracted") {
            await apiJobly.retractApplication(targetJob.id);
        }
        
        const updatedList = jobList.map((job) => {
            if (targetJob.id === job.id) {
                job.state = state;
            }
            return job;
        })
        setJobList(updatedList)
    }

    const jobRender = () => {
        if (isReady) {
            return (
                <ListGroup className="jobs-overview-list">
                    {jobList.map(job => JobCard(job, handleJobAction))}
                </ListGroup>
            )
        } 

        return (
            <CardText>Loading...</CardText>
        )
    }

    return (
        <section>
            <Card className="jobs-overview-main">
                <Col sm="1" xl="2"/>
                <Col sm="10" xl="8">
                    <CardBody>
                        <CardTitle>
                            <h2>Browse Our Latest Postings!</h2>
                        </CardTitle>
                        <ContextSearch formData={searchFormData} handleSubmit={handleSearch} handleChange={handleSearchFromChange}/>
                        {jobRender()}
                    </CardBody>
                </Col>
                <Col sm="1" xl="2"/>
            </Card>
        </section>
    )

}

export default JobsOverview;