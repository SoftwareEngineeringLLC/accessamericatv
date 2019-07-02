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
import Iframe from "react-iframe";

import "./css/bootstrap.min.css";
// import "react-bootstrap-modal/lib/css/rbm-complete.css";
import "./css/rbm-complete.css";
// import "./css/modal.css";

class ShowStreamVideo extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);

    this.state = {
      show: false,
      channel: this.props.channel
    };

    console.log("ShowStreamVideo");
    console.log(this);
  }

  hideModal() {
    this.setState({ show: false });
  }

  showModal = e => {
    console.log("showModal");
    console.log(e);
    this.setState({ show: true });
  };

  render() {
    return (
      <>
        <Image
          height="60px"
          width="80px"
          src={this.state.channel.channelThumbnail}
          onClick={() => this.showModal(this.state.channe)}
        />
        <Modal show={this.state.show} onHide={this.hideModal} backdrop="static">
          <ModalHeader closeButton>
            <ModalTitle>
              {this.state.channel.channelTitle}:{" "}
              <i>{this.state.channel.channelAssignment}</i>
            </ModalTitle>
          </ModalHeader>
          <ModalBody>
            <Iframe
              height="375px"
              width="470px"
              url={this.state.channel.channelStreamURI}
            />
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

export default ShowStreamVideo;
