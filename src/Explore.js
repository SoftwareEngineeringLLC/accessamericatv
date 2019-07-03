// Explore.js

import React from "react";
import Form from "react-bootstrap/Form";

import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Dropdown from "react-bootstrap/Dropdown";
import Button from "react-bootstrap/Button";
<<<<<<< HEAD

import ColoredLine from "./ColoredLine";

=======
import ButtonGroup from "react-bootstrap/ButtonGroup";
import ButtonToolbar from "react-bootstrap/ButtonToolbar";

import ColoredLine from "./ColoredLine";

var currentState = {};

>>>>>>> master
class Explore extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.currentState;
<<<<<<< HEAD

    // console.log("Explore constructor");
    // console.log(this.state);
=======
    currentState = this.state;

    console.log("Explore constructor");
    console.log(this.state);
>>>>>>> master
  }

  render() {
    return (
      <div>
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
              <Dropdown>
                <Dropdown.Toggle variant="secondary" id="chooseCenter">
                  Choose Another Center
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  {this.state.stations.map(station => (
                    <Dropdown.Item eventKey={station.stationID}>
                      <b>{station.stationID}</b>:{" "}
                      {this.state.station.stationCity},{" "}
                      {this.state.station.stationState}
                    </Dropdown.Item>
                  ))}
                </Dropdown.Menu>
              </Dropdown>
            </Col>
          </Row>

          <ColoredLine color="grey" />

          <h2>Explore</h2>

          <p>
            You can <b>Browse</b> through our content, following the branches of
            our tree. Or you can <b>Search</b> for content either from our
            center or from all centers by a variety of categories, such as
            Language, Dates, Titles, Genres, and more.
          </p>

          <p />
          <Accordion>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="0">
                <Row>
                  <Col xs="auto">
                    <Image
                      height="20px"
                      width="30px"
                      src={this.state.station.stationThumbnail}
                    />
                  </Col>
                  <Col>
                    <h4>Browse the {this.state.station.stationID} catalog</h4>
                  </Col>
                </Row>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="0">
                <Card.Body>
                  {/* ************************************************* */}
                  {/* ************************************************* */}
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="1">
                <Row>
                  <Col className="justify-content-md-center" xs="auto">
                    <Image
                      height="30px"
                      width="30px"
                      src="./img/noun_User_2277771_50x50.png"
                    />
                  </Col>
                  <Col>
                    <h4>Find what you're looking for</h4>
                  </Col>
                </Row>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="1">
                <Card.Body>
                  <Row>
                    <Col>
                      <Form.Group controlID="searchAllFields">
                        <Form.Label>Search All Fields Locally</Form.Label>
                        <Form.Control
                          type="input"
                          placeholder="Search Locally"
                        />
                      </Form.Group>
                    </Col>
                    <Col xs="auto">
                      <Form.Group controlId="resultsPerPage">
                        <Form.Label>Results per Page</Form.Label>
                        <Dropdown>
                          <Dropdown.Toggle
                            variant="secondary"
                            id="language"
                            block
                          >
                            10
                          </Dropdown.Toggle>
                          <Dropdown.Menu>
                            <Dropdown.Item>10</Dropdown.Item>
                            <Dropdown.Item>25</Dropdown.Item>
                            <Dropdown.Item>50</Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>
                      </Form.Group>
                    </Col>
                  </Row>

                  <Row>
                    <Col xs="2">
                      <Form.Group controlId="searchLanguage">
                        <Form.Label>Language</Form.Label>
                        <Dropdown>
                          <Dropdown.Toggle
                            variant="secondary"
                            id="language"
                            block
                          >
                            English
                          </Dropdown.Toggle>
                          <Dropdown.Menu>
                            {/*                             
                            { station.stationLanguages.array.forEach(language => {
                              <Dropdown.Item eventKey={language}>
                                {language}
                              </Dropdown.Item>
                            });
                              this.state.stations.map(station => (
                              <Dropdown.Item eventKey={station.stationID}>
                                <b>{station.stationID}</b>:{" "}
                                {this.state.station.stationCity},{" "}
                                {this.state.station.stationState}
                              </Dropdown.Item>
                            ))}
 */}
                            <Dropdown.Item>English</Dropdown.Item>
                            <Dropdown.Item>Khmer</Dropdown.Item>
                            <Dropdown.Item>Manderin</Dropdown.Item>
                            <Dropdown.Item>Russian</Dropdown.Item>
                            <Dropdown.Item>Slovanian</Dropdown.Item>
                            <Dropdown.Item>Spanish</Dropdown.Item>
                            <Dropdown.Item>Vietnamese</Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>
                      </Form.Group>
                    </Col>
                    <Col>
                      <Form.Group controlId="searchCenter">
                        <Form.Label>Community Media Center</Form.Label>
                        <Dropdown>
                          <Dropdown.Toggle
                            variant="secondary"
                            id="center"
                            block
                          >
                            {this.state.station.stationID}
                          </Dropdown.Toggle>
                          <Dropdown.Menu>
                            {this.state.stations.map(station => (
                              <Dropdown.Item eventKey={station.stationID}>
                                <b>{station.stationID}</b>:{" "}
                                {this.state.station.stationCity},{" "}
                                {this.state.station.stationState}
                              </Dropdown.Item>
                            ))}
                          </Dropdown.Menu>
                        </Dropdown>
                      </Form.Group>
                    </Col>
                    <Col>
                      <Form.Group controlId="searchFrom">
                        <Form.Label>Date From</Form.Label>
                        <Form.Control as="input" placeholder="mm/dd/yyyy" />
                      </Form.Group>
                    </Col>
                    <Col>
                      <Form.Group controlId="searchTo">
                        <Form.Label>Date To</Form.Label>
                        <Form.Control as="input" placeholder="mm/dd/yyyy" />
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <Form.Group controlId="event">
                        <Form.Label>Title/Event</Form.Label>
                        <Form.Control as="input" />
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <Form.Group controlId="description">
                        <Form.Label>Description</Form.Label>
                        <Form.Control as="input" />
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <Form.Group controlId="series">
                        <Form.Label>Series</Form.Label>
                        <Form.Control as="input" />
                      </Form.Group>
                    </Col>
                    <Col>
                      <Form.Group controlId="season">
                        <Form.Label>Season</Form.Label>
                        <Form.Control as="input" />
                      </Form.Group>
                    </Col>
                    <Col>
                      <Form.Group controlId="episode">
                        <Form.Label>Episode</Form.Label>
                        <Form.Control as="input" />
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <Form.Group controlId="cast">
                        <Form.Label>Cast/Guests</Form.Label>
                        <Form.Control as="input" />
                      </Form.Group>
                    </Col>
                    <Col>
                      <Form.Group controlId="crew">
                        <Form.Label>Crew</Form.Label>
                        <Form.Control as="input" />
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col />
                    <Col>
                      <div
                        key="inline-radio"
                        className="justify-content-md-center"
                      >
                        <Form.Check
                          inline
                          type="checkbox"
                          label="Show New Only"
                          id="genre-new"
                        />
                        <Form.Check
                          inline
                          name="genreSearchOption"
                          type="radio"
                          label="ANY Checked Genres"
                          id="genre-radio-1"
                        />
                        <Form.Check
                          inline
                          name="genreSearchOption"
                          type="radio"
                          label="ALL Checked Genres"
                          id="genre-radio-2"
                        />
                      </div>
                    </Col>
                    <Col />
                  </Row>
                  <Form.Row>
                    <Col>
                      <Form.Check
                        inline
                        type="checkbox"
                        label="Action & Adventure"
                        id="genre-action"
                      />
                    </Col>
                    <Col>
                      <Form.Check
                        inline
                        type="checkbox"
                        label="Animation"
                        id="genre-animation"
                      />
                    </Col>
                    <Col>
                      <Form.Check
                        inline
                        type="checkbox"
                        label="Arts"
                        id="genre-arts"
                      />
                    </Col>
                    <Col>
                      <Form.Check
                        inline
                        type="checkbox"
                        label="Children & Family"
                        id="genre-children"
                      />
                    </Col>
                  </Form.Row>
                  <Form.Row>
                    <Col>
                      <Form.Check
                        inline
                        type="checkbox"
                        label="Community Events"
                        id="genre-community-events"
                      />
                    </Col>
                    <Col>
                      <Form.Check
                        inline
                        type="checkbox"
                        label="Community Produced"
                        id="genre-community-produced"
                      />
                    </Col>
                    <Col>
                      <Form.Check
                        inline
                        type="checkbox"
                        label="Comedy"
                        id="genre-comedy"
                      />
                    </Col>
                    <Col>
                      <Form.Check
                        inline
                        type="checkbox"
                        label="Culture"
                        id="genre-culture"
                      />
                    </Col>
                  </Form.Row>
                  <Form.Row>
                    <Col>
                      <Form.Check
                        inline
                        type="checkbox"
                        label="Documentary"
                        id="genre-documentary"
                      />
                    </Col>
                    <Col>
                      <Form.Check
                        inline
                        type="checkbox"
                        label="Drama"
                        id="genre-drama"
                      />
                    </Col>
                    <Col>
                      <Form.Check
                        inline
                        type="checkbox"
                        label="Educational"
                        id="genre-educational"
                      />
                    </Col>
                    <Col>
                      <Form.Check
                        inline
                        type="checkbox"
                        label="Experimental"
                        id="genre-experimental"
                      />
                    </Col>
                  </Form.Row>
                  <Form.Row>
                    <Col>
                      <Form.Check
                        inline
                        type="checkbox"
                        label="Foreign"
                        id="genre-foreign"
                      />
                    </Col>
                    <Col>
                      <Form.Check
                        inline
                        type="checkbox"
                        label="Forums & Events"
                        id="genre-forums-events"
                      />
                    </Col>
                    <Col>
                      <Form.Check
                        inline
                        type="checkbox"
                        label="Government"
                        id="genre-government"
                      />
                    </Col>
                    <Col>
                      <Form.Check
                        inline
                        type="checkbox"
                        label="History"
                        id="genre-history"
                      />
                    </Col>
                  </Form.Row>
                  <Form.Row>
                    <Col>
                      <Form.Check
                        inline
                        type="checkbox"
                        label="Inspirational & Religious"
                        id="genre-religious"
                      />
                    </Col>
                    <Col>
                      <Form.Check
                        inline
                        type="checkbox"
                        label="Music"
                        id="genre-music"
                      />
                    </Col>
                    <Col>
                      <Form.Check
                        inline
                        type="checkbox"
                        label="News"
                        id="genre-news"
                      />
                    </Col>
                    <Col>
                      <Form.Check
                        inline
                        type="checkbox"
                        label="Paid Content"
                        id="genre-paid-content"
                      />
                    </Col>
                  </Form.Row>
                  <Form.Row>
                    <Col>
                      <Form.Check
                        inline
                        type="checkbox"
                        label="PSAs & Promos"
                        id="genre-psas-promos"
                      />
                    </Col>
                    <Col>
                      <Form.Check
                        inline
                        type="checkbox"
                        label="Podcasts"
                        id="genre-podcasts"
                      />
                    </Col>
                    <Col>
                      <Form.Check
                        inline
                        type="checkbox"
                        label="Public Affairs"
                        id="genre-public-affairs"
                      />
                    </Col>
                    <Col>
                      <Form.Check
                        inline
                        type="checkbox"
                        label="Reality"
                        id="genre-reality"
                      />
                    </Col>
                  </Form.Row>
                  <Form.Row>
                    <Col>
                      <Form.Check
                        inline
                        type="checkbox"
                        label="Romance"
                        id="genre-romance"
                      />
                    </Col>
                    <Col>
                      <Form.Check
                        inline
                        type="checkbox"
                        label="Science & Tech"
                        id="genre-science-tech"
                      />
                    </Col>
                    <Col>
                      <Form.Check
                        inline
                        type="checkbox"
                        label="Science Fiction"
                        id="genre-science-fiction"
                      />
                    </Col>
                    <Col>
                      <Form.Check
                        inline
                        type="checkbox"
                        label="Sports"
                        id="genre-sports"
                      />
                    </Col>
                  </Form.Row>
                  <Form.Row>
                    <Col>
                      <Form.Check
                        inline
                        type="checkbox"
                        label="Student/Youth"
                        id="genre-student-youth"
                      />
                    </Col>
                    <Col>
                      <Form.Check
                        inline
                        type="checkbox"
                        label="Talk"
                        id="genre-talk"
                      />
                    </Col>
                    <Col>
                      <Form.Check
                        inline
                        type="checkbox"
                        label="Training"
                        id="genre-training"
                      />
                    </Col>
                    <Col>
                      <Form.Check
                        inline
                        type="checkbox"
                        label="Virtual Reality"
                        id="genre-virtual-reality"
                      />
                    </Col>
                  </Form.Row>
                  <br />
                  <Button id="search" variant="secondary" block>
                    Search
                  </Button>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
          <br />
          <Row>
            <Col>
              Displaying <span>1</span> of <span>1</span> results found
            </Col>
            <Col className="text-right">
              <Button variant="secondary" size="sm">
                &lt;
              </Button>{" "}
              Page <span>1</span> of <span>1</span> pages{" "}
              <Button variant="secondary" size="sm">
                &gt;
              </Button>
            </Col>
          </Row>
          <ColoredLine color="grey" />
          <Row>
            <Col>
              <Row>
                <Col>
                  <Image />
                </Col>
              </Row>
              <Row>
                <Col className="text-center">
                  <span>
                    <i>fast fa-save</i>
                  </span>
                </Col>
                <Col className="text-center">
                  <span>
                    <i>fas fa-arrow-down</i>
                  </span>
                </Col>
                <Col className="text-center">
                  <span>
                    <i>fa fa-heart</i>
                  </span>
                </Col>
              </Row>
            </Col>
            <Col xs="auto">
              <Row>
                <Col>06/14/2017</Col>
              </Row>
              <Row>
                <Col>
                  Season:
                  <br />1
                </Col>
                <Col>
                  Episode:
                  <br />
                  1000
                </Col>
              </Row>
              <Row>
                <Col>English</Col>
              </Row>
              <Row>
                <Col>MetroEast</Col>
              </Row>
            </Col>
            <Col>
              <Row>
                <Col>Community Hotline</Col>
              </Row>
              <Row>
                <Col>
                  Episode 1000 of Community Hotline, MetroEast's weekly showcase
                  for non-profit organizations.
                </Col>
              </Row>
              <Row>
                <Col>Cast: Monica Weitzel</Col>
                <Col>Crew: Emily Vidal</Col>
              </Row>
              <Row>
                <Col>Genres: Public Affairs, Talk</Col>
              </Row>
            </Col>
          </Row>
        </Form>
      </div>
    );
  }
}
export default Explore;
