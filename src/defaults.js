// defaults.js

// default Schedule Entry
export const defaultSchedEntry = {
  channelID: "",
  start: "",
  end: "",
  duration: "",
  title: "",
  desc: "",
  genre: "",
  series: "",
  episode: "",
  damID: "",
  attribute: [
    {
      name: "",
      text: ""
    }
  ]
};

// defaultStreamState
// JSON structure that holds the defaults for the default
// home center and for each center/station, their channesl,
// and the program schedule for all of the channels. This
// file will be read on startup and if localStorage does not
// have a homeID field, localStorage will be initialized with
// this structure before calling the EMDB api at the
// homeServerURI field to populate the system.

export const defaultState = {
  homeID: "MetroEast",
  homeThumbnail: "/img/metroeast_logo_111x70.png",
  homeServerURI: "https://dam.metroeast.org",
  currentStationID: "MetroEast",
  lastUpdated: "1560559380601",
  station: {},
  stations: [
    {
      stationID: "MetroEast",
      stationServerURI: "https://dam.metroeast.org",
      stationThumbnail: "/img/metroeast_logo_111x70.png", // should be https
      stationName: "MetroEast Community Media",
      stationStreet: "829 NE 8th Street",
      stationCity: "Gresham",
      stationST: "OR",
      stationState: "Oregon",
      stationZip: "97030",
      stationPhone: "(503) 667-8848",
      stationEmail: "info@metroeast.org",
      stationWebsite: "https://www.metroeast.org/",
      stationLanguages: [
        { language: "Arabic" },
        { language: "English" },
        { language: "Manderin" },
        { language: "Russian" },
        { language: "Spanish" },
        { language: "Ukranian" },
        { language: "Vietnamese" }
      ],
      stationAutomation: "Telvue",
      stationAutoVersion: "2.0",
      stationSchedRegEx: "^d+)",
      stationSchedURI: "https://hc1.mctv.org/xml/program_schedule_feed/",
      stationSchedule: [],
      stationChannels: [
        {
          channelID: "1",
          channelTitle: "Community Access",
          channelAssignment: "Comcast 331/11, Frontier 22",
          channelDesc: "Programming by MetroEast volunteers and partners.",
          channelThumbnail: "/img/channel_CommunityAccess-175x125.png",
          channelStremFormat: "HLS",
          channelStreamURI:
            "https://t02554-lh.akamaihd.net/i/t02554f_1@497742/master.m3u8"
        },
        {
          channelID: "2",
          channelTitle: "MetroEast Local",
          channelAssignment: "CenturyLink 321/21, Frontier 32",
          channelDesc: "Programming by MetroEast staff and volunteers.",
          channelThumbnail: "/img/channel_MetroEastLocal-175x125.png",
          channelStremFormat: "HLS",
          channelStreamURI:
            "https://t02554-lh.akamaihd.net/i/t02554a_1@497737/master.m3u8?set-akamai-hls-revision=5"
        },
        {
          channelID: "3",
          channelTitle: "Public Affairs",
          channelAssignment: "Comcast 322/22, Frontier 33",
          channelDesc: "Public affairs programming by MetroEast partners",
          channelThumbnail: "/img/channel_PublicAffairs-175x125.png",
          channelStremFormat: "HLS",
          channelStreamURI:
            "https://t02554-lh.akamaihd.net/i/t02554b_1@497738/master.m3u8?set-akamai-hls-revision=5"
        },
        {
          channelID: "4",
          channelTitle: "Education & Arts",
          channelAssignment: "Comcast 327/27, Frontier 35",
          channelDesc:
            "Education & Arts programming from a variety of sources.",
          channelThumbnail: "/img/channel_Education-Arts-175x125.png",
          channelStremFormat: "HLS",
          channelStreamURI:
            "https://t02554-lh.akamaihd.net/i/t02554c_1@497739/master.m3u8"
        },
        {
          channelID: "5",
          channelTitle: "Regional",
          channelAssignment: "Comcast 329/29, Frontier 37",
          channelDesc:
            "Programming by MetroEast and other community media centers.",
          channelThumbnail: "/img/channel_Regional-175x125.png",
          channelStremFormat: "HLS",
          channelStreamURI:
            "https://t02554-lh.akamaihd.net/i/t02554d_1@497740/master.m3u8"
        },
        {
          channelID: "6",
          channelTitle: "Municipal",
          channelAssignment: "Comcast 330/38, Frontier 38",
          channelDesc: "Programming focused on regional municipal government.",
          channelThumbnail: "/img/channel_Municipal-175x125.png",
          channelStremFormat: "HLS",
          channelStreamURI:
            "https://t02554-lh.akamaihd.net/i/t02554e_1@497741/master.m3u8"
        }
      ]
    }
  ]
};

// **********************************************************************
// ************** TEMPORARY PLACEHOLDER FOR DAM-FREE DEMO ***************
// defaultState
// This is filled in by
export const tempState = {
  homeID: "MetroEast",
  homeServerURI: "https://dam.metroeast.org",
  currentStationID: "MetroEast",
  lastUpdated: "1560559380601",
  station: {},
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
      stationLanguages: [],
      stationAutomation: "",
      stationAutoVersion: "",
      stationChannelRegEx: "",
      stationSchedURI: "",
      stationSchedule: [],
      stationChannels: [
        {
          channelTitle: "",
          channelAssignment: "",
          channelDesc: "",
          channelThumbnail: "",
          channelStremFormat: "",
          channelStreamURI: ""
        }
      ]
    },
    {
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
      stationLanguages: [
        { language: "English" },
        { language: "Khmer" },
        { language: "Mandering" },
        { language: "Russian" },
        { language: "Slovanian" },
        { language: "Spanish" },
        { language: "Vietnamese" }
      ],
      stationAutomation: "Telvue",
      stationAutoVersion: "2.0",
      stationChannelRegEx: "^d+)",
      stationSchedURI: "https://hc1.mctv.org/xml/program_schedule_feed/",
      stationSchedule: [],
      stationChannels: [
        {
          channelID: "1",
          channelTitle: "Community Access",
          channelAssignment: "Comcast 331/11, Frontier 22",
          channelDesc: "Programming by MetroEast volunteers and partners.",
          channelThumbnail: "/img/channel_CommunityAccess-175x125.png",
          channelStremFormat: "HLS",
          channelStreamURI:
            "https://videoplayer.telvue.com/player/5QlcS026fQy98qR8aFzKSh5DvYNq1NKn/stream/211?fullscreen=true&showtabssearch=false&autostart=true"
        },
        {
          channelID: "2",
          channelTitle: "MetroEast Local",
          channelAssignment: "CenturyLink 321/21, Frontier 32",
          channelDesc: "Programming by MetroEast staff and volunteers.",
          channelThumbnail: "/img/channel_MetroEastLocal-175x125.png",
          channelStreamURI:
            "https://videoplayer.telvue.com/player/5QlcS026fQy98qR8aFzKSh5DvYNq1NKn/stream/206?fullscreen=true&showtabssearch=false&autostart=true"
        },
        {
          channelID: "3",
          channelTitle: "Public Affairs",
          channelAssignment: "Comcast 322/22, Frontier 33",
          channelDesc: "Public affairs programming by MetroEast partners",
          channelThumbnail: "/img/channel_PublicAffairs-175x125.png",
          channelStremFormat: "HLS",
          channelStreamURI:
            "https://videoplayer.telvue.com/player/5QlcS026fQy98qR8aFzKSh5DvYNq1NKn/stream/207?fullscreen=true&showtabssearch=false&autostart=true"
        },
        {
          channelID: "4",
          channelTitle: "Education & Arts",
          channelAssignment: "Comcast 327/27, Frontier 35",
          channelDesc:
            "Education & Arts programming from a variety of sources.",
          channelThumbnail: "/img/channel_Education-Arts-175x125.png",
          channelStremFormat: "HLS",
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
          channelStremFormat: "HLS",
          channelStreamURI:
            "https://videoplayer.telvue.com/player/5QlcS026fQy98qR8aFzKSh5DvYNq1NKn/stream/209?fullscreen=true&showtabssearch=false&autostart=true"
        },
        {
          channelID: "6",
          channelTitle: "Municipal",
          channelAssignment: "Comcast 330/38, Frontier 38",
          channelDesc: "Programming focused on regional municipal government.",
          channelThumbnail: "/img/channel_Municipal-175x125.png",
          channelStremFormat: "HLS",
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
      stationLanguages: [],
      stationAutomation: "",
      stationAutoVersion: "",
      stationChannelRegEx: "",
      stationSchedURI: "",
      stationSchedule: [],
      stationChannels: [
        {
          channelTitle: "",
          channelAssignment: "",
          channelDesc: "",
          channelThumbnail: "",
          channelStremFormat: "",
          channelStreamURI: ""
        }
      ]
    }
  ]
};

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
export const telvueSchedMap = {
  version: "stations.stationAutoVersion",
  channel: [
    {
      title: "stationSchedule.channelID",
      description: null,
      item: [
        {
          title: "stationSchedule.title",
          pubDate: "stationSchedule.start",
          end_datetime: "stationSchedule.end",
          duration: "stationSchedule.duration",
          programCode:
            "stationSchedule.attribute[{name: 'programCode', text:''}]",
          episode: "stationSchedule.episode",
          episodeCode:
            "stationSchedule.attribute[{name: 'episodeCode', text:''}]",
          thumbnail: "stationSchedule.thumbnail",
          attribute: [
            {
              name: "stationSchedule.attribute[{name: '', text:''}]",
              text: "stationSchedule.attribute[{name: '', text:''}]"
            }
          ],
          description: "stationSchedule.desc",
          link: "stationSchedule.attribute[{name: 'link', text:''}]",
          category: "stationSchedule.genre",
          vodURL: "stationSchedule.attribute[{name: 'vodURL', text:''}]",
          guid: "stationSchedule.attribute[{name: 'guid', text:''}]"
        }
      ]
    }
  ]
};
