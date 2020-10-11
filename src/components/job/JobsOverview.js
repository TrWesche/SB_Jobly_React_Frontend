import React, { useState, useEffect } from "react";
import { Card, CardBody, CardTitle, CardText, ListGroup } from "reactstrap";
import JobCard from "./subs/JobCard";
import apiJobly from "../../utils/apiJobly";

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

    const [jobList, setJobList] = useState([]);
    const [isReady, setIsReady] = useState(false);

    useEffect(() => {
        async function getJobs(min_salary = null, min_equity = null, search = null) {
            let jobs = await apiJobly.getJobs();
            setJobList(jobs);
            setIsReady(true);
        }

        getJobs();
    }, [])


    const jobRender = () => {
        if (isReady) {
            return (
                <ListGroup>
                    {jobList.map(job => JobCard(job))}
                </ListGroup>
            )
        } 

        return (
            <CardText>Loading...</CardText>
        )
    }

    return (
        <section>
            <Card>
                <CardBody>
                    <CardTitle>
                        <h2>Browse Our Latest Postings!</h2>
                    </CardTitle>
                    {jobRender()}
                </CardBody>
            </Card>
        </section>
    )

}

export default JobsOverview;