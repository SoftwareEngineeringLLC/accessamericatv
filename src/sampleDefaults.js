// sampleDefaults.js

// defaultStreamState
// JSON structure that holds the defaults for the default
// home center and for each center/station, their channesl,
// and the program schedule for all of the channels. This
// file will be read on startup and if localStorage does not
// have a homeID field, localStorage will be initialized with
// this structure before calling the EMDB api at the
// homeServerURI field to populate the system.

export const defaultStreamState = {
  homeID: "MetroEast",
  homeServerURI: "https://dam.metroeast.org",
  currentStationID: "MetroEast",
  lastUpdated: "1560559380601",
  stations: [
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
			stationAutomation: "Telvue",
			stationAutoVersion: "2.0",
			stationSchedURI: "https://hc1.mctv.org/xml/program_schedule_feed/",
			stationSchedule: [
				{
					channelID: "",
					premierDate: "",
					pubDate: "",
					end_datetime: "",
					duration: "",
					eventID: "",
					title: {},
					description: {},
					category: "",
					series: "",
					episode: "",
					episodeCode: "",
					damURI: "",
					vodURI: "",
					guid: ""
					attribute: [
						{
							name: "",
							text: ""
						}
					]
				}
			],
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
					channelSchedURI: "https://hc1.mctv.org/xml/program_schedule_feed/?channel_id=2",
					channelStreamURI: "https://videoplayer.telvue.com/player/5QlcS026fQy98qR8aFzKSh5DvYNq1NKn/stream/206?fullscreen=true&showtabssearch=false&autostart=true"
				},
				{
					channelID: "3",
					channelTitle: "Public Affairs",
					channelAssignment: "Comcast 322/22, Frontier 33",
					channelDesc: "Public affairs programming by MetroEast partners",
					channelThumbnail: "/img/channel_PublicAffairs-175x125.png",
					channelSchedURI: "https://hc1.mctv.org/xml/program_schedule_feed/?channel_id=3",
					channelStreamURI: "https://videoplayer.telvue.com/player/5QlcS026fQy98qR8aFzKSh5DvYNq1NKn/stream/207?fullscreen=true&showtabssearch=false&autostart=true"
				},
				{
					channelID: "4",
					channelTitle: "Education & Arts",
					channelAssignment: "Comcast 327/27, Frontier 35",
					channelDesc: "Education & Arts programming from a variety of sources.",
					channelThumbnail: "/img/channel_Education-Arts-175x125.png",
					channelSchedURI: "https://hc1.mctv.org/xml/program_schedule_feed/?channel_id=4",
					channelStreamURI: "https://videoplayer.telvue.com/player/5QlcS026fQy98qR8aFzKSh5DvYNq1NKn/stream/208?fullscreen=true&showtabssearch=false&autostart=true"
				},
				{
					channelID: "5",
					channelTitle: "Regional",
					channelAssignment: "Comcast 329/29, Frontier 37",
					channelDesc: "Programming by MetroEast and other community media centers.",
					channelThumbnail: "/img/channel_Regional-175x125.png",
					channelSchedURI: "https://hc1.mctv.org/xml/program_schedule_feed/?channel_id=5",
					channelStreamURI: "https://videoplayer.telvue.com/player/5QlcS026fQy98qR8aFzKSh5DvYNq1NKn/stream/209?fullscreen=true&showtabssearch=false&autostart=true"
				},
				{
					channelID: "6",
					channelTitle: "Municipal",
					channelAssignment: "Comcast 330/38, Frontier 38",
					channelDesc: "Programming focused on regional municipal government.",
					channelThumbnail: "/img/channel_Municipal-175x125.png",
					channelSchedURI: "https://hc1.mctv.org/xml/program_schedule_feed/?channel_id=6",
					channelStreamURI: "https://videoplayer.telvue.com/player/5QlcS026fQy98qR8aFzKSh5DvYNq1NKn/stream/210?fullscreen=true&showtabssearch=false&autostart=true"
				}
			]
		}
	]
}

// defaultTelvueSched
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

export const defaultTelvueSched = {
	@version: "stations.stationAutoVersion",
	channel: [
		{
			title: "stationSchedule.channelID", /* leading digits == channelID */
			description: null,
			item: [
				{
						title: "stationSchedule.title",
						pubDate: "stationSchedule.start_datetime",
						eventId: "stationSchedule.eventID",
						duration: "stationSchedule.duration",
						end_datetime: "stationSchedule.end_datetime",
						programCode: "stationSchedule.programCode",
						episode: "stationSchedule.episode",
						episodeCode: "stationSchedule.episodeCode",
						thumbnail: "stationSchedule.thumbnail",
						attribute: [
							{
									@name: "stationSchedule.attribute.name",
									#text: "stationSchedule.attribute.text"
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
		}
	]
}
