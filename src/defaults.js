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

// defaultState
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
      stationID: "CMAC",
      stationServerURI: "https://dam.metroeast.org",
      stationThumbnail:
        "https://cmac.tv/wp-content/themes/cmac3/images/cmaclogo2.jpg",
      stationName: "CMAC Fresno/Clovis",
      stationStreet: "1555 Van Ness Ave #201",
      stationCity: "Fresno",
      stationST: "CA",
      stationState: "California",
      stationZip: "93721",
      stationPhone: "(559) 266-2622",
      stationEmail: "info@cmac.tv",
      stationWebsite: "https://cmac.tv/",
      stationAutomation: "Tightrope",
      stationAutoVersion: "2.0",
      stationSchedRegEx: "^d+)",
      stationSchedURI:
        "http://live.cmac.tv/cablecastapi/v1/scheduleitems?start=2019-07-09&page_size=500",
      stationSchedule: [],
      stationChannels: [
        {
          channelID: "1",
          channelTitle: "CMAC1 Public Channel",
          channelAssignment: "Comcast 93",
          channelDesc:
            "Programming created by individuals and non-profits in the Fresno/Clovis region.",
          channelThumbnail: "",
          channelStremFormat: "HLS",
          channelStreamURI:
            "https://reflect-live1-cmac.cablecast.tv/live/live.m3u8"
        },
        {
          channelID: "2",
          channelTitle: "CMAC2 Education Channel",
          channelAssignment: "Comcast 94",
          channelDesc:
            "Programming created by schools and universities in the Fresno/Clovis region.",
          channelThumbnail: "",
          channelStremFormat: "HLS",
          channelStreamURI:
            "https://reflect-live2-cmac.cablecast.tv/live/live.m3u8"
        },
        {
          channelID: "3",
          channelTitle: "CMAC3 Government Channel",
          channelAssignment: "Comcast 322/22, Frontier 33",
          channelDesc:
            "Programming created by the Cities of Fresno and Clovis such as meeting coverage and special events.",
          channelThumbnail: "",
          channelStremFormat: "HLS",
          channelStreamURI:
            "https://reflect-live3-cmac.cablecast.tv/live/live.m3u8"
        }
      ]
    },
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
