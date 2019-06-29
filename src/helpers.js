// helpers.js
import React from "react";

import { defaultState } from "./defaults";

// var stationSchedURI = {};
// var data = {};

export class StationSched extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      station: this.props.station,
      schedData: null
    };

    // console.log("StationSched constructor");
    // console.log(this.state);
  }

  componentDidMount() {
    // get stationSchedURI
    const coProxy = "https://crossorigin.me/";
    const coProxyURI = String(coProxy + this.state.station.stationSchedURI);

    // console.log("stationSchedURI");
    // console.log(coProxyURI);

    var data = {};
    var channelScheds = [];

    fetch(String(coProxyURI))
      /* .then(res => res.json()) */
      .then(response => {
        // console.log("response.text");
        // console.log(response);
        data = response.text() ? JSON.parse(response.text()) : {};
        this.setState({ schedData: data });
      })
      .catch(console.log);
    /* 
    if (Object.keys(data).length == 0) {
      this.setState({ schedData: sampleTelvueSched });
    }
 */
    // console.log("this.state.schedData");
    // console.log(this.state.schedData);

    channelScheds = this.state.schedData;

    // console.log("channelScheds");
    // console.log(channelScheds);
  }

  componentWillUnmount() {
    // Cancel the xhr request, so the callback is never called
    if (this.state.xhr && this.state.xhr.readyState !== 4) {
      // console.log("xhr.abort()");
      this.state.xhr.abort();
    }
  }

  render() {
    // console.log("componentDidMount");
    // console.log(this.state.schedData);

    return <p />;
    /* 
    if (this.state.schedData) {
      return <img src={this.state.schedData[0].url} />;
    } else {
      return <div>Loading...</div>;
    }
 */
  }
}

// The JSON structures below are place holders to be used in development

export function getStationSchedule(station) {
  // *********************************
  // This needs to be done by the DAM
  // *********************************

  // get stationSchedURI
  const coProxy = "https://crossorigin.me/";
  const stationSchedURI = station.stationSchedURI;
  const coProxyURI = coProxy + stationSchedURI;

  var scheduleData = {};

  // console.log("getStationSchedule");
  // console.log(station);
  // console.log(coProxyURI);

  /* fetch("http://jsonplaceholder.typicode.com/todos") */
  fetch(coProxyURI)
    //    .then(res => res.json())
    .then(data => {
      scheduleData = data;
      // console.log(scheduleData);
    })
    .catch(console.log);
}

export function updateStorage(currentState) {
  // updateStorage(currentState)
  // If the stored lastUpdated timestamp is older than
  // currentState.lastUpdated, updates the stored fields
  // and both the stored and currentState.lastUpdated
  // fields with the current Date.now(). Returns the
  // updated currentState.
  var key;
  if (currentState.lastUpdated < localStorage.getItem("lastUpdated")) {
    for (key in currentState) {
      let value = JSON.stringify(currentState[key]);
      localStorage.setItem(key, value);
      // **** UPDATE SERVER STORAGE APPROPRIATELY ****
    }
    var t = String(Date.now());
    localStorage.setItem("lastUpdated", t);
    currentState.lastUpdated = t;
  }
  return currentState;
}

export function initAppState() {
  // initAppState()
  // Tests to see if storage has been initialized and if it has not,
  // calls the DAM API and sets the JSON structures to their initial
  // values. Returns updated currentState.
  var key;
  var currentState = defaultState;
  // **************************************************
  localStorage.clear();
  // **************************************************
  // is this the first run?
  if (!localStorage.hasOwnProperty("homeID")) {
    // **** PLACEHOLDER FOR API CALL TO DAM ****
    // Create localStorage copy from API call results
    for (key in currentState) {
      localStorage.setItem(key, JSON.stringify(currentState[key]));
    }
  }
  // update currentState if storage is newer
  // if a currentState field doesn't exist in storage, add it
  if (currentState.lastUpdated < localStorage.getItem("lastUpdated")) {
    for (key in currentState) {
      if (localStorage.hasOwnProperty(key)) {
        try {
          currentState[key] = JSON.parse(localStorage.getItem(key));
        } catch (e) {
          currentState[key] = localStorage.getItem(key);
        }
      } else {
        localStorage.setItem(key, JSON.stringify(currentState[key]));
        localStorage.setItem("lastUpdated", String(Date.now()));
      }
    }
  }
  return currentState;
}

export function getAllStations() {
  // getAllStations()
  // Returns the list of all centers.
  // ******************************************************
  // Fetch from DAM if timeout
  // ******************************************************
  return JSON.parse(localStorage.getItem("stations"));
}

export function getCurrentStationID() {
  // getCurrentStationID()
  // Returns the currentStationID (e.g., "MetroEast").
  return localStorage.getItem("currentStationID");
}

export function setCurrentStationID(stationID) {
  // setCurrentStationID(stationID)
  // Sets storage currentStationID to stationID and updates lastUpdated.
  localStorage.setItem("currentStationID", String(stationID));
  localStorage.setItem("lastUpdated", String(Date.now()));
}

export function getCurrentStation() {
  // getCurrentStation()
  // Returns the current station JSON from storage.
  var currentStationID = {};
  var stations = {};
  // ******************************************************
  // Fetch from DAM if timeout
  // ******************************************************

  currentStationID = localStorage.getItem("currentStationID");
  stations = JSON.parse(localStorage.getItem("stations"));

  function isCurrent(stations) {
    return stations.stationID === currentStationID;
  }
  return stations.filter(isCurrent)[0];
}

// mappingTelvueSched
// The fields returned by the JSON mapping of the XML returned by the Telvue
// automation system will be mapped to those corresponding to the named fields
// in the defaultStreamState.
//
// The channelID field is determined by parsing the first characters in the
// returned Telvue structure, delimited by a ")" character. These characters
// will be read as digits and mapped to the channelID field; channels whose
// leading characters in the title field will be ignored and discarded. Fields
// with null in this structure will also be ignored when parsing the returned
// JSON.
//
// As other automation systems are supported, their schedule format will be
// defined in similar data structures
/* 
export const mappingTelvueSched = {
  version: "stations.stationAutoVersion",
  channel: [
    {
      title: "stationSchedule.channelID",
      description: null,
      item: [
        {
          title: "stationSchedule.title",
          pubDate: "stationSchedule.startDate",
          end_datetime: "stationSchedule.endDate",
          duration: "stationSchedule.duration",
          programCode: "stationSchedule.programCode",
          episode: "stationSchedule.episode",
          episodeCode: "stationSchedule.episodeCode",
          thumbnail: "stationSchedule.thumbnail",
          attribute: [
            {
              name: "stationSchedule.attribute.name",
              text: "stationSchedule.attribute.text"
            }
          ],
          description: "stationSchedule.description",
          link: "stationSchedule.linkURI",
          category: "stationSchedule.category",
          vodURL: "stationSchedule.vodURI",
          guid: "stationSchedule.guid"
        }
      ]
    }
  ]
};
 */
