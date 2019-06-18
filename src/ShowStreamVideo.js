import React from "react";
import Modal from "react-bootstrap/Modal";
import ModalBody from "react-bootstrap/ModalBody";
import ModalDialog from "react-bootstrap/ModalDialog";
import ModalFooter from "react-bootstrap/ModalFooter";
import ModalHeader from "react-bootstrap/ModalHeader";
import ModalTitle from "react-bootstrap/ModalTitle";

import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";

import ResponsiveEmbed from "react-bootstrap/ResponsiveEmbed";
import Iframe from "react-iframe";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import "./css/bootstrap.min.css";
// import "react-bootstrap-modal/lib/css/rbm-complete.css";

// import "./css/custom-modal.css";

/* 
      <div>
        <h2>
          {this.state.channelSched.channelTitle}:{" "}
          <i>{this.state.channelSched.channelAssignment}</i>
        </h2>
        <Iframe
          height="100%"
          width="100%"
          url={this.state.channelSched.channelStreamURI}
        />
      </div>
 */

class ShowStreamVideo extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleHide = this.handleHide.bind(this);

    this.state = {
      show: false,
      channelSched: this.props.channelSched
    };

    console.log("ShowStreamSched");
    console.log(this);
  }

  handleHide = e => {
    this.setState({ show: false });
    console.log("handleHide");
    console.log(this.state);
  };

  handleShow = e => {
    console.log("handleShow");
    console.log(e);
    this.setState({ show: true });
  };

  render() {
    return (
      <>
        <Image
          height="65px"
          width="90px"
          src={this.state.channelSched.channelThumbnail}
          onClick={() => this.handleShow(this.state.channelSched)}
        />

        <Modal show={this.state.show} onHide={this.handleHide}>
          <ModalHeader closeButton>
            <ModalTitle>
              {this.state.channelSched.channelTitle}:<br />
              <i>{this.state.channelSched.channelAssignment}</i>
            </ModalTitle>
          </ModalHeader>
          <ModalBody>
            <Iframe url={this.state.channelSched.channelStreamURI} />
          </ModalBody>
          {/* 
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
				 */}
        </Modal>
      </>
    );
  }
}

export default ShowStreamVideo;
