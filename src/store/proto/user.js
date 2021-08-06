console.log(' hey ',localStorage.getItem("userDB"));


export const users = [
    {
        gender: "female",
        name: {
            title: "Mademoiselle",
            first: "Manuela",
            last: "Vidal"
        },
        location: {
            street: {
                number: 175,
                name: "Rue de Bonnel"
            },
            city: "Buchillon",
            state: "Neuchâtel",
            country: "Switzerland",
            postcode: 6406,
            coordinates: {
                latitude: "-48.9607",
                longitude: "10.4649"
            },
            timezone: {
                offset: "+4:30",
                description: "Kabul"
            }
        },
        email: "manuela.vidal@example.com",
        login: {
            uuid: "9fba0727-0de2-49e7-8acb-6404729dffda",
            username: "sadkoala338",
            password: "shaved",
            salt: "Z5jJ4CbM",
            md5: "acc25f39795f2fe7e4bf305a67b6eddb",
            sha1: "a574959eacd32fcdb983c1068385fc9c11b5d665",
            sha256: "ab5f967a781937102fdc98a707ea68a2cb54bc247ea7fb111d88fc558bda8370"
        },
        dob: {
            date: "1945-12-21T09:51:31.537Z",
            age: 76
        },
        registered: {
            date: "2007-05-23T09:25:56.168Z",
            age: 14
        },
        phone: "079 998 61 61",
        cell: "078 154 46 95",
        id: {
            name: "AVS",
            value: "756.0712.1703.41"
        },
        picture: {
            large: "https://randomuser.me/api/portraits/women/45.jpg",
            medium: "https://randomuser.me/api/portraits/med/women/45.jpg",
            thumbnail: "https://randomuser.me/api/portraits/thumb/women/45.jpg"
        },
        nat: "CH"
    },
    {
        gender: "female",
        name: {
            title: "Ms",
            first: "Amelia",
            last: "Ouellet"
        },
        location: {
            street: {
                number: 641,
                name: "Argyle St"
            },
            city: "Stratford",
            state: "Québec",
            country: "Canada",
            postcode: "S8O 6Q4",
            coordinates: {
                latitude: "-60.2681",
                longitude: "83.5733"
            },
            timezone: {
                offset: "+5:45",
                description: "Kathmandu"
            }
        },
        email: "amelia.ouellet@example.com",
        login: {
            uuid: "1bfc12dd-a810-4439-bbcc-33bee8015b72",
            username: "silverelephant324",
            password: "sensei",
            salt: "FgdrnLSS",
            md5: "18c3108eacf5518df4483f2fdd4741fd",
            sha1: "05d9b42acc2e6cf0c5a471ad7b35b7b35434594b",
            sha256: "e9345639db0a7d360093c09a962280694d37e0cc1db8cb15fe7729ba2bb7031e"
        },
        dob: {
            date: "1982-09-04T12:23:06.339Z",
            age: 39
        },
        registered: {
            date: "2017-10-03T07:01:09.280Z",
            age: 4
        },
        phone: "500-374-1186",
        cell: "427-405-9911",
        id: {
            name: "",
            value: null
        },
        picture: {
            large: "https://randomuser.me/api/portraits/women/86.jpg",
            medium: "https://randomuser.me/api/portraits/med/women/86.jpg",
            thumbnail: "https://randomuser.me/api/portraits/thumb/women/86.jpg"
        },
        nat: "CA"
    },
    {
        gender: "male",
        name: {
            title: "Mr",
            first: "Noah",
            last: "Harris"
        },
        location: {
            street: {
                number: 5300,
                name: "Richmond Road"
            },
            city: "Westminster",
            state: "Northumberland",
            country: "United Kingdom",
            postcode: "T1 2QL",
            coordinates: {
                latitude: "7.9659",
                longitude: "-95.3086"
            },
            timezone: {
                offset: "-9:00",
                description: "Alaska"
            }
        },
        email: "noah.harris@example.com",
        login: {
            uuid: "b518afb0-c7e1-4a52-883c-3b8488d511e1",
            username: "brownrabbit293",
            password: "lespaul",
            salt: "WB6hOujs",
            md5: "8646d30d1c6cb408721388ee93c7d4b3",
            sha1: "bd011bbcd742ed63cd9b1cc49ecb30a7e99d80a4",
            sha256: "35fa1939a9dccaf77f395a90cd4a0dcf7f99859574174e9a47f2a6d84620399b"
        },
        dob: {
            date: "1983-03-24T13:02:11.515Z",
            age: 38
        },
        registered: {
            date: "2011-07-13T10:33:56.858Z",
            age: 10
        },
        phone: "016977 05761",
        cell: "0741-561-725",
        id: {
            name: "NINO",
            value: "GW 39 71 74 T"
        },
        picture: {
            large: "https://randomuser.me/api/portraits/men/28.jpg",
            medium: "https://randomuser.me/api/portraits/med/men/28.jpg",
            thumbnail: "https://randomuser.me/api/portraits/thumb/men/28.jpg"
        },
        nat: "GB"
    }
]

const dbObj = JSON.parse(localStorage.getItem("userDB"));

users.push(dbObj)