// defaults.js

// appState
// This is filled in by
export const defaultState = {
  homeID: "MetroEast",
  homeServerURI: "https://dam.metroeast.org",
  currentStationID: "",
  lastUpdated: "",
  station: {},
  stations: [
    {
      stationID: "",
      stationThumbnail: "",
      stationName: "",
      stationStreet: "",
      stationCity: "",
      stationST: "",
      stationState: "",
      stationZip: "",
      stationPhone: "",
      stationEmail: "",
      stationWebsite: "",
      stationAutomation: "",
      stationChannels: [
        {
          channelTitle: "",
          channelAssignment: "",
          channelDesc: "",
          channelThumbnail: "",
          channelSchedURI: "",
          channelStreamURI: "",
          channelSchedule: [
            {
              title: "",
              pubDate: "",
              eventId: "",
              duration: "",
              end_datetime: "",
              programCode: "",
              episode: "",
              episodeCode: "",
              thumbnail: "",
              attribute: [
                {
                  name: "",
                  text: ""
                }
              ],
              description: "",
              link: "",
              category: "Sports",
              vodURL: [],
              guid: ""
            }
          ]
        }
      ]
    }
  ]
};
