// Stream.js

import React from "react";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import DropdownButton from "react-bootstrap/DropdownButton";
import DropdownItem from "react-bootstrap/DropdownItem";

import ShowStreamVideo from "./ShowStreamVideo";
import ShowStreamSched from "./ShowStreamSched";
import ColoredLine from "./ColoredLine";

var currentState = {};

class Stream extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.currentState;
    currentState = this.state;

    this.showVideo = this.showVideo.bind(this);
    this.showSched = this.showSched.bind(this);

    console.log("Stream constructor");
    console.log(currentState);
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

  updateStation = e => {
    // e.preventDefault();
    var stationID = String(e);

    currentState.lastUpdated =
      currentState.currentStationID === stationID
        ? currentState.lastUpdated
        : Date.now();
    currentState.currentStationID = stationID;

    function isCurrent(stations) {
      return stations.stationID === currentState.currentStationID;
    }
    currentState.station = this.state.stations.filter(isCurrent)[0];
    this.setState(currentState);

    console.log("updateStation");
    console.log(this.state);
  };

  showVideo = e => {
    var v = JSON.stringify(e);
    console.log("showVideo");
    console.log(v);
  };

  showSched = e => {
    var s = JSON.stringify(e);
    console.log("showSched");
    console.log(s);
  };

  channelStream = e => {
    var channelStreamURI = String(e);
    console.log("channelStream");
    console.log(channelStreamURI);
  };

  channelSched = e => {
    var channelSchedURI = String(e);
    console.log("channelSchedURI");
    console.log(channelSchedURI);
  };

  componentWillMount() {
    this.updateStation(currentState.currentStationID);
  }

  componentWillUnmount() {
    /* setCurrentStationID(this.state.currentStationID); */
  }

  render() {
    return (
      <div>
        <h2>Stream</h2>
        <Form>
          <p>
            Select one of the channels below to see what we are currently
            broadcasting or search for another Community Media Center to watch
            one of their live streams.
          </p>
          <ColoredLine color="grey" />
          <h5>Current Center</h5>
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
                    {this.state.station.stationWebsite}
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
          <p />
          <Row>
            <Col>
              <center>
                <DropdownButton
                  title="View Our Programming Schedule"
                  variant="secondary"
                  drop="down"
                  fa-align-center
                  onSelect={this.updateStation}
                  block
                >
                  {this.state.stations.map(station => (
                    <DropdownItem eventKey={station.stationID}>
                      <b>{station.stationID}</b>:{" "}
                      {this.state.station.stationCity},{" "}
                      {this.state.station.stationState}
                    </DropdownItem>
                  ))}
                </DropdownButton>
              </center>
            </Col>
          </Row>
          <h5>Channels</h5>
          <p />
          {this.state.station.stationChannels.map(channel => (
            <Row>
              <Col xs="auto">
                <ShowStreamVideo channel={channel} />
                {/* 
                <Image
                  height="60px"
                  width="80px"
                  src={channel.channelThumbnail}
                  onClick={() => this.showVideo(channel)}
                />
 */}{" "}
              </Col>
              <Col>
                <Row>
                  <Col>
                    <b>{channel.channelTitle}</b>: {channel.channelAssignment}
                  </Col>
                </Row>
                <Row>
                  <Col>{channel.channelDesc}</Col>
                </Row>
              </Col>
              <Col xs="auto">
                <ShowStreamSched channel={channel} />
                {/* 
                <Image
                  height="75px"
                  width="75px"
                  src="./img/noun_Calendar_2532314-100x100.png"
                  onClick={() => this.showSched(channel)}
                />
 */}
              </Col>
            </Row>
          ))}
        </Form>
      </div>
    );
  }
}
export default Stream;
