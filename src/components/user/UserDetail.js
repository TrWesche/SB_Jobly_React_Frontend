import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Card, CardBody, CardTitle, CardText, ListGroup, CardImg, Col, Row } from "reactstrap";
import JobCard from "../job/subs/JobCard";
import apiJobly from "../../utils/apiJobly";
import ModalContainer from "../ModalContainer";
import UserEditForm from "../user/UserEditForm";
import "./UserDetail.css";

function UserDetail() {
    const { username } = useParams();
    
    // const sampleValue = 
    //     {
    //         username: "Testuser1", 
    //         first_name: "Testa", 
    //         last_name: "Usera", 
    //         email: "TestaUsera@test.com", 
    //         photo_url: "https://pbs.twimg.com/profile_images/1419305258/Conrad_Person_pic.jpg",
    //         jobs: [{
    //             id: "J200", 
    //             title: "Test Job", 
    //             company_handle: "MSFT", 
    //             state: false
    //         }
    //         ]
    //     }

    const [userDetails, setUserDetails] = useState({});
    const [isReady, setIsReady] = useState(false);

    useEffect(() => {
        async function getUser() {
            try {
                let res = await apiJobly.getUserDetails(username);
                setUserDetails(res);
                setIsReady(true);
            } catch (error) {
                console.log(error);
            }
        }

        getUser();
    }, [username])


    const handleJobAction = async (targetJob, state) => {
        if (state === "applied") {
            await apiJobly.applyToJob(targetJob.id, {state});
        }

        if (state === "retracted") {
            await apiJobly.retractApplication(targetJob.id);
        }
        
        const updatedList = userDetails.jobs.filter((job) => {
            if (targetJob.id !== job.id) {
                return job;
            }
        })
        setUserDetails({...userDetails, jobs: updatedList})
    }

    const render = () => {
        if (isReady) {
            return (
                <CardBody>
                        <Row>
                            <Col>
                                <CardImg width="10%" src={userDetails.photo_url} alt="User Photo"></CardImg>
                            </Col>
                            <Col>
                                <CardTitle>
                                    <h2>{userDetails.first_name} {userDetails.last_name}</h2>
                                </CardTitle>
                                <CardText>Email: {userDetails.email}</CardText>
                                <ModalContainer buttonLabel="Update" className="UpdateFrom" headerText="Update" BodyRender={UserEditForm} />
                            </Col>
                        </Row>
                        <Row className="user-applied-jobs">
                            <ListGroup>
                                {userDetails.jobs.map(job => JobCard(job, handleJobAction))}
                            </ListGroup>
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
            <Card className="user-detail-main">
                <Col sm="1" xl="2"/>
                <Col sm="10" xl="8">
                    {render()}
                </Col>
                <Col sm="1" xl="2"/>
            </Card> 
        </section>
    )

}

export default UserDetail;