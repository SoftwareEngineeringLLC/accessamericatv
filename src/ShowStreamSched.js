import React from "react";
import Modal from "react-bootstrap/Modal";
import ModalBody from "react-bootstrap/ModalBody";
import ModalDialog from "react-bootstrap/ModalDialog";
import ModalFooter from "react-bootstrap/ModalFooter";
import ModalHeader from "react-bootstrap/ModalHeader";
import ModalTitle from "react-bootstrap/ModalTitle";

import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import "./css/bootstrap.min.css";

class ShowStreamSched extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.state = {
      show: false,
      channelSched: this.props.channelSched
    };

    console.log("ShowStreamSched");
    console.log(this);
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow = e => {
    console.log("handleShow");
    console.log(e);
    this.setState({ show: true });
  };

  render() {
    return (
      <>
        <Image
          height="75px"
          width="75px"
          src="./img/noun_Calendar_2532314-100x100.png"
          onClick={() => this.handleShow(this.state.channelSched)}
        />

        <Modal
          size="xl"
          show={this.state.show}
          onHide={this.handleClose}
          backdrop="static"
        >
          <ModalHeader closeButton>
            <ModalTitle>
              {this.state.channelSched.channelTitle}:{" "}
              <i>{this.state.channelSched.channelAssignment}</i>
            </ModalTitle>
          </ModalHeader>
          <ModalBody>
            <Row>
              <Col xs="auto">
                <Image
                  height="65px"
                  width="90px"
                  src={this.state.channelSched.channelThumbnail}
                />
              </Col>
              <Col>
                <p>{this.state.channelSched.channelDesc}</p>
              </Col>
            </Row>
          </ModalBody>
          <ModalFooter>
            <Button
              size="sm"
              variant="secondary"
              onClick={this.handleClose}
              fa-align-center
              block
            >
              Done
            </Button>
          </ModalFooter>
        </Modal>
      </>
    );
  }
}

export default ShowStreamSched;
