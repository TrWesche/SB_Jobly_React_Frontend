import React, { useState } from "react";
import { Card, CardBody, CardTitle, CardText, Form, FormGroup, Label, Input, Button } from "reactstrap";


function UserLoginForm( { loginUser = null } ) {
    const INITIAL_STATE = {username: "", password: ""}
    const [formData, setFormData] = useState(INITIAL_STATE);
  
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

        // const success = loginUser(formData);

        // if (success) {
        //     setFormData(INITIAL_STATE);
        // }
    }



    return (
        <section>
            <Card>
                <CardBody>
                    <CardTitle className="font-weight-bold text-center">
                        Login
                    </CardTitle>

                    <Form onSubmit={handleSubmit}>
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

                </CardBody>
            </Card>
        </section>
    );
}

export default UserLoginForm;