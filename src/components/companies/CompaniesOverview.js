import React, { useState, useEffect } from "react";
import { Card, CardBody, CardTitle, CardText, ListGroup } from "reactstrap";
import CompanyCard from "./subs/CompanyCard";
import ContextSearch from "../ContextSearch";
import apiJobly from "../../utils/apiJobly";

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
            let res = await apiJobly.getCompanies();
            setCompanyList(res);
            setIsReady(true);
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

        setIsReady(false);
        let res = await apiJobly.searchCompanies(searchFormData);
        setCompanyList(res);
        setIsReady(true);
        setSearchFormData(searchInitialState);

    }  


    const render = () => {
        if (isReady) {
            return (
                <ListGroup>
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
            <ContextSearch formData={searchFormData} handleSubmit={handleSearch} handleChange={handleSearchFromChange}/>
            <Card>
                <CardBody>
                    <CardTitle>
                        <h2>Companies Overview Placeholder</h2>
                    </CardTitle>
                    <CardText>To be completed.</CardText>
                    {render()}
                </CardBody>
            </Card>
        </section>
    )

}

export default CompaniesOverview;