import React, { useState } from "react";
import { Card, CardBody, CardTitle, CardText, Form, FormGroup, Label, Input, Button } from "reactstrap";


function UserEditForm( { addUser = null } ) {
    const INITIAL_STATE = { password: "", first_name: "", last_name: "", photo_url: "", email: "" }
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

        // const success = addUser(formData);

        // if (success) {
        //     setFormData(INITIAL_STATE);
        // }
    }



    return (
        <section>
            <Card>
                <CardBody>
                    <CardTitle className="font-weight-bold text-center">
                        Keep Your Profile Up to Date!
                    </CardTitle>

                    <Form onSubmit={handleSubmit}>
                        <FormGroup>
                            <Label for="username">Username*</Label>
                            <Input type="text" name="username" username="menu" value={formData.username} disabled />
                        </FormGroup>
                        <FormGroup>
                            <Label for="password">Password*</Label>
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

                    <CardText>
                        *Requried
                    </CardText>

                </CardBody>
            </Card>
        </section>
    );
}

export default UserEditForm;