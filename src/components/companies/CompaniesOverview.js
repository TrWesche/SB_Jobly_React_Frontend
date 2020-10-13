import React, { useState, useEffect } from "react";
import { Card, CardBody, CardTitle, CardText, ListGroup, Col } from "reactstrap";
import CompanyCard from "./subs/CompanyCard";
import ContextSearch from "../ContextSearch";
import apiJobly from "../../utils/apiJobly";
import "./CompaniesOverview.css";

function CompaniesOverview() {
    // const sampleValue = [
    //     {
    //         handle: "MSFT",
    //         name: "Microsoft",
    //         description: "Enterprise software company",
    //         logo_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/1200px-Microsoft_logo.svg.png"
    //     }]

    const searchInitialState = {search: ""}

    const [companyList, setCompanyList] = useState([]);
    const [isReady, setIsReady] = useState(false);
    const [searchFormData, setSearchFormData] = useState(searchInitialState);

    useEffect(() => {
        async function getCompanies() {
            try {
                let res = await apiJobly.getCompanies();
                setCompanyList(res);
                setIsReady(true); 
            } catch (error) {
                console.log(error);
            }
        }

        getCompanies();
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
            let res = await apiJobly.searchCompanies(searchFormData);
            setCompanyList(res);
            setIsReady(true);
            setSearchFormData(searchInitialState);   
        } catch (error) {
            console.log(error);
        }
    }  


    const render = () => {
        if (isReady) {
            return (
                <ListGroup className="companies-overview-list">
                    {companyList.map(company => CompanyCard(company))}
                </ListGroup>
            )
        } 

        return (
            <CardText>Loading...</CardText>
        )
    }

    return (
        <section>
            <Card className="companies-overview-main">
                <Col sm="1" xl="2"/>
                <Col sm="10" xl="8">
                    <CardBody>
                        <CardTitle>
                            <h2>Browse Potential Employers</h2>
                        </CardTitle>
                        <ContextSearch formData={searchFormData} handleSubmit={handleSearch} handleChange={handleSearchFromChange}/>
                        {render()}
                    </CardBody>
                </Col>
                <Col sm="1" xl="2"/>
            </Card>
        </section>
    )

}

export default CompaniesOverview;