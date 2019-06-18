// helpers.js
import React from "react";

import { defaultState } from "./defaults";

const msecsPerDay = 86400;

// The JSON structures below are place holders to be used in development

var sl = {
  homeID: "MetroEast",
  homeServerURI: "https://dam.metroeast.org",
  currentStationID: "MetroEast",
  lastUpdated: "1560559380601",
  station: {
    stationID: "MetroEast",
    stationServerURI: "https://dam.metroeast.org",
    stationThumbnail: "/img/metroeast_logo_111x70.png",
    stationName: "MetroEast Community Media",
    stationStreet: "829 NE 8th Street",
    stationCity: "Gresham",
    stationST: "OR",
    stationState: "Oregon",
    stationZip: "97030",
    stationPhone: "(503) 667-8848",
    stationEmail: "info@metroeast.org",
    stationWebsite: "https://www.metroeast.org/",
    stationAutomation: "Telvue",
    stationChannels: [
      {
        channelID: "1",
        channelTitle: "Community Access",
        channelAssignment: "Comcast 331/11, Frontier 22",
        channelDesc: "Programming by MetroEast volunteers and partners.",
        channelThumbnail: "/img/channel_CommunityAccess-175x125.png",
        channelSchedURI:
          "https://hc1.mctv.org/xml/program_schedule_feed/?channel_id=1",
        channelStreamURI:
          "https://videoplayer.telvue.com/player/5QlcS026fQy98qR8aFzKSh5DvYNq1NKn/stream/211?fullscreen=true&showtabssearch=false&autostart=true"
      },
      {
        channelID: "2",
        channelTitle: "MetroEast Local",
        channelAssignment: "CenturyLink 321/21, Frontier 32",
        channelDesc: "Programming by MetroEast staff and volunteers.",
        channelThumbnail: "/img/channel_MetroEastLocal-175x125.png",
        channelSchedURI:
          "https://hc1.mctv.org/xml/program_schedule_feed/?channel_id=2",
        channelStreamURI:
          "https://videoplayer.telvue.com/player/5QlcS026fQy98qR8aFzKSh5DvYNq1NKn/stream/206?fullscreen=true&showtabssearch=false&autostart=true"
      },
      {
        channelID: "3",
        channelTitle: "Public Affairs",
        channelAssignment: "Comcast 322/22, Frontier 33",
        channelDesc: "Public affairs programming by MetroEast partners",
        channelThumbnail: "/img/channel_PublicAffairs-175x125.png",
        channelSchedURI:
          "https://hc1.mctv.org/xml/program_schedule_feed/?channel_id=3",
        channelStreamURI:
          "https://videoplayer.telvue.com/player/5QlcS026fQy98qR8aFzKSh5DvYNq1NKn/stream/207?fullscreen=true&showtabssearch=false&autostart=true"
      },
      {
        channelID: "4",
        channelTitle: "Education & Arts",
        channelAssignment: "Comcast 327/27, Frontier 35",
        channelDesc: "Education & Arts programming from a variety of sources.",
        channelThumbnail: "/img/channel_Education-Arts-175x125.png",
        channelSchedURI:
          "https://hc1.mctv.org/xml/program_schedule_feed/?channel_id=4",
        channelStreamURI:
          "https://videoplayer.telvue.com/player/5QlcS026fQy98qR8aFzKSh5DvYNq1NKn/stream/208?fullscreen=true&showtabssearch=false&autostart=true"
      },
      {
        channelID: "5",
        channelTitle: "Regional",
        channelAssignment: "Comcast 329/29, Frontier 37",
        channelDesc:
          "Programming by MetroEast and other community media centers.",
        channelThumbnail: "/img/channel_Regional-175x125.png",
        channelSchedURI:
          "https://hc1.mctv.org/xml/program_schedule_feed/?channel_id=5",
        channelStreamURI:
          "https://videoplayer.telvue.com/player/5QlcS026fQy98qR8aFzKSh5DvYNq1NKn/stream/209?fullscreen=true&showtabssearch=false&autostart=true"
      },
      {
        channelID: "6",
        channelTitle: "Municipal",
        channelAssignment: "Comcast 330/38, Frontier 38",
        channelDesc: "Programming focused on regional municipal government.",
        channelThumbnail: "/img/channel_Municipal-175x125.png",
        channelSchedURI:
          "https://hc1.mctv.org/xml/program_schedule_feed/?channel_id=6",
        channelStreamURI:
          "https://videoplayer.telvue.com/player/5QlcS026fQy98qR8aFzKSh5DvYNq1NKn/stream/210?fullscreen=true&showtabssearch=false&autostart=true"
      }
    ]
  },
  stations: [
    {
      stationID: "CCTV",
      stationServerURI: "",
      stationThumbnail: "/img/cctv-logo.png",
      stationName: "Capital Community Television",
      stationStreet: "829 NE 8th 575 Trade St SE",
      stationCity: "Salem",
      stationST: "OR",
      stationState: "Oregon",
      stationZip: "97301",
      stationPhone: "(503) 588-2288",
      stationEmail: "cctv@cctvsalem.org",
      stationWebsite: "https://www.cctvsalem.org/",
      stationAutomation: "Tightrope",
      stationChannels: [
        {
          channelTitle: "",
          channelAssignment: "",
          channelDesc: "",
          channelThumbnail: "",
          channelSchedURI: "",
          channelStreamURI: ""
        }
      ]
    },
    {
      stationID: "MetroEast",
      stationServerURI: "https://dam.metroeast.org",
      stationThumbnail: "./img/metroeast_logo_111x70.png",
      stationName: "MetroEast Community Media",
      stationStreet: "829 NE 8th Street",
      stationCity: "Gresham",
      stationST: "OR",
      stationState: "Oregon",
      stationZip: "97030",
      stationPhone: "(503) 667-8848",
      stationEmail: "info@metroeast.org",
      stationWebsite: "https://www.metroeast.org/",
      stationAutomation: "Telvue",
      stationChannels: [
        {
          channelID: "1",
          channelTitle: "Community Access",
          channelAssignment: "Comcast 331/11, Frontier 22",
          channelDesc: "Programming by MetroEast volunteers and partners.",
          channelThumbnail: "./img/channel_CommunityAccess-175x125.png",
          channelSchedURI:
            "https://hc1.mctv.org/xml/program_schedule_feed/?channel_id=1",
          channelStreamURI:
            "https://videoplayer.telvue.com/player/5QlcS026fQy98qR8aFzKSh5DvYNq1NKn/stream/211?fullscreen=true&showtabssearch=false&autostart=true"
        },
        {
          channelID: "2",
          channelTitle: "MetroEast Local",
          channelAssignment: "CenturyLink 321/21, Frontier 32",
          channelDesc: "Programming by MetroEast staff and volunteers.",
          channelThumbnail: "./img/channel_MetroEastLocal-175x125.png",
          channelSchedURI:
            "https://hc1.mctv.org/xml/program_schedule_feed/?channel_id=2",
          channelStreamURI:
            "https://videoplayer.telvue.com/player/5QlcS026fQy98qR8aFzKSh5DvYNq1NKn/stream/206?fullscreen=true&showtabssearch=false&autostart=true"
        },
        {
          channelID: "3",
          channelTitle: "Public Affairs",
          channelAssignment: "Comcast 322/22, Frontier 33",
          channelDesc: "Public affairs programming by MetroEast partners",
          channelThumbnail: "./img/channel_PublicAffairs-175x125.png",
          channelSchedURI:
            "https://hc1.mctv.org/xml/program_schedule_feed/?channel_id=3",
          channelStreamURI:
            "https://videoplayer.telvue.com/player/5QlcS026fQy98qR8aFzKSh5DvYNq1NKn/stream/207?fullscreen=true&showtabssearch=false&autostart=true"
        },
        {
          channelID: "4",
          channelTitle: "Education & Arts",
          channelAssignment: "Comcast 327/27, Frontier 35",
          channelDesc:
            "Education & Arts programming from a variety of sources.",
          channelThumbnail: "./img/channel_Education-Arts-175x125.png",
          channelSchedURI:
            "https://hc1.mctv.org/xml/program_schedule_feed/?channel_id=4",
          channelStreamURI:
            "https://videoplayer.telvue.com/player/5QlcS026fQy98qR8aFzKSh5DvYNq1NKn/stream/208?fullscreen=true&showtabssearch=false&autostart=true"
        },
        {
          channelID: "5",
          channelTitle: "Regional",
          channelAssignment: "Comcast 329/29, Frontier 37",
          channelDesc:
            "Programming by MetroEast and other community media centers.",
          channelThumbnail: "./img/channel_Regional-175x125.png",
          channelSchedURI:
            "https://hc1.mctv.org/xml/program_schedule_feed/?channel_id=5",
          channelStreamURI:
            "https://videoplayer.telvue.com/player/5QlcS026fQy98qR8aFzKSh5DvYNq1NKn/stream/209?fullscreen=true&showtabssearch=false&autostart=true"
        },
        {
          channelID: "6",
          channelTitle: "Municipal",
          channelAssignment: "Comcast 330/38, Frontier 38",
          channelDesc: "Programming focused on regional municipal government.",
          channelThumbnail: "./img/channel_Municipal-175x125.png",
          channelSchedURI:
            "https://hc1.mctv.org/xml/program_schedule_feed/?channel_id=6",
          channelStreamURI:
            "https://videoplayer.telvue.com/player/5QlcS026fQy98qR8aFzKSh5DvYNq1NKn/stream/210?fullscreen=true&showtabssearch=false&autostart=true"
        }
      ]
    },
    {
      stationID: "OpenSignal",
      stationServerURI: "",
      stationThumbnail: "./img/open-signal-logo.svg",
      stationName: "Open Signal Portland Community Media Center",
      stationStreet: "2766 NE Martin Luther King, Jr Blvd",
      stationCity: "Portland",
      stationST: "OR",
      stationState: "Oregon",
      stationZip: "97212",
      stationPhone: "(503) 288-1515",
      stationEmail: "info@opensignalpdx.org",
      stationWebsite: "https://www.opensignalpdx.org/",
      stationAutomation: "Tightrope",
      stationChannels: []
    }
  ]
};

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
  // if (!localStorage.hasOwnProperty("homeID")) {
  // **** PLACEHOLDER FOR API CALL TO DAM ****
  currentState = sl;
  // Create localStorage copy from API call results
  for (key in currentState) {
    localStorage.setItem(key, JSON.stringify(currentState[key]));
  }
  // }

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
