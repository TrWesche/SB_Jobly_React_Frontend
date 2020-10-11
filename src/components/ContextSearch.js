import React from "react";
import { Form, FormGroup, Input, Label, Button } from "reactstrap";


function ContextSearch({ formData, handleSubmit, handleChange }) {

    return (
        <Form onSubmit={handleSubmit}>
            <FormGroup className="ContextSearch">
                <Label for="contextSearch">Search</Label>
                <Input 
                    type="text" 
                    name="search" 
                    id="contextSearch" 
                    placeholder="What are you looking for?" 
                    value={formData.search}
                    onChange={handleChange}    
                />
            </FormGroup>
        </Form>
    )
}

export default ContextSearch;