import React, { useState, useContext } from "react";
import { Redirect } from "react-router-dom";
import { Form, FormGroup, Label, Input, Button, UncontrolledAlert } from "reactstrap";
import apiJobly from "../../utils/apiJobly";
import {AuthContext} from "../AuthContext";

function NewUserForm({ toggle = null }) {
    const INITIAL_STATE = {username: "", password: "", first_name: "", last_name: "", photo_url: "", email: ""}
    const {authToken, setAuthToken} = useContext(AuthContext);

    const [formData, setFormData] = useState(INITIAL_STATE);
    const [alerts, setAlerts] = useState([]);
  
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
            const res = await apiJobly.createUser(formData);
            setAuthToken(res);
            toggle();    
        } catch (error) {
            setAlerts(error);
        }
        
        setFormData({...formData, password: ""});
    }

    const render = () => {
        if (authToken) {
            return (<Redirect to="/" />);
        } else {
            return (
                <Form onSubmit={handleSubmit}>
                    {alerts.map(alert => {
                        return (
                            <UncontrolledAlert color="danger" key={`LoginForm${alert}`}>{alert}</UncontrolledAlert>
                        )
                    })}
        
                    <FormGroup>
                        <Label for="username">Username</Label>
                        <Input type="text" name="username" username="menu" onChange={handleChange} value={formData.username} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="password">Password</Label>
                        <Input type="password" name="password" id="password" onChange={handleChange} value={formData.password}/>
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
        
                    <Button>Submit</Button>
                </Form>
            )
        }
    }


    return (
        render()
    );
}

export default NewUserForm;