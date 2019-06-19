// helpers.js
import React from "react";

import { defaultState } from "./defaults";

// The JSON structures below are place holders to be used in development

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
  currentStationID = localStorage.getItem("currentStationID");
  stations = JSON.parse(localStorage.getItem("stations"));

  function isCurrent(stations) {
    return stations.stationID === currentStationID;
  }
  return stations.filter(isCurrent)[0];
}
