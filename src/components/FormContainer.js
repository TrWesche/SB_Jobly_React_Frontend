import React from 'react';
import { Card, CardBody, CardTitle, Col } from 'reactstrap';
import "./FormContainer.css";

const FormContainer = (props) => {
  const {
    className,
    title,
    BodyRender
  } = props;

  return (
    <div className="form-container">
        <Card>
            <Col sm="1" xl="2"/>
            <Col sm="10" xl="8">
                <CardBody>
                    <CardTitle>
                        <h2>{title}</h2>
                    </CardTitle>
                </CardBody>
                <CardBody className={className}>
                    <BodyRender />
                </CardBody>
            </Col>
            <Col sm="1" xl="2"/>
        </Card>
    </div>
  );
}

export default FormContainer;