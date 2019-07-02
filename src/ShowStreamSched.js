import React from "react";
import Modal from "react-bootstrap-modal/lib/Modal";
import ModalBody from "react-bootstrap-modal/lib/Body";
import ModalFooter from "react-bootstrap-modal/lib/Footer";
import ModalHeader from "react-bootstrap-modal/lib/Header";
import ModalTitle from "react-bootstrap-modal/lib/Title";

import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import "./css/bootstrap.min.css";
// import "react-bootstrap-modal/lib/css/rbm-complete.css";
import "./css/rbm-complete.css";
// import "./css/modal.css";

class ShowStreamSched extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);

    this.state = {
      show: false,
      channel: this.props.channel
    };

    console.log("ShowStreamSched");
    console.log(this);
  }

  hideModal() {
    this.setState({ show: false });
  }

  showModal = e => {
    this.setState({ show: true });
    console.log("showModal");
    console.log(this);
  };

  render() {
    return (
      <>
        <Image
          height="75px"
          width="75px"
          src="./img/noun_Calendar_2532314-100x100.png"
          onClick={() => this.showModal(this.state.channe)}
        />

        <Modal
          size="xl"
          show={this.state.show}
          onHide={this.hideModal}
          backdrop="static"
        >
          <ModalHeader closeButton>
            <ModalTitle>
              {this.state.channel.channelTitle}:{" "}
              <i>{this.state.channel.channelAssignment}</i>
            </ModalTitle>
          </ModalHeader>
          <ModalBody>
            <Row>
              <Col xs="auto">
                <Image
                  height="65px"
                  width="90px"
                  src={this.state.channel.channelThumbnail}
                />
                {console.log("ModalImage")}
                {console.log(this.state.show)}
              </Col>
              <Col>
                <p>{this.state.channel.channelDesc}</p>
              </Col>
            </Row>
          </ModalBody>

          <ModalFooter>
            <Button
              size="sm"
              variant="secondary"
              onClick={this.hideModal}
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
