// schedConvert

import { defaultChannelSchedule } from "./defaults";

// telvueMap

const mapTelvue = [
  {
    title: "channelID",
    description: "channelDesc",
    item: [
      title: "title",
      pubDate: "start",
      eventID: "attribute",
      duration: "duration",
      end_datetime: "end",
      programCode: "attribute",
      episode: "episode",
      episodeCode: "attribute",
      thumbnail: "attribute",
      category: "genre",
      vodURL: "attribute",
      description: "desc",
      link: "attribute",
      guid: "guid",
      attribute: [
        {
          name: "",
          text: ""
        }
      ]
    ]
  }
];

export function convertSched(station, rawSched) {

  var sched = [];
  var channels = [];
  var item = {
    channelID: "",
    start: "",
    end: "",
    duration: "",
    title: "",
    desc: "",
    genre: "",
    series: "",
    episode: "",
    guid: "",
    attribute: [
      {
        name: "",
        text: ""
      }
    ]
  }

  // choose a conversion map
  switch(station.stationAutomation) {
    case "Telvue":
      // extract the channel data
      
      // now loop through channels
      rawSched.forEach(extractItem);
      function extractItem(item) {

      }


      break;
    default:
      sched = defaultChannelSchedule;
  }
  return sched;
}




// **************************** TEMPORARY DATA STRUCTURE *******************
// sampleTelvueSched
// Used in testing to simulate reading JSON. Delete when this is debugged.

export const sampleTelvueSched = {
  "@version": "2.0",
  channel: [
    {
      title: "1) CAN  - CC 331/11 - FF 22 - CL 5011/11",
      description: "Channel 1",
      item: [
        {
          title: "OpenSignal",
          pubDate: "Thu, 20 Jun 2019 19:00:00 -0700",
          eventId: "624612",
          duration: "3600",
          end_datetime: "Thu, 20 Jun 2019 20:00:00 -0700",
          programCode: null,
          episode: null,
          episodeCode: null,
          description: "[198] OpenSignal",
          link: "http://10.10.10.10",
          guid: "0025909528E2-624612"
        },
        {
          title: "Tualatin Valley Community TV",
          pubDate: "Thu, 20 Jun 2019 20:00:00 -0700",
          eventId: "624613",
          duration: "7200",
          end_datetime: "Thu, 20 Jun 2019 22:00:00 -0700",
          programCode: null,
          episode: null,
          episodeCode: null,
          description: "[199] Tualatin Valley Community TV",
          link: "http://10.10.10.10",
          guid: "0025909528E2-624613"
        },
        {
          title: "Multnomah Right to Life presents",
          pubDate: "Thu, 20 Jun 2019 22:00:00 -0700",
          eventId: "624614",
          duration: "3508",
          end_datetime: "Thu, 20 Jun 2019 22:58:28 -0700",
          programCode: "18143",
          episode: null,
          episodeCode: "0167",
          thumbnail: "http://hc1.mctv.org/thumbnails/18432.jpg?1561052884",
          attribute: [
            {
              "@name": "Producer Source",
              "#text": "Foreign"
            },
            {
              "@name": "Schedule Use"
            },
            {
              "@name": "Operator Notes"
            },
            {
              "@name": "Content Tags",
              "#text": "Pro-life Issues, Life Affirmation."
            }
          ],
          category: "Information",
          mediumId: null,
          vodURL: [],
          description: "Oregon RIght to Life Conference series.",
          link: "http://10.10.10.10",
          guid: "0025909528E2-624614"
        },
        {
          title: "Northwest Showcase #5",
          pubDate: "Thu, 20 Jun 2019 23:00:00 -0700",
          eventId: "624618",
          duration: "3389",
          end_datetime: "Thu, 20 Jun 2019 23:56:29 -0700",
          programCode: "18661",
          episode: null,
          episodeCode: null,
          thumbnail: "http://hc1.mctv.org/thumbnails/14462.jpg?1560881157",
          attribute: [
            {
              "@name": "Producer Source",
              "#text": "Access"
            },
            {
              "@name": "Schedule Use",
              "#text": "F"
            },
            {
              "@name": "Operator Notes"
            },
            {
              "@name": "Content Tags",
              "#text": "Historic Southern Oregon"
            }
          ],
          category: "A & E",
          mediumId: null,
          vodURL: [],
          description:
            "An Historic perspective of people and places in Southern Oregon",
          link: "http://10.10.10.10",
          guid: "0025909528E2-624618"
        },
        {
          title:
            "LWV Forum: Juvenile Justice - Are we improving outcomes for youth?",
          pubDate: "Thu, 20 Jun 2019 23:59:59 -0700",
          eventId: "624623",
          duration: "5403",
          end_datetime: "Fri, 21 Jun 2019 01:30:02 -0700",
          programCode: "18884",
          episode: null,
          episodeCode: null,
          thumbnail: "http://hc1.mctv.org/thumbnails/17623.jpg?1560881158",
          attribute: [
            {
              "@name": "Producer Source",
              "#text": "Staff"
            },
            {
              "@name": "Schedule Use",
              "#text": "FS"
            },
            {
              "@name": "Operator Notes"
            },
            {
              "@name": "Content Tags",
              "#text": "league of women voters, juvenile justice, youth"
            }
          ],
          category: "Information",
          mediumId: null,
          vodURL: [],
          description:
            "The League of Women Voters of Portland presents a free and public Civic Education program on Juvenile Justice: Are we improving outcomes for youth?",
          link: "http://10.10.10.10",
          guid: "0025909528E2-624623"
        },
        {
          title: "Arabic christian Church",
          pubDate: "Fri, 21 Jun 2019 01:30:09 -0700",
          eventId: "624625",
          duration: "1489",
          end_datetime: "Fri, 21 Jun 2019 01:54:58 -0700",
          programCode: "18730",
          episode: null,
          episodeCode: "0002",
          thumbnail: "http://hc1.mctv.org/thumbnails/16056.jpg?1560881158",
          attribute: [
            {
              "@name": "Producer Source",
              "#text": "Access"
            },
            {
              "@name": "Schedule Use",
              "#text": "F"
            },
            {
              "@name": "Operator Notes"
            },
            {
              "@name": "Content Tags",
              "#text": "Bible Study"
            }
          ],
          category: "Inspirational",
          mediumId: null,
          vodURL: [],
          description: "Religion.",
          link: "http://10.10.10.10",
          guid: "0025909528E2-624625"
        },
        {
          title: "Jubilee - Glory Christian Center",
          pubDate: "Fri, 21 Jun 2019 02:00:00 -0700",
          eventId: "624630",
          duration: "7108",
          end_datetime: "Fri, 21 Jun 2019 03:58:28 -0700",
          programCode: "18631",
          episode: null,
          episodeCode: null,
          thumbnail: "http://hc1.mctv.org/thumbnails/13788.jpg?1560881158",
          attribute: [
            {
              "@name": "Producer Source",
              "#text": "Access"
            },
            {
              "@name": "Schedule Use",
              "#text": "f"
            },
            {
              "@name": "Operator Notes"
            },
            {
              "@name": "Content Tags"
            }
          ],
          category: "Inspirational",
          mediumId: null,
          vodURL: [],
          description: [],
          link: "http://10.10.10.10",
          guid: "0025909528E2-624630"
        },
        {
          title: "Your Investments (Upon His Arrival)",
          pubDate: "Fri, 21 Jun 2019 04:00:00 -0700",
          eventId: "624634",
          duration: "4905",
          end_datetime: "Fri, 21 Jun 2019 05:21:45 -0700",
          programCode: "18731",
          episode: null,
          episodeCode: null,
          thumbnail: "http://hc1.mctv.org/thumbnails/16058.jpg?1560881159",
          attribute: [
            {
              "@name": "Producer Source",
              "#text": "Access"
            },
            {
              "@name": "Schedule Use",
              "#text": "f"
            },
            {
              "@name": "Operator Notes"
            },
            {
              "@name": "Content Tags",
              "#text": "Lifestyle, Christian, Alternative"
            }
          ],
          category: "Inspirational",
          mediumId: null,
          vodURL: [],
          description: "Alternative Christian Lifestyle",
          link: "http://10.10.10.10",
          guid: "0025909528E2-624634"
        },
        {
          title: "LWV Forum: Women and Justice",
          pubDate: "Fri, 21 Jun 2019 05:29:58 -0700",
          eventId: "624639",
          duration: "5058",
          end_datetime: "Fri, 21 Jun 2019 06:54:16 -0700",
          programCode: "18928",
          episode: null,
          episodeCode: null,
          thumbnail: "http://hc1.mctv.org/thumbnails/18281.jpg?1560881160",
          attribute: [
            {
              "@name": "Producer Source",
              "#text": "Staff"
            },
            {
              "@name": "Schedule Use",
              "#text": "FS"
            },
            {
              "@name": "Operator Notes"
            },
            {
              "@name": "Content Tags",
              "#text": "LWV PDX, Women, Justice, Rights"
            }
          ],
          category: "Information",
          mediumId: null,
          vodURL: [],
          description:
            "The League of Women Voter's of Portland presents Women and Justice: How is the landscape for women's rights changing?",
          link: "http://10.10.10.10",
          guid: "0025909528E2-624639"
        },
        {
          title: "Tualatin Valley Community TV",
          pubDate: "Fri, 21 Jun 2019 07:00:00 -0700",
          eventId: "624644",
          duration: "3600",
          end_datetime: "Fri, 21 Jun 2019 08:00:00 -0700",
          programCode: null,
          episode: null,
          episodeCode: null,
          description: "[230] Tualatin Valley Community TV",
          link: "http://10.10.10.10",
          guid: "0025909528E2-624644"
        }
      ]
    },
    {
      title: "2) MCTV - CC 321/21 - FF 32 - CL 8501/8001",
      description: "Channel 2",
      item: [
        {
          title: "Vietnamese TV Ministry",
          pubDate: "Thu, 20 Jun 2019 19:00:00 -0700",
          eventId: "624853",
          duration: "3474",
          end_datetime: "Thu, 20 Jun 2019 19:57:54 -0700",
          programCode: "17085",
          episode: null,
          episodeCode: "0215",
          thumbnail: "http://hc1.mctv.org/thumbnails/18958.jpg?1561078801",
          attribute: [
            {
              "@name": "Producer Source",
              "#text": "Access"
            },
            {
              "@name": "Schedule Use"
            },
            {
              "@name": "Operator Notes"
            },
            {
              "@name": "Content Tags",
              "#text": "ti_ng Vi_t, Vietnamese Bible teaching."
            }
          ],
          category: "Inspirational",
          mediumId: "487476",
          vodURL:
            "https://videoplayer.telvue.com/player/5QlcS026fQy98qR8aFzKSh5DvYNq1NKn/media/487476",
          description:
            "HOLY BIBLE TEACHING: SALVATION OF JESUS CHRIST FOR ALL PEOPLE.",
          link: "http://10.10.10.10",
          guid: "0025909528E2-624853"
        },
        {
          title: "White Villages of Spain",
          pubDate: "Thu, 20 Jun 2019 19:57:54 -0700",
          eventId: "624854",
          duration: "59",
          end_datetime: "Thu, 20 Jun 2019 19:58:53 -0700",
          programCode: "18917",
          episode: null,
          episodeCode: null,
          thumbnail: "http://hc1.mctv.org/thumbnails/18071.jpg?1561078681",
          attribute: [
            {
              "@name": "Producer Source",
              "#text": "Access"
            },
            {
              "@name": "Schedule Use",
              "#text": "FS"
            },
            {
              "@name": "Operator Notes"
            },
            {
              "@name": "Content Tags",
              "#text": "Spain, white villages"
            }
          ],
          category: "A & E",
          mediumId: null,
          vodURL: [],
          description: "A glimpse at the white villages of Spain.",
          link: "http://10.10.10.10",
          guid: "0025909528E2-624854"
        },
        {
          title: "Jubilee",
          pubDate: "Thu, 20 Jun 2019 20:00:00 -0700",
          eventId: "624685",
          duration: "3349",
          end_datetime: "Thu, 20 Jun 2019 20:55:49 -0700",
          programCode: "18566",
          episode: null,
          episodeCode: "0030",
          thumbnail: "http://hc1.mctv.org/thumbnails/18893.jpg?1560881170",
          attribute: [
            {
              "@name": "Producer Source",
              "#text": "Access"
            },
            {
              "@name": "Schedule Use"
            },
            {
              "@name": "Operator Notes"
            },
            {
              "@name": "Content Tags",
              "#text": "Church"
            }
          ],
          category: "Inspirational",
          mediumId: null,
          vodURL: [],
          description:
            "The program is designated to the community churches and individual events.",
          link: "http://10.10.10.10",
          guid: "0025909528E2-624685"
        },
        {
          title: "H?roes Magn?ficos",
          pubDate: "Thu, 20 Jun 2019 21:00:00 -0700",
          eventId: "624690",
          duration: "3514",
          end_datetime: "Thu, 20 Jun 2019 21:58:34 -0700",
          programCode: "18559",
          episode: null,
          episodeCode: null,
          thumbnail: "http://hc1.mctv.org/thumbnails/13063.jpg?1560887953",
          attribute: [
            {
              "@name": "Producer Source",
              "#text": "Staff"
            },
            {
              "@name": "Schedule Use",
              "#text": "F"
            },
            {
              "@name": "Operator Notes"
            },
            {
              "@name": "Content Tags",
              "#text": "Latino youth, heroes"
            }
          ],
          category: "Information",
          mediumId: null,
          vodURL: [],
          description:
            "Films by teens about everyday Latino heroes, made with help from the NW Film Center, Milagro Theatre & the Rockwood & St Johns libraries.",
          link: "http://10.10.10.10",
          guid: "0025909528E2-624690"
        },
        {
          title: "502 Sessions Orlando Retana Project",
          pubDate: "Thu, 20 Jun 2019 22:00:00 -0700",
          eventId: "624695",
          duration: "3300",
          end_datetime: "Thu, 20 Jun 2019 22:55:00 -0700",
          programCode: "18890",
          episode: null,
          episodeCode: null,
          thumbnail: "http://hc1.mctv.org/thumbnails/17644.jpg?1560881171",
          attribute: [
            {
              "@name": "Producer Source",
              "#text": "Foreign"
            },
            {
              "@name": "Schedule Use"
            },
            {
              "@name": "Operator Notes"
            },
            {
              "@name": "Content Tags",
              "#text": "Car show"
            }
          ],
          category: "A & E",
          mediumId: null,
          vodURL: [],
          description:
            "The Orlando Renana Project experiments with many styles of music to create a fusion of ideas and creativity.",
          link: "http://10.10.10.10",
          guid: "0025909528E2-624695"
        },
        {
          title: "Summoning Hell at the Black Water",
          pubDate: "Thu, 20 Jun 2019 23:00:00 -0700",
          eventId: "624700",
          duration: "1286",
          end_datetime: "Thu, 20 Jun 2019 23:21:26 -0700",
          programCode: "18587",
          episode: null,
          episodeCode: null,
          thumbnail: "http://hc1.mctv.org/thumbnails/13108.jpg?1560881165",
          attribute: [
            {
              "@name": "Producer Source",
              "#text": "Access"
            },
            {
              "@name": "Schedule Use",
              "#text": "F"
            },
            {
              "@name": "Operator Notes"
            },
            {
              "@name": "Content Tags",
              "#text": "Live Metal/Hard Rock music"
            }
          ],
          category: "A & E",
          mediumId: null,
          vodURL: [],
          description:
            "Live performance of local Heavy Metal band Hectic Shock at the Black Water bar, Portland,Ore. 12-10-2015.",
          link: "http://10.10.10.10",
          guid: "0025909528E2-624700"
        },
        {
          title: "Witch Mountain Live at PDX Pop Now!",
          pubDate: "Thu, 20 Jun 2019 23:21:33 -0700",
          eventId: "624702",
          duration: "1774",
          end_datetime: "Thu, 20 Jun 2019 23:51:07 -0700",
          programCode: "18901",
          episode: null,
          episodeCode: null,
          thumbnail: "http://hc1.mctv.org/thumbnails/17824.jpg?1560881165",
          attribute: [
            {
              "@name": "Producer Source",
              "#text": "Access"
            },
            {
              "@name": "Schedule Use",
              "#text": "F"
            },
            {
              "@name": "Operator Notes"
            },
            {
              "@name": "Content Tags",
              "#text": "Live Rock Metal performance"
            }
          ],
          category: "A & E",
          mediumId: null,
          vodURL: [],
          description:
            "Portland Doom Metal veterans WITCH MOUNTAIN play the PDX Pop Now! music fest. Classic LIVE gig!",
          link: "http://10.10.10.10",
          guid: "0025909528E2-624702"
        },
        {
          title: "Soul'd Out Festival 2018 - Farnell Newton 2",
          pubDate: "Fri, 21 Jun 2019 00:00:00 -0700",
          eventId: "624709",
          duration: "3434",
          end_datetime: "Fri, 21 Jun 2019 00:57:14 -0700",
          programCode: "18927",
          episode: null,
          episodeCode: "0009",
          thumbnail: "http://hc1.mctv.org/thumbnails/18259.jpg?1560881166",
          attribute: [
            {
              "@name": "Producer Source",
              "#text": "Staff"
            },
            {
              "@name": "Schedule Use",
              "#text": "FS"
            },
            {
              "@name": "Operator Notes"
            },
            {
              "@name": "Content Tags",
              "#text": "Soul'd Out Festival, 2018, Farnell Newton"
            }
          ],
          category: "A & E",
          mediumId: null,
          vodURL: [],
          description:
            "Highlights of the 2018 Soul'd Out Festival, recorded at the Jack London Review in Portland.",
          link: "http://10.10.10.10",
          guid: "0025909528E2-624709"
        },
        {
          title: "FSTV",
          pubDate: "Fri, 21 Jun 2019 01:00:00 -0700",
          eventId: "624714",
          duration: "10800",
          end_datetime: "Fri, 21 Jun 2019 04:00:00 -0700",
          programCode: "17865",
          episode: null,
          episodeCode: "1365",
          description: "[655] 17865_1365: FSTV",
          link: "http://10.10.10.10",
          guid: "0025909528E2-624714"
        },
        {
          title: "502 Sessions - Joshua Tazman",
          pubDate: "Fri, 21 Jun 2019 04:00:00 -0700",
          eventId: "624715",
          duration: "3300",
          end_datetime: "Fri, 21 Jun 2019 04:55:00 -0700",
          programCode: "18862",
          episode: null,
          episodeCode: null,
          thumbnail: "http://hc1.mctv.org/thumbnails/17530.jpg?1561064100",
          attribute: [
            {
              "@name": "Producer Source",
              "#text": "Foreign"
            },
            {
              "@name": "Schedule Use",
              "#text": "F"
            },
            {
              "@name": "Operator Notes"
            },
            {
              "@name": "Content Tags"
            }
          ],
          category: "A & E",
          mediumId: null,
          vodURL: [],
          description: [],
          link: "http://10.10.10.10",
          guid: "0025909528E2-624715"
        }
      ]
    },
    {
      title: "3) PAFF - CC 322/22 - FF 33 - CL n/a",
      description: "Channel 3",
      item: [
        {
          title: "MetroEast Community Bulletin Board",
          pubDate: "Thu, 20 Jun 2019 19:00:00 -0700",
          eventId: "624815",
          duration: "3600",
          end_datetime: "Thu, 20 Jun 2019 20:00:00 -0700",
          programCode: null,
          episode: null,
          episodeCode: null,
          description: "[85] MetroEast Community Bulletin Board",
          link: "http://10.10.10.10",
          guid: "0025909528E2-624815"
        },
        {
          title: "NASA-TV (default)",
          pubDate: "Thu, 20 Jun 2019 20:00:00 -0700",
          eventId: "624816",
          duration: "7199",
          end_datetime: "Thu, 20 Jun 2019 21:59:59 -0700",
          programCode: null,
          episode: null,
          episodeCode: null,
          description: "[86] NASA-TV (default)",
          link: "http://10.10.10.10",
          guid: "0025909528E2-624816"
        },
        {
          title: "Democracy Now",
          pubDate: "Thu, 20 Jun 2019 22:00:00 -0700",
          eventId: "624817",
          duration: "3542",
          end_datetime: "Thu, 20 Jun 2019 22:59:02 -0700",
          programCode: "90293",
          episode: "6/20/19",
          episodeCode: "3555",
          thumbnail: "http://hc1.mctv.org/thumbnails/18951.jpg?1561072450",
          attribute: [
            {
              "@name": "Producer Source",
              "#text": "Foreign"
            },
            {
              "@name": "Schedule Use"
            },
            {
              "@name": "Operator Notes"
            },
            {
              "@name": "Content Tags",
              "#text": "Politics, Progressive, Amy Goodman, independent news"
            }
          ],
          category: "Information",
          mediumId: null,
          vodURL: [],
          description:
            "Daily Indy-Media News, hosted by Amy Goodman and Juan Gonzalez.",
          link: "http://10.10.10.10",
          guid: "0025909528E2-624817"
        },
        {
          title: "NASA-TV (default)",
          pubDate: "Thu, 20 Jun 2019 23:00:00 -0700",
          eventId: "624818",
          duration: "7199",
          end_datetime: "Fri, 21 Jun 2019 00:59:59 -0700",
          programCode: null,
          episode: null,
          episodeCode: null,
          description: "[88] NASA-TV (default)",
          link: "http://10.10.10.10",
          guid: "0025909528E2-624818"
        },
        {
          title: "Democracy Now",
          pubDate: "Fri, 21 Jun 2019 01:00:00 -0700",
          eventId: "624819",
          duration: "3542",
          end_datetime: "Fri, 21 Jun 2019 01:59:02 -0700",
          programCode: "90293",
          episode: "6/20/19",
          episodeCode: "3555",
          thumbnail: "http://hc1.mctv.org/thumbnails/18951.jpg?1561072450",
          attribute: [
            {
              "@name": "Producer Source",
              "#text": "Foreign"
            },
            {
              "@name": "Schedule Use"
            },
            {
              "@name": "Operator Notes"
            },
            {
              "@name": "Content Tags",
              "#text": "Politics, Progressive, Amy Goodman, independent news"
            }
          ],
          category: "Information",
          mediumId: null,
          vodURL: [],
          description:
            "Daily Indy-Media News, hosted by Amy Goodman and Juan Gonzalez.",
          link: "http://10.10.10.10",
          guid: "0025909528E2-624819"
        },
        {
          title: "NASA-TV (default)",
          pubDate: "Fri, 21 Jun 2019 02:00:00 -0700",
          eventId: "624820",
          duration: "18000",
          end_datetime: "Fri, 21 Jun 2019 07:00:00 -0700",
          programCode: null,
          episode: null,
          episodeCode: null,
          description: "[90] NASA-TV (default)",
          link: "http://10.10.10.10",
          guid: "0025909528E2-624820"
        },
        {
          title: "MetroEast Community Bulletin Board",
          pubDate: "Fri, 21 Jun 2019 07:00:00 -0700",
          eventId: "624821",
          duration: "3600",
          end_datetime: "Fri, 21 Jun 2019 08:00:00 -0700",
          programCode: null,
          episode: null,
          episodeCode: null,
          description: "[91] MetroEast Community Bulletin Board",
          link: "http://10.10.10.10",
          guid: "0025909528E2-624821"
        },
        {
          title: "NASA-TV (default)",
          pubDate: "Fri, 21 Jun 2019 08:00:00 -0700",
          eventId: "624822",
          duration: "7200",
          end_datetime: "Fri, 21 Jun 2019 10:00:00 -0700",
          programCode: null,
          episode: null,
          episodeCode: null,
          description: "[92] NASA-TV (default)",
          link: "http://10.10.10.10",
          guid: "0025909528E2-624822"
        },
        {
          title: "MetroEast Community Bulletin Board",
          pubDate: "Fri, 21 Jun 2019 10:00:00 -0700",
          eventId: "624823",
          duration: "3600",
          end_datetime: "Fri, 21 Jun 2019 11:00:00 -0700",
          programCode: null,
          episode: null,
          episodeCode: null,
          description: "[93] MetroEast Community Bulletin Board",
          link: "http://10.10.10.10",
          guid: "0025909528E2-624823"
        },
        {
          title: "NASA-TV (default)",
          pubDate: "Fri, 21 Jun 2019 11:00:00 -0700",
          eventId: "624824",
          duration: "7200",
          end_datetime: "Fri, 21 Jun 2019 13:00:00 -0700",
          programCode: null,
          episode: null,
          episodeCode: null,
          description: "[94] NASA-TV (default)",
          link: "http://10.10.10.10",
          guid: "0025909528E2-624824"
        }
      ]
    },
    {
      title: "4) EDU  - CC 327/27 - FF 35 - CL n/a",
      description: "Channel 4",
      item: [
        {
          title: "Third Thursdays Studies - Steven Allred",
          pubDate: "Thu, 20 Jun 2019 19:00:00 -0700",
          eventId: "624803",
          duration: "3488",
          end_datetime: "Thu, 20 Jun 2019 19:58:08 -0700",
          programCode: "17787",
          episode: null,
          episodeCode: null,
          thumbnail: "http://hc1.mctv.org/thumbnails/1863.jpg?1561078801",
          attribute: [
            {
              "@name": "Producer Source",
              "#text": "Staff"
            },
            {
              "@name": "Schedule Use",
              "#text": "FS"
            },
            {
              "@name": "Operator Notes"
            },
            {
              "@name": "Content Tags"
            }
          ],
          category: "A & E",
          mediumId: null,
          vodURL: [],
          description:
            "Arts + Culture series hosted by Gresham Center for arts.",
          link: "http://10.10.10.10",
          guid: "0025909528E2-624803"
        },
        {
          title: "Classic Arts Showcase (default)",
          pubDate: "Thu, 20 Jun 2019 20:00:00 -0700",
          eventId: "624809",
          duration: "7199",
          end_datetime: "Thu, 20 Jun 2019 21:59:59 -0700",
          programCode: null,
          episode: null,
          episodeCode: null,
          description: "[241] Classic Arts Showcase (default)",
          link: "http://10.10.10.10",
          guid: "0025909528E2-624809"
        },
        {
          title: "Classic Arts Showcase",
          pubDate: "Thu, 20 Jun 2019 22:00:00 -0700",
          eventId: "624810",
          duration: "39600",
          end_datetime: "Fri, 21 Jun 2019 09:00:00 -0700",
          programCode: null,
          episode: null,
          episodeCode: null,
          description: "[242] Classic Arts Showcase",
          link: "http://10.10.10.10",
          guid: "0025909528E2-624810"
        },
        {
          title: "Classic Arts Showcase",
          pubDate: "Fri, 21 Jun 2019 09:00:00 -0700",
          eventId: "624811",
          duration: "25199",
          end_datetime: "Fri, 21 Jun 2019 15:59:59 -0700",
          programCode: null,
          episode: null,
          episodeCode: null,
          description: "[243] Classic Arts Showcase",
          link: "http://10.10.10.10",
          guid: "0025909528E2-624811"
        },
        {
          title: "Storytelling - Immigrant Stories",
          pubDate: "Fri, 21 Jun 2019 16:00:07 -0700",
          eventId: "625061",
          duration: "2037",
          end_datetime: "Fri, 21 Jun 2019 16:34:04 -0700",
          programCode: "17746",
          episode: null,
          episodeCode: null,
          thumbnail: "http://hc1.mctv.org/thumbnails/1551.jpg?1560887958",
          attribute: [
            {
              "@name": "Producer Source",
              "#text": "Staff"
            },
            {
              "@name": "Schedule Use",
              "#text": "FS"
            },
            {
              "@name": "Operator Notes"
            },
            {
              "@name": "Content Tags"
            }
          ],
          category: "A & E",
          mediumId: null,
          vodURL: [],
          description:
            "3 stories told by immigrants about their experiences coming to the U.S. Produced in partnership with the Portland Storytellers Guild.",
          link: "http://10.10.10.10",
          guid: "0025909528E2-625061"
        },
        {
          title: "One Way Or Another",
          pubDate: "Fri, 21 Jun 2019 16:34:04 -0700",
          eventId: "625062",
          duration: "1040",
          end_datetime: "Fri, 21 Jun 2019 16:51:24 -0700",
          programCode: "18186",
          episode: null,
          episodeCode: "0005",
          thumbnail: "http://hc1.mctv.org/thumbnails/6759.jpg?1560887958",
          attribute: [
            {
              "@name": "Producer Source",
              "#text": "Foreign"
            },
            {
              "@name": "Schedule Use",
              "#text": "FS"
            },
            {
              "@name": "Operator Notes"
            },
            {
              "@name": "Content Tags",
              "#text": "RSA, London, Shorts"
            }
          ],
          category: "Information",
          mediumId: null,
          vodURL: [],
          description:
            "The Royal Society for the Arts presents topics on issues philosophical, political, and beyond.",
          link: "http://10.10.10.10",
          guid: "0025909528E2-625062"
        },
        {
          title: "U. O. Today",
          pubDate: "Fri, 21 Jun 2019 16:59:59 -0700",
          eventId: "625067",
          duration: "1724",
          end_datetime: "Fri, 21 Jun 2019 17:28:43 -0700",
          programCode: "90090",
          episode: null,
          episodeCode: "0977",
          thumbnail: "http://hc1.mctv.org/thumbnails/18935.jpg?1561071524",
          attribute: [
            {
              "@name": "Producer Source",
              "#text": "Local"
            },
            {
              "@name": "Schedule Use"
            },
            {
              "@name": "Operator Notes"
            },
            {
              "@name": "Content Tags",
              "#text":
                "University of Oregon, U of O, Ducks, GO Ducks, Student life, higher education."
            }
          ],
          category: "Information",
          mediumId: null,
          vodURL: [],
          description:
            "Interviews with visiting lecturers and U.O faculty on topics related to their current research or areas of interest.",
          link: "http://10.10.10.10",
          guid: "0025909528E2-625067"
        },
        {
          title: "Storytelling event: Stories Ala Carte'",
          pubDate: "Fri, 21 Jun 2019 17:30:00 -0700",
          eventId: "625072",
          duration: "1270",
          end_datetime: "Fri, 21 Jun 2019 17:51:10 -0700",
          programCode: "16421",
          episode: null,
          episodeCode: "0002",
          thumbnail: "http://hc1.mctv.org/thumbnails/198.jpg?1560887959",
          attribute: [
            {
              "@name": "Producer Source",
              "#text": "Staff"
            },
            {
              "@name": "Schedule Use",
              "#text": "FS"
            },
            {
              "@name": "Operator Notes"
            },
            {
              "@name": "Content Tags"
            }
          ],
          category: "A & E",
          mediumId: null,
          vodURL: [],
          description: [],
          link: "http://10.10.10.10",
          guid: "0025909528E2-625072"
        },
        {
          title: "Royal Society for the arts",
          pubDate: "Fri, 21 Jun 2019 18:00:01 -0700",
          eventId: "625076",
          duration: "4048",
          end_datetime: "Fri, 21 Jun 2019 19:07:29 -0700",
          programCode: "18214",
          episode: null,
          episodeCode: "0207",
          thumbnail: "http://hc1.mctv.org/thumbnails/18946.jpg?1560996447",
          attribute: [
            {
              "@name": "Producer Source",
              "#text": "Foreign"
            },
            {
              "@name": "Schedule Use"
            },
            {
              "@name": "Operator Notes"
            },
            {
              "@name": "Content Tags",
              "#text":
                "21st century ideas, new ideas, arts, culture, free thought."
            }
          ],
          category: "Information",
          mediumId: null,
          vodURL: [],
          description:
            "The RSA's mission is to enrich society through ideas and action. We believe that all human beings have creative capacities that, when understood and supported, can be mobilised to deliver a 21st century enlightenment.",
          link: "http://10.10.10.10",
          guid: "0025909528E2-625076"
        },
        {
          title: "Storytelling event: Stories Ala Carte'",
          pubDate: "Fri, 21 Jun 2019 19:07:36 -0700",
          eventId: "625078",
          duration: "1246",
          end_datetime: "Fri, 21 Jun 2019 19:28:22 -0700",
          programCode: "16421",
          episode: null,
          episodeCode: "0012",
          thumbnail: "http://hc1.mctv.org/thumbnails/203.jpg?1560887960",
          attribute: [
            {
              "@name": "Producer Source",
              "#text": "Staff"
            },
            {
              "@name": "Schedule Use",
              "#text": "FS"
            },
            {
              "@name": "Operator Notes"
            },
            {
              "@name": "Content Tags"
            }
          ],
          category: "A & E",
          mediumId: null,
          vodURL: [],
          description: [],
          link: "http://10.10.10.10",
          guid: "0025909528E2-625078"
        }
      ]
    },
    {
      title: "5) POP  - CC 329/29 - FF 37 - CL 8506/8006",
      description: "Channel 5",
      item: [
        {
          title: "Classic Arts Showcase",
          pubDate: "Fri, 21 Jun 2019 01:00:00 -0700",
          eventId: "624829",
          duration: "10800",
          end_datetime: "Fri, 21 Jun 2019 04:00:00 -0700",
          programCode: null,
          episode: null,
          episodeCode: null,
          description: "[210] Classic Arts Showcase",
          link: "http://10.10.10.10",
          guid: "0025909528E2-624829"
        },
        {
          title: "Grassroots Radio Conference- Roundtable Discussion",
          pubDate: "Fri, 21 Jun 2019 04:00:08 -0700",
          eventId: "624831",
          duration: "4540",
          end_datetime: "Fri, 21 Jun 2019 05:15:48 -0700",
          programCode: "18904",
          episode: null,
          episodeCode: "0003",
          thumbnail: "http://hc1.mctv.org/thumbnails/17854.jpg?1560881175",
          attribute: [
            {
              "@name": "Producer Source",
              "#text": "Staff"
            },
            {
              "@name": "Schedule Use",
              "#text": "FS"
            },
            {
              "@name": "Operator Notes"
            },
            {
              "@name": "Content Tags"
            }
          ],
          category: "Public Affairs",
          mediumId: null,
          vodURL: [],
          description:
            "Roundtable discussion from the 2018 Grassroots Radio Conference featuring former FCC commissioner Mignon Clyburn",
          link: "http://10.10.10.10",
          guid: "0025909528E2-624831"
        },
        {
          title: "Promoting Civil Discourse",
          pubDate: "Fri, 21 Jun 2019 05:30:00 -0700",
          eventId: "624836",
          duration: "5078",
          end_datetime: "Fri, 21 Jun 2019 06:54:38 -0700",
          programCode: "18705",
          episode: null,
          episodeCode: null,
          thumbnail: "http://hc1.mctv.org/thumbnails/15283.jpg?1560881176",
          attribute: [
            {
              "@name": "Producer Source",
              "#text": "Staff"
            },
            {
              "@name": "Schedule Use",
              "#text": "FS"
            },
            {
              "@name": "Operator Notes"
            },
            {
              "@name": "Content Tags",
              "#text": "LWV PDX Civil Discourse"
            }
          ],
          category: "Public Affairs",
          mediumId: null,
          vodURL: [],
          description:
            "The League of Women Voters of Portland presents Promoting Civil Discourse a panel discussion.",
          link: "http://10.10.10.10",
          guid: "0025909528E2-624836"
        },
        {
          title: "Classic Arts Showcase",
          pubDate: "Fri, 21 Jun 2019 07:00:00 -0700",
          eventId: "624840",
          duration: "3600",
          end_datetime: "Fri, 21 Jun 2019 08:00:00 -0700",
          programCode: null,
          episode: null,
          episodeCode: null,
          description: "[221] Classic Arts Showcase",
          link: "http://10.10.10.10",
          guid: "0025909528E2-624840"
        },
        {
          title: "Democracy Now",
          pubDate: "Fri, 21 Jun 2019 08:00:00 -0700",
          eventId: "624841",
          duration: "3600",
          end_datetime: "Fri, 21 Jun 2019 09:00:00 -0700",
          programCode: "90293",
          episode: null,
          episodeCode: "3556",
          thumbnail: "http://hc1.mctv.org/images/icons/tbd.jpg",
          attribute: [
            {
              "@name": "Producer Source",
              "#text": "Foreign"
            },
            {
              "@name": "Schedule Use"
            },
            {
              "@name": "Operator Notes"
            },
            {
              "@name": "Content Tags",
              "#text": "Politics, Progressive, Amy Goodman, independent news"
            }
          ],
          category: "Information",
          mediumId: null,
          vodURL: [],
          description:
            "Daily Indy-Media News, hosted by Amy Goodman and Juan Gonzalez.",
          link: "http://10.10.10.10",
          guid: "0025909528E2-624841"
        },
        {
          title: "Grassroots Radio Conference- Keynote Address",
          pubDate: "Fri, 21 Jun 2019 09:00:08 -0700",
          eventId: "624843",
          duration: "2357",
          end_datetime: "Fri, 21 Jun 2019 09:39:25 -0700",
          programCode: "18904",
          episode: null,
          episodeCode: "0001",
          thumbnail: "http://hc1.mctv.org/thumbnails/17839.jpg?1560881176",
          attribute: [
            {
              "@name": "Producer Source",
              "#text": "Staff"
            },
            {
              "@name": "Schedule Use",
              "#text": "FS"
            },
            {
              "@name": "Operator Notes"
            },
            {
              "@name": "Content Tags"
            }
          ],
          category: "Public Affairs",
          mediumId: null,
          vodURL: [],
          description:
            "Former FCC Commissioner Mignon Clyburn gives the keynote address to this years Grassroots Radio Conference",
          link: "http://10.10.10.10",
          guid: "0025909528E2-624843"
        },
        {
          title: "Future of PEG Access",
          pubDate: "Fri, 21 Jun 2019 09:39:25 -0700",
          eventId: "624844",
          duration: "1207",
          end_datetime: "Fri, 21 Jun 2019 09:59:32 -0700",
          programCode: "18949",
          episode: null,
          episodeCode: null,
          thumbnail: "http://hc1.mctv.org/thumbnails/18579.jpg?1561077001",
          attribute: [
            {
              "@name": "Producer Source",
              "#text": "Foreign"
            },
            {
              "@name": "Schedule Use",
              "#text": "FS"
            },
            {
              "@name": "Operator Notes"
            },
            {
              "@name": "Content Tags",
              "#text": "Senator Edward Markey, PEG access"
            }
          ],
          category: "Information",
          mediumId: null,
          vodURL: [],
          description:
            "Senator Edward Markey holds a press conference to announce his effort to fight a movement by the FCC that would dramatically cut funding for PEG Access centers across the United States.",
          link: "http://10.10.10.10",
          guid: "0025909528E2-624844"
        },
        {
          title: "Community Hotline",
          pubDate: "Fri, 21 Jun 2019 10:00:01 -0700",
          eventId: "624847",
          duration: "3505",
          end_datetime: "Fri, 21 Jun 2019 10:58:26 -0700",
          programCode: "78003",
          episode: null,
          episodeCode: "1103",
          thumbnail: "http://hc1.mctv.org/thumbnails/18923.jpg?1561053505",
          attribute: [
            {
              "@name": "Producer Source",
              "#text": "Staff"
            },
            {
              "@name": "Schedule Use"
            },
            {
              "@name": "Operator Notes"
            },
            {
              "@name": "Content Tags",
              "#text": "MetroEast, Non-profits"
            }
          ],
          category: "Information",
          mediumId: "486632",
          vodURL:
            "https://videoplayer.telvue.com/player/5QlcS026fQy98qR8aFzKSh5DvYNq1NKn/media/486632",
          description:
            "MetroEast's Community oriented program showcasing local non-profits and other community orginaizations.",
          link: "http://10.10.10.10",
          guid: "0025909528E2-624847"
        },
        {
          title: "Classic Arts Showcase",
          pubDate: "Fri, 21 Jun 2019 11:00:00 -0700",
          eventId: "624852",
          duration: "18000",
          end_datetime: "Fri, 21 Jun 2019 16:00:00 -0700",
          programCode: null,
          episode: null,
          episodeCode: null,
          description: "[233] Classic Arts Showcase",
          link: "http://10.10.10.10",
          guid: "0025909528E2-624852"
        },
        {
          title: "Democracy Now",
          pubDate: "Fri, 21 Jun 2019 16:00:00 -0700",
          eventId: "625129",
          duration: "3600",
          end_datetime: "Fri, 21 Jun 2019 17:00:00 -0700",
          programCode: "90293",
          episode: null,
          episodeCode: "3556",
          thumbnail: "http://hc1.mctv.org/images/icons/tbd.jpg",
          attribute: [
            {
              "@name": "Producer Source",
              "#text": "Foreign"
            },
            {
              "@name": "Schedule Use"
            },
            {
              "@name": "Operator Notes"
            },
            {
              "@name": "Content Tags",
              "#text": "Politics, Progressive, Amy Goodman, independent news"
            }
          ],
          category: "Information",
          mediumId: null,
          vodURL: [],
          description:
            "Daily Indy-Media News, hosted by Amy Goodman and Juan Gonzalez.",
          link: "http://10.10.10.10",
          guid: "0025909528E2-625129"
        }
      ]
    },
    {
      title: "6) CITY - CC 330/30 - FF 38 - CL 8507/8007",
      description: "Channel 6",
      item: [
        {
          title: "BB Municipal",
          pubDate: "Thu, 20 Jun 2019 19:49:54 -0700",
          eventId: "625511",
          duration: "1967",
          end_datetime: "Thu, 20 Jun 2019 20:22:41 -0700",
          programCode: null,
          episode: null,
          episodeCode: null,
          description: "VSI Encoder 7",
          link: "http://10.10.10.10",
          guid: "0025909528E2-625511"
        },
        {
          title: "MetroEast Municipal Bulletin Board",
          pubDate: "Thu, 20 Jun 2019 20:22:41 -0700",
          eventId: "624789",
          duration: "21600",
          end_datetime: "Fri, 21 Jun 2019 02:22:41 -0700",
          programCode: null,
          episode: null,
          episodeCode: null,
          description: "[37] MetroEast Municipal Bulletin Board",
          link: "http://10.10.10.10",
          guid: "0025909528E2-624789"
        },
        {
          title: "MetroEast Municipal Bulletin Board",
          pubDate: "Fri, 21 Jun 2019 02:22:41 -0700",
          eventId: "624790",
          duration: "21600",
          end_datetime: "Fri, 21 Jun 2019 08:22:41 -0700",
          programCode: null,
          episode: null,
          episodeCode: null,
          description: "[38] MetroEast Municipal Bulletin Board",
          link: "http://10.10.10.10",
          guid: "0025909528E2-624790"
        },
        {
          title: "MetroEast Municipal Bulletin Board",
          pubDate: "Fri, 21 Jun 2019 08:22:41 -0700",
          eventId: "624791",
          duration: "21600",
          end_datetime: "Fri, 21 Jun 2019 14:22:41 -0700",
          programCode: null,
          episode: null,
          episodeCode: null,
          description: "[39] MetroEast Municipal Bulletin Board",
          link: "http://10.10.10.10",
          guid: "0025909528E2-624791"
        },
        {
          title: "MetroEast Municipal Bulletin Board",
          pubDate: "Fri, 21 Jun 2019 14:22:41 -0700",
          eventId: "624792",
          duration: "5838",
          end_datetime: "Fri, 21 Jun 2019 15:59:59 -0700",
          programCode: null,
          episode: null,
          episodeCode: null,
          description: "[40] MetroEast Municipal Bulletin Board",
          link: "http://10.10.10.10",
          guid: "0025909528E2-624792"
        },
        {
          title: "Troutdale City Council",
          pubDate: "Fri, 21 Jun 2019 16:00:00 -0700",
          eventId: "625050",
          duration: "2545",
          end_datetime: "Fri, 21 Jun 2019 16:42:25 -0700",
          programCode: "58001",
          episode: "6-11-2019",
          episodeCode: "0546",
          thumbnail: "http://hc1.mctv.org/thumbnails/18920.jpg?1561052886",
          attribute: [
            {
              "@name": "Producer Source",
              "#text": "Staff"
            },
            {
              "@name": "Schedule Use"
            },
            {
              "@name": "Operator Notes"
            },
            {
              "@name": "Content Tags",
              "#text": "Troutdale, City council, Municipals, local government."
            }
          ],
          category: "Municipal",
          mediumId: "486430",
          vodURL:
            "https://videoplayer.telvue.com/player/5QlcS026fQy98qR8aFzKSh5DvYNq1NKn/media/486430",
          description: "Live coverage of the Troutdale city council meetings.",
          link: "http://10.10.10.10",
          guid: "0025909528E2-625050"
        },
        {
          title: "MetroEast Municipal Bulletin Board",
          pubDate: "Fri, 21 Jun 2019 16:42:25 -0700",
          eventId: "625051",
          duration: "11855",
          end_datetime: "Fri, 21 Jun 2019 20:00:00 -0700",
          programCode: null,
          episode: null,
          episodeCode: null,
          description: "[42] MetroEast Municipal Bulletin Board",
          link: "http://10.10.10.10",
          guid: "0025909528E2-625051"
        },
        {
          title: "City Club of Portland (PCM)_The",
          pubDate: "Fri, 21 Jun 2019 20:00:00 -0700",
          eventId: "625052",
          duration: "3600",
          end_datetime: "Fri, 21 Jun 2019 21:00:00 -0700",
          programCode: null,
          episode: null,
          episodeCode: null,
          description: "[43] City Club of Portland (PCM)_The",
          link: "http://10.10.10.10",
          guid: "0025909528E2-625052"
        },
        {
          title: "MetroEast Municipal Bulletin Board",
          pubDate: "Fri, 21 Jun 2019 21:00:00 -0700",
          eventId: "625053",
          duration: "1800",
          end_datetime: "Fri, 21 Jun 2019 21:30:00 -0700",
          programCode: null,
          episode: null,
          episodeCode: null,
          description: "[44] MetroEast Municipal Bulletin Board",
          link: "http://10.10.10.10",
          guid: "0025909528E2-625053"
        },
        {
          title: "Gresham City Council",
          pubDate: "Fri, 21 Jun 2019 21:30:00 -0700",
          eventId: "625054",
          duration: "1867",
          end_datetime: "Fri, 21 Jun 2019 22:01:07 -0700",
          programCode: "58007",
          episode: null,
          episodeCode: "0555",
          thumbnail: "http://hc1.mctv.org/thumbnails/18959.jpg?1560994695",
          attribute: [
            {
              "@name": "Producer Source",
              "#text": "Staff"
            },
            {
              "@name": "Schedule Use"
            },
            {
              "@name": "Operator Notes"
            },
            {
              "@name": "Content Tags",
              "#text": "Municipals, Gresham, City Council, Local government"
            }
          ],
          category: "Municipal",
          mediumId: "487504",
          vodURL:
            "https://videoplayer.telvue.com/player/5QlcS026fQy98qR8aFzKSh5DvYNq1NKn/media/487504",
          description: "6-18-19",
          link: "http://10.10.10.10",
          guid: "0025909528E2-625054"
        }
      ]
    },
    {
      title: "7) GUID - CC   n/a  - FF 31 - CL n/a",
      description: "Channel 7"
    },
    {
      title: "8) Signage 1",
      description: "Lobby Signage"
    },
    {
      title: "9) Spare",
      description: "Channel 9"
    },
    {
      title: "10) Testing",
      description: "Test Channel"
    }
  ]
};
