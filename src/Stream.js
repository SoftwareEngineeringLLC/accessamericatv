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

import Moment from "react-moment";
import ReactPlayer from "react-player";
// import ReactHLS from "react-hls";
import { SizeMe } from "react-sizeme";

import ColoredLine from "./ColoredLine";

import { getSchedJSON } from "./helpers";

var currentState = {};

// *******************************
// possible stream for browser Channel 321
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
    currentState.station.channelSched = getSchedJSON(
      this.state.stations.filter(isCurrent)[0]
    );

    this.setState({
      station: currentState.station
    });
    // console.log("updateStation");
    // console.log(currentState.station);
  };

  showVideo = e => {
    var video = JSON.stringify(e);
    console.log("showVideo");
    console.log(video);
  };

  showSched = e => {
    var sched = JSON.stringify(e);
    console.log("showSched");
    console.log(sched);
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
    var schedule = currentState.station.channelSched;

    // console.log("schedule", schedule);

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
                    <b>{station.stationID}</b>: {station.stationCity},{" "}
                    {station.stationState}
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
          {/* Channel Streams ****************************** */}
          <Accordion>
            {this.state.station.stationChannels.map(channel => (
              <Card>
                <Accordion.Toggle as={Card.Header} eventKey={channel.channelID}>
                  <Row>
                    {/* 
                    <Col xs="auto">
                      <Image
                        height="60px"
                        width="80px"
                        src={channel.channelThumbnail}
                      />
                    </Col>
 */}
                    <Col>
                      <Row>
                        <Col>
                          <b>
                            Channel {channel.channelID} - {channel.channelTitle}
                          </b>
                          : <i>{channel.channelAssignment}</i>
                        </Col>
                      </Row>
                      <Row>
                        <Col>{channel.channelDesc}</Col>
                      </Row>
                    </Col>
                  </Row>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey={channel.channelID}>
                  <Card.Body>
                    <Accordion>
                      <Card>
                        <Accordion.Toggle
                          as={Card.Header}
                          eventKey={channel.channelID}
                        >
                          <b>Channel {channel.channelID} schedule</b>
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey={channel.channelID}>
                          <Card.Body>
                            {/* ********************************************* */}
                            {/* Channel Schedule **************************** */}
                            {/* ********************************************* */}
                            {schedule.length > 0 ? (
                              schedule[channel.channelID - 1].map(entry => (
                                <Row>
                                  <Col xs={3}>
                                    <Moment format="M/DD h:mma">
                                      {new Date(entry.start)}
                                    </Moment>
                                    {"-"}
                                    <Moment format="h:mma">
                                      {new Date(entry.end)}
                                    </Moment>
                                  </Col>
                                  <Col>
                                    <b>{entry.title}</b>
                                    <br />
                                    {entry.desc}
                                  </Col>
                                </Row>
                              ))
                            ) : (
                              <span>
                                Oops! We're sorry, but the schedule for Channel{" "}
                                {channel.channelID} is currently unavailable
                              </span>
                            )}
                          </Card.Body>
                        </Accordion.Collapse>
                      </Card>
                    </Accordion>
                    {/* ********************************************* */}
                    <br />
                    {/* *************************************** */}
                    {/* Channel Stream ************************ */}
                    {/* *************************************** */}
                    <SizeMe
                      render={({ size }) => (
                        <ReactPlayer
                          url={channel.channelStreamURI}
                          width="100%"
                          /*  width={size.width}
                          height={size.height} */
                          controls="true"
                          file="forceHLS"
                        />
                      )}
                    />
                    {/* *************************************** */}
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
