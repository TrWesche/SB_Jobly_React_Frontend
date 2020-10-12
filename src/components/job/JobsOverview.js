import React, { useState, useEffect } from "react";
import { Card, CardBody, CardTitle, CardText, ListGroup } from "reactstrap";
import JobCard from "./subs/JobCard";
import ContextSearch from "../ContextSearch";
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
            <ContextSearch formData={searchFormData} handleSubmit={handleSearch} handleChange={handleSearchFromChange}/>
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