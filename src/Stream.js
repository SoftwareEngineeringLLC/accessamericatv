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
    this.state.modalShow = false;
    currentState = this.state;
  }

  stationThumbnailRef = React.createRef();
  stationIDRef = React.createRef();
  stationNameRef = React.createRef();
  stationCityRef = React.createRef();
  stationStateRef = React.createRef();
  stationPhoneRef = React.createRef();
  stationEmailRef = React.createRef();
  stationWebsite = React.createRef();

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
          <h5>Current Station</h5>
          <Row>
            <Col xs="auto">
              <Image
                name="currentStationThumbnail"
                height="125px"
                width="175px"
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
          </Row>

          <Row>
            <Col>
              <center>
                <DropdownButton
                  drop="down"
                  title="Select A Community Media Center"
                  variant="secondary"
                  size="sm"
                  id="Drop"
                  onSelect={this.updateStation}
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
          <ColoredLine color="grey" />
          <h5>Station Channels</h5>
          <p />
          {this.state.station.stationChannels.map(channel => (
            <Row>
              <Col xs="auto">
                <ShowStreamVideo channelSched={channel} />
                {/*                 <Image
                  height="65px"
                  width="90px"
                  src={channel.channelThumbnail}
                  onClick={() => this.channelStream(channel.channelStreamURI)}
                />
 */}
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
              <Col>
                <ShowStreamSched channelSched={channel} />
              </Col>
            </Row>
          ))}
        </Form>
      </div>
    );
  }
}
export default Stream;
