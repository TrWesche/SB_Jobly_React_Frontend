import React, { useState, useEffect, useContext } from "react";
import { useParams, Redirect } from "react-router-dom";
import { Card, CardBody, CardTitle, CardText, Form, FormGroup, Label, Input, Button, UncontrolledAlert, FormText } from "reactstrap";
import apiJobly from "../../utils/apiJobly";
import {AuthContext} from "../AuthContext";

//TODO: How do i get this to update the data on the page from the Modal?

function UserEditForm({ toggle = null }) {
    const INITIAL_STATE = { password: "", first_name: "", last_name: "", photo_url: "", email: "" }
    const { username } = useParams();
    const {authToken, setAuthToken} = useContext(AuthContext);
    
    const [formData, setFormData] = useState(INITIAL_STATE);
    const [alerts, setAlerts] = useState([]);
    const [isReady, setIsReady] = useState(false);
    const [isChanged, setIsChanged] = useState(false);

    useEffect(() => {
        async function getUser() {
            try {
                let res = await apiJobly.getUserDetails(username);
                setFormData(res);
                setIsReady(true);
            } catch (error) {
                console.log(error)
            }  
        }

        getUser();
    }, [])

    const format = ({password, first_name, last_name, photo_url, email}) => {
        return ({password, first_name, last_name, photo_url, email});
    } 
  
    // Function for controlling form data
    const handleChange = (e) => {
      let { name, value } = e.target;
  
      setFormData(fData => ({
          ...fData,
          [name]: value
      }));
    };
  
    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
            const res = await apiJobly.updateUserDetails(username, format(formData));
            setIsChanged(true);
            toggle();
        } catch (error) {
            setAlerts(error);
        }
        
        setFormData({...formData, password: ""});
    }

    const render = () => {
        if (!authToken) {
            return (<Redirect to="/login" />)
        } else {
            if (isChanged) {
                return (<Redirect to={`/users/${username}`} />)
            }

            if (isReady) {
                return (
                    <Form onSubmit={handleSubmit}>
                        {alerts.map(alert => {
                            return (
                                <UncontrolledAlert color="danger" key={`LoginForm${alert}`}>{alert}</UncontrolledAlert>
                            )
                        })}

                        <FormGroup>
                            <Label for="username">Username</Label>
                            <Input type="text" name="username" username="menu" value={formData.username} disabled />
                        </FormGroup>
                        <FormGroup>
                            <Label for="first_name">First Name</Label>
                            <Input type="text" name="first_name" id="first_name" onChange={handleChange} value={formData.first_name}/>
                        </FormGroup>
                        <FormGroup>
                            <Label for="last_name">Last Name</Label>
                            <Input type="text" name="last_name" id="last_name" onChange={handleChange} value={formData.last_name}/>
                        </FormGroup>
                        <FormGroup>
                            <Label for="photo_url">Photo Address</Label>
                            <Input type="text" name="photo_url" id="photo_url" onChange={handleChange} value={formData.photo_url}/>
                        </FormGroup>
                        <FormGroup>
                            <Label for="email">Email</Label>
                            <Input type="text" name="email" id="email" onChange={handleChange} value={formData.email}/>
                        </FormGroup>
                        <FormText>Enter Your Password to Confirm Changes:</FormText>
                        <FormGroup>
                            <Label for="password">Password</Label>
                            <Input type="password" name="password" id="password" onChange={handleChange} value={formData.password}/>
                        </FormGroup>
    
                        <Button>Submit</Button>
                    </Form>
                )
            }

            
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
                <CardBody>
                    <CardTitle className="font-weight-bold text-center">
                        Keep Your Profile Up to Date!
                    </CardTitle>
                    {render()}
                </CardBody>
            </Card>
        </section>
    );
}

export default UserEditForm;