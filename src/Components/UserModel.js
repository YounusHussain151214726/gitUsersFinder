import React, { useState } from "react";
import { useSelector } from "react-redux";

import { Button, Modal } from "react-bootstrap";

const UserModel = (props) => {
  const [show, setShow] = useState(false);
  const { data } = useSelector((state) => state.Datareducer);

  console.log(props);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="outline-info" onClick={handleShow}>
        More..
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>
            <img
              src={props.image}
              style={{ height: "9pc", marginLeft: "9pc", borderRadius: "70px" }}
            />
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>User Id : {props.id}</Modal.Body>
        <Modal.Body>FullName : {props.name}</Modal.Body>
        <Modal.Body>Followers : {props.followers}</Modal.Body>
        <Modal.Body>Following : {props.following}</Modal.Body>
        <Modal.Body>Location : {props.location}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default UserModel;
