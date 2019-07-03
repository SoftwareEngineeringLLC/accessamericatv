// helpers.js
import React from "react";

import { defaultState } from "./defaults";
import { defaultSchedEntry } from "./defaults";
import schedJSON from "./MetroEastSched.json";

export function isEmpty(obj) {
  for (var key in obj) {
    if (obj.hasOwnProperty(key)) return false;
  }
  return true;
}

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
    // const coProxy = "https://crossorigin.me/";
    // const coProxyURI = String(coProxy + this.state.station.stationSchedURI);

    // console.log("stationSchedURI");
    // console.log(coProxyURI);

    var data = getSchedJSON(this.state.station);
    this.setState({ schedData: data });
  }

  componentWillUnmount() {
    // Cancel the xhr request, so the callback is never called
    if (this.state.xhr && this.state.xhr.readyState !== 4) {
      // console.log("xhr.abort()");
      this.state.xhr.abort();
    }
  }

  render() {
    console.log("StationSched");
    console.log(this.state.schedData);
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

export function getSchedJSON(currentState) {
  var schedEntry = defaultSchedEntry;

  var schedule = [];

  // **********************************************
  // since we can't get schedule data from DAM yet
  var data = JSON.parse(JSON.stringify(schedJSON));
  // **********************************************

  // var regex = currentState.stationChannelRegEx;
  var autoType = currentState.stationAutomation;
  var channelSched = [];

  switch (autoType) {
    case "Telvue":
      // exclude any non-active channels
      var validChannels = data.rss.channel.filter(channel =>
        channel.hasOwnProperty("item")
      );
      // loop through channels
      for (var entry of validChannels) {
        // clone empty channelSched
        // channelSched = [JSON.parse(JSON.stringify(defaultSchedEntry))];
        channelSched = [];
        // loop through each schedule entry
        for (var sched of entry.item) {
          // force a clone so we don't get a reference
          schedEntry = JSON.parse(JSON.stringify(defaultSchedEntry));

          // get the current channel number
          schedEntry.channelID = entry.title.charAt(0);
          schedEntry.start = sched.hasOwnProperty("pubDate")
            ? Date.parse(sched.pubDate)
            : "";

          schedEntry.end = sched.hasOwnProperty("end_datetime")
            ? Date.parse(sched.end_datetime.__text)
            : "";

          schedEntry.duration = sched.hasOwnProperty("duration")
            ? parseInt(sched.duration.__text)
            : "0";

          schedEntry.title = sched.hasOwnProperty("title") ? sched.title : "";

          schedEntry.desc = sched.hasOwnProperty("description")
            ? sched.description
            : "";

          schedEntry.genre = sched.hasOwnProperty("category")
            ? sched.category
            : "";

          schedEntry.episode = sched.hasOwnProperty("episode")
            ? isEmpty(sched.episode)
              ? ""
              : JSON.stringify(sched.episode)
            : "";

          schedEntry.guid = sched.hasOwnProperty("guid") ? sched.guid : "";

          schedEntry.attribute = sched.hasOwnProperty("attribute")
            ? sched.attribute.length > 0
              ? JSON.parse(JSON.stringify(schedEntry.attribute))
              : []
            : [];
          // weed out the entries less than a minute
          if (schedEntry.duration > 60 && schedEntry.end > Date.now()) {
            // add a schedule entry to the array
            channelSched.push(schedEntry);
          }
        }
        // add channel schedule to the eschedules
        schedule.push(channelSched);
      }

      break;

    default:
      console.log("Invalid stationAutomation!");
  }

  // console.log("parseSchedJSON");
  // console.log(schedule);

  return schedule;
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
