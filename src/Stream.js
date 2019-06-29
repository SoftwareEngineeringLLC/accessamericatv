// Stream.js

import React from "react";
import Form from "react-bootstrap/Form";

import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import DropdownButton from "react-bootstrap/DropdownButton";
import DropdownItem from "react-bootstrap/DropdownItem";

import ColoredLine from "./ColoredLine";

import { StationSched } from "./helpers";

var currentState = {};

// *******************************
// possible stream for browser
// https://t02554-lh.akamaihd.net/i/t02554a_1@497737/master.m3u8?set-akamai-hls-revision=5

class Stream extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.currentState;
    currentState = this.state;

    this.showVideo = this.showVideo.bind(this);
    this.showSched = this.showSched.bind(this);

    // console.log("Stream constructor");
    // console.log(this.state);
  }

  stationThumbnailRef = React.createRef();
  stationIDRef = React.createRef();
  stationNameRef = React.createRef();
  stationCityRef = React.createRef();
  stationStateRef = React.createRef();
  stationPhoneRef = React.createRef();
  stationEmailRef = React.createRef();
  stationWebsite = React.createRef();
  showVideo = React.createRef();
  showSched = React.createRef();

  doFull = () => {
    this.setState({ isFull: true });
  };

  undoFull = () => {
    this.setState({ isFull: false });
  };

  updateStation = e => {
    // e.preventDefault();
    var stationID = String(e);

    currentState.lastUpdated =
      this.state.currentStationID === stationID
        ? this.state.lastUpdated
        : Date.now();
    this.setState({
      currentStationID: stationID
    });
    this.setState({
      lastUpdated: currentState.lastUpdated
    });

    function isCurrent(stations) {
      return stations.stationID === stationID;
    }
    currentState.station = this.state.stations.filter(isCurrent)[0];

    this.setState({
      station: currentState.station
    });
  };

  showVideo = e => {
    var v = JSON.stringify(e);
    // console.log("showVideo");
    // console.log(v);
  };

  showSched = e => {
    var s = JSON.stringify(e);
    // console.log("showSched");
    // console.log(s);
  };

  channelStream = e => {
    var channelStreamURI = String(e);
    // console.log("channelStream");
    // console.log(channelStreamURI);
  };

  channelSched = e => {
    var channelSchedURI = String(e);
    // console.log("channelSchedURI");
    // console.log(channelSchedURI);
  };

  componentWillMount() {
    /* 
    history = createBrowserHistory();
    location = history.location;
    unlisten = history.listen((location, action) => {
    // console.log(action, location.pathname, location.state);
    });
 */
    this.updateStation(this.state.currentStationID);
  }

  componentWillUnmount() {
    /* setCurrentStationID(this.state.currentStationID); */
  }

  render() {
    return (
      <div>
        <p />
        <Form>
          <Row>
            <Col xs="auto">
              <Image
                name="currentStationThumbnail"
                height="60px"
                width="80px"
                ref={this.stationThumbnailRef}
                src={this.state.station.stationThumbnail}
              />
            </Col>
            <Col xs="auto">
              <Row>
                <Col>
                  <b>
                    <span name="currentStationID" ref={this.stationIDRef}>
                      {this.state.station.stationID}
                    </span>
                  </b>
                </Col>
              </Row>
              <Row>
                <Col>
                  <span name="currentStationName" ref={this.stationNameRef}>
                    {this.state.station.stationName}
                  </span>
                </Col>
              </Row>
              <Row>
                <Col>
                  <span name="currentStationCity" ref={this.stationCityRef}>
                    {this.state.station.stationCity}
                  </span>
                  ,{" "}
                  <span name="currentStationState" ref={this.stationStateRef}>
                    {this.state.station.stationState}
                  </span>
                </Col>
              </Row>
            </Col>
            <Col>
              <Row>
                <Col>
                  <span name="currentStationPhone" ref={this.stationPhoneRef}>
                    {this.state.station.stationPhone}
                  </span>{" "}
                  /{" "}
                  <span name="currentStationEmail" ref={this.stationEmailRef}>
                    {this.state.station.stationEmail}
                  </span>
                </Col>
              </Row>
              <Row>
                <Col>
                  <span
                    name="currentStationWebsite"
                    ref={this.stationWebsiteRef}
                  >
                    <a
                      href={this.state.station.stationWebsite}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      {this.state.station.stationWebsite}
                    </a>
                  </span>
                </Col>
              </Row>
            </Col>
            <Col xs="auto">
              <DropdownButton
                title=" Choose Another Center"
                variant="secondary"
                drop="down"
                key="left"
                id="dropdown-button-drop-left"
                onSelect={this.updateStation}
              >
                {this.state.stations.map(station => (
                  <DropdownItem eventKey={station.stationID}>
                    <b>{station.stationID}</b>: {this.state.station.stationCity}
                    , {this.state.station.stationState}
                  </DropdownItem>
                ))}
              </DropdownButton>
            </Col>
          </Row>
          <ColoredLine color="grey" />

          <h2>Stream</h2>
          <p>
            Watch one of these live streams to see what is playing now on a{" "}
            {this.state.station.stationID} channel:
          </p>

          <p />
          <Accordion>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="0">
                <Row>
                  <Col xs="auto">
                    <Image
                      height="60px"
                      width="80px"
                      src={this.state.station.stationThumbnail}
                    />
                  </Col>
                  <Col>
                    View the {this.state.station.stationID} programming schedule
                  </Col>
                </Row>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="0">
                <Card.Body>
                  <StationSched station={this.state.station} />
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            {this.state.station.stationChannels.map(channel => (
              <Card>
                <Accordion.Toggle as={Card.Header} eventKey={channel.channelID}>
                  <Row>
                    <Col xs="auto">
                      <Image
                        height="60px"
                        width="80px"
                        src={channel.channelThumbnail}
                      />
                    </Col>
                    <Col>
                      <Row>
                        <Col>
                          <b>{channel.channelTitle}</b>:{" "}
                          <i>{channel.channelAssignment}</i>
                        </Col>
                      </Row>
                      <Row>
                        <Col>{channel.channelDesc}</Col>
                      </Row>
                    </Col>
                  </Row>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey={channel.channelID}>
                  <Card.Body onClick={this.doFull}>
                    <div
                      className="video"
                      style={{
                        position: "relative",
                        paddingBottom: "56.25%" /* 16:9 */,
                        paddingTop: 25,
                        height: 0
                      }}
                    >
                      <iframe
                        title={channel.channelID}
                        style={{
                          position: "absolute",
                          top: 0,
                          left: 0,
                          width: "100%",
                          height: "100%"
                        }}
                        src={channel.channelStreamURI}
                        frameBorder="0"
                      />
                    </div>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
            ))}
          </Accordion>
        </Form>
      </div>
    );
  }
}
export default Stream;
