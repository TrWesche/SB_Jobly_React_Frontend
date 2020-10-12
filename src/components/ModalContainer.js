import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input } from 'reactstrap';

const ModalContainer = (props) => {
  const {
    buttonLabel,
    className,
    headerText,
    BodyRender
  } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button onClick={toggle}>{buttonLabel}</Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>{headerText}</ModalHeader>
        <ModalBody>
            <BodyRender toggle={toggle} />
        </ModalBody>
      </Modal>
    </div>
  );
}

export default ModalContainer;