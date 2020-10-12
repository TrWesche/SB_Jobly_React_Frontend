import React, { useState, useContext } from "react";
import { Redirect } from "react-router-dom";
import { Form, FormGroup, Label, Input, Button, UncontrolledAlert } from "reactstrap";
import apiJobly from "../../utils/apiJobly";
import {AuthContext} from "../AuthContext";

function UserLoginForm({ toggle = null }) {
    const INITIAL_STATE = {username: "", password: ""}
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
            const res = await apiJobly.loginUser(formData);
            setAuthToken(res);
            toggle();
        } catch (error) {
            setAlerts(error);
        }

        setFormData(INITIAL_STATE);
    }


    const render = () => {
        if (authToken) {
            return (<Redirect to="/" />)
        } else {
            return (
                <Form onSubmit={handleSubmit}>
                    {alerts.map(alert => {
                        return (
                            <UncontrolledAlert color="danger" key={`LoginForm${alert}`}>{alert}</UncontrolledAlert>
                        )
                    })}

                    <FormGroup>
                        <Label for="username">Username*</Label>
                        <Input type="text" name="username" username="menu" onChange={handleChange} value={formData.username} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="password">Password*</Label>
                        <Input type="password" name="password" id="password" onChange={handleChange} value={formData.password}/>
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

export default UserLoginForm;