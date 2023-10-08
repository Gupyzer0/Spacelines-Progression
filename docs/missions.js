missions = [
    // EXPLORER
    {
        "_name": "Explorer-1",
    },
    {
        "_name": "Explorer-2",
        "_deps": ["Explorer-1"]
    },
    {
        "_name": "Explorer-3",
        "_deps": ["Explorer-2"]
    },
    {
        "_name": "Explorer-4",
        "_deps": ["Explorer-3"]
    },
    {
        "_name": "Explorer-5",
        "_deps": ["Explorer-4"]
    },
    {
        "_name": "Explorer-6",
        "_deps": ["Explorer-1"]
    },
    {
        "_name": "Explorer-7",
        "_deps": ["Explorer-6"]
    },
    {
        "_name": "Explorer-S46",
        "_deps": ["Explorer-7"]
    },
    {
        "_name": "Explorer-8",
        "_deps": ["Explorer-7"]
    },
    {
        "_name": "Explorer-S45",
        "_deps": ["Explorer-8"]
    },
    {
        "_name": "Explorer-11",
        "_deps": ["Explorer-8"]
    },
    {
        "_name": "Explorer-18",
        "_deps": ["Explorer-11"]
    },
    {
        "_name": "Explorer-21",
        "_deps": ["Explorer-18"]
    },
    {
        "_name": "Explorer-22",
        "_deps": ["Explorer-18"]
    },
    {
        "_name": "Explorer-27",
        "_deps": ["Explorer-22"]
    },
    {
        "_name": "Explorer-28",
        "_deps": ["Explorer-21"]
    },
    {
        "_name": "Explorer-30",
        "_deps": ["Explorer-18"]
    },
    {
        "_name": "Explorer-33",
        "_deps": ["Explorer-28"]
    },
    {
        "_name": "Explorer-35",
        "_deps": ["Explorer-33"]
    },
    {
        "_name": "Explorer-38",
        "_deps": ["Explorer-35"]
    },
    {
        "_name": "Explorer-49",
        "_deps": ["Explorer-38"]
    },
    // BIOSATELLITE
    {
        "_name": "Biosatellite-1",
        "_deps": ["Corona_KH1"]
    },
    {
        "_name": "Biosatellite-2",
        "_deps": ["Biosatellite-1"]
    },
    {
        "_name": "Biosatellite-3",
        "_deps": ["Biosatellite-2"]
    },
    // ALOUETTE
    {
        "_name": "Alouette-1",
        "_deps": ["Explorer-11"]
    },
    {
        "_name": "Alouette-2",
        "_deps": ["Alouette-1"]
    },
    // HELIOS
    {
        "_name": "Helios-1",
        "_deps": ["Pioneer-9"]
    },
    {
        "_name": "Helios-2",
        "_deps": ["Helios-1"]
    },

    // LUNAR ORBITER
    {
        "_name": "Lunar-Orbiter",
        "_deps": ["Surveyor-1"]
    },

    // MARINER
    {
        "_name": "Mariner-2",
        "_deps": ["Ranger-1"]
    },
    {
        "_name": "Mariner-4",
        "_deps": ["Mariner-2"]
    },
    {
        "_name": "Mariner-5",
        "_deps": ["Mariner-4"]
    },
    {
        "_name": "Mariner-6",
        "_deps": ["Mariner-5","Surveyor-1"]
    },
    {
        "_name": "Mariner-7",
        "_deps": ["Mariner-6"]
    },
    {
        "_name": "Mariner-9",
        "_deps": ["Mariner-7"]
    },
    {
        "_name": "Mariner-10",
        "_deps": ["Mariner-9"]
    },

    // Viking
    {
        "_name": "Viking-1",
        "_deps": ["Mariner-10"]
    },
    {
        "_name": "Viking-2",
        "_deps": ["Viking-1"]
    },

    // Voyager
    {
        "_name": "Voyager-2",
        "_deps": ["Viking-1"]
    },
    {
        "_name": "Voyager-1",
        "_deps": ["Voyager-2"]
    },
    {
        "_name": "Voyager-Mars",
        "_deps": ["Mariner-10"]
    },

    // OAO
    {
        "_name": "OAO-1",
        "_deps": ["OSO Missions"]
    },
    {
        "_name": "OAO-2",
        "_deps": ["OAO-1"]
    },
    {
        "_name": "OAO-3",
        "_deps": ["OAO-2"]
    },

    //KEPLER
    {
        "_name": "Kepler",
        "_deps": ["OAO-3"]
    },

    // OGO
    {
        "_name": "OGO-Equatorial",
        "_deps": ["Explorer-18"]
    },
    {
        "_name": "OGO-Polar",
        "_deps": ["OGO-Equatorial"]
    },


    // PEGASUS
    {
        "_name": "Pegasus Missions",
        "_deps": ["Little-Joe-II"]
    },

    // PIONEER
    {
        "_name": "Pioneer-1",
        "_deps": ["Explorer-1"]
    },
    {
        "_name": "Pioneer-4",
        "_deps": ["Pioneer-1"]
    },
    {
        "_name": "Pioneer-P-3",
        "_deps": ["Pioneer-4"]
    },
    {
        "_name": "Pioneer-5",
        "_deps": ["Pioneer-4"]
    },
    {
        "_name": "Pioneer-6",
        "_deps": ["Pioneer-5"]
    },
    {
        "_name": "Pioneer-7",
        "_deps": ["Pioneer-6"]
    },
    {
        "_name": "Pioneer-8",
        "_deps": ["Pioneer-7"]
    },
    {
        "_name": "Pioneer-9",
        "_deps": ["Pioneer-8"]
    },
    {
        "_name": "Pioneer-10",
        "_deps": ["Pioneer-9"]
    },
    {
        "_name": "Pioneer-11",
        "_deps": ["Pioneer-10"]
    },
    {
        "_name": "Pioneer-12",
        "_deps": ["Pioneer-10"]
    },
    {
        "_name": "Pioneer-13",
        "_deps": ["Pioneer-12"]
    },
    {
        "_name": "Pioneer-Atmosphere-Entry",
        "_deps": ["Pioneer-13"]
    },
    {
        "_name": "Pioneer-Outer-Planets-Orbiter",
        "_deps": ["Pioneer-13"]
    },

    // BEACON
    {
        "_name": "Beacon-1",
        "_deps": ["Explorer-1"]
    },
    {
        "_name": "Beacon-2",
        "_deps": ["Beacon-1"]
    },

    // RANGER
    // block 1
    {
        "_name": "Ranger-1",
        "_deps": ["Pioneer-4"]
    },
    {
        "_name": "Ranger-2",
        "_deps": ["Ranger-1"]
    },
    // block 2
    {
        "_name": "Ranger-3",
        "_deps": ["Ranger-1"]
    },
    {
        "_name": "Ranger-4",
        "_deps": ["Ranger-3"]
    },
    {
        "_name": "Ranger-5",
        "_deps": ["Ranger-4"]
    },
    // block 3
    {
        "_name": "Ranger-6",
        "_deps": ["Ranger-3"]
    },
    {
        "_name": "Ranger-7",
        "_deps": ["Ranger-6"]
    },
    {
        "_name": "Ranger-8",
        "_deps": ["Ranger-7"]
    },
    {
        "_name": "Ranger-9",
        "_deps": ["Ranger-8"]
    },

    // SURVEYOR
    {
        "_name": "Surveyor-1",
        "_deps": ["Ranger-6"]
    },
    {
        "_name": "Surveyor-2",
        "_deps": ["Surveyor-1"]
    },
    {
        "_name": "Surveyor-3",
        "_deps": ["Surveyor-2"]
    },
    {
        "_name": "Surveyor-4",
        "_deps": ["Surveyor-3"]
    },
    {
        "_name": "Surveyor-5",
        "_deps": ["Surveyor-4"]
    },
    {
        "_name": "Surveyor-6",
        "_deps": ["Surveyor-5"]
    },
    {
        "_name": "Surveyor-7",
        "_deps": ["Surveyor-6"]
    },

    // VANGUARD
    {
        "_name": "Vanguard-1",
        "_deps": ["Explorer-1"]
    },
    {
        "_name": "Vanguard-2",
        "_deps": ["Vanguard-1"]
    },
    {
        "_name": "Vanguard-3",
        "_deps": ["Vanguard-2"]
    },

    // OFO
    {
        "_name": "OFO-1",
        "_deps": ["Biosatellite-1"]
    },

    // OSO
    {
        "_name": "OSO Missions",
        "_deps": ["Explorer-11"]
    },

    //WRESAT
    {
        "_name": "WRESAT",
        "_deps": ["Explorer-1"]
    },

    // MERCURY PROGRAM
    {
        "_name": "Little-Joe-1",
        "_deps": ["Pioneer-4"]
    },
    {
        "_name": "Big-Joe",
        "_deps": ["Little-Joe-1"]
    },
    {
        "_name": "Beach-Abort",
        "_deps": ["Big-Joe"]
    },
    {
        "_name": "Freedom-7",
        "_deps": ["Beach-Abort"]
    },
    {
        "_name": "Liberty-Bell-7",
        "_deps": ["Freedom-7"]
    },
    {
        "_name": "Friendship-7",
        "_deps": ["Freedom-7"]
    },
    {
        "_name": "Aurora-7",
        "_deps": ["Friendship-7"]
    },
    {
        "_name": "Sigma-7",
        "_deps": ["Aurora-7"]
    },
    {
        "_name": "Faith-7",
        "_deps": ["Sigma-7"]
    },

    // GEMINI PROGRAM
    {
        "_name": "Gemini-III",
        "_deps": ["Friendship-7"],
    },
    {
        "_name": "Gemini-IV",
        "_deps": ["Gemini-III"],
    },
    {
        "_name": "Gemini-V",
        "_deps": ["Gemini-IV"],
    },
    {
        "_name": "Gemini-VII",
        "_deps": ["Gemini-V"],
    },
    {
        "_name": "Gemini-VI-A",
        "_deps": ["Gemini-VII"],
    },
    {
        "_name": "Gemini-VIII-ATV",
        "_deps": ["Gemini-VI-A"]
    },
    {
        "_name": "Gemini-VIII",
        "_deps": ["Gemini-VIII-ATV"],
    },
    {
        "_name": "Gemini-IX-ATDA",
        "_deps": ["Gemini-VIII"]
    },
    {
        "_name": "Gemini-IX-A",
        "_deps": ["Gemini-IX-ATDA"],
    },
    {
        "_name": "Gemini-X-ATV",
        "_deps": ["Gemini-IX-A"]
    },
    {
        "_name": "Gemini-X",
        "_deps": ["Gemini-X-ATV"],
    },
    {
        "_name": "Gemini-XI-ATV",
        "_deps": ["Gemini-X"]
    },
    {
        "_name": "Gemini-XI",
        "_deps": ["Gemini-XI-ATV"],
    },
    {
        "_name": "Gemini-XII-ATV",
        "_deps": ["Gemini-XI"]
    },
    {
        "_name": "Gemini-XII",
        "_deps": ["Gemini-XII-ATV"],
    },
    {
        "_name": "Gemini-Mun-Flyby",
        "_deps": ["Gemini-X"],
        "_alternate_history": "true",
    },
    {
        "_name": "Gemini-Minmus-Flyby",
        "_deps": ["Gemini-Mun-Flyby"],
        "_alternate_history": "true",
    },

    // APOLLO PROGRAM
    {
        "_name": "Little-Joe-II",
        "_deps": ["Gemini-VIII"]
    },
    {
        "_name": "Apollo-7",
        "_deps": ["Little-Joe-II"]
    },
    {
        "_name": "Apollo-8",
        "_deps": ["Apollo-7"]
    },
    {
        "_name": "Apollo-9",
        "_deps": ["Apollo-8"]
    },
    {
        "_name": "Apollo-10",
        "_deps": ["Apollo-9"]
    },
    {
        "_name": "Apollo-11",
        "_deps": ["Apollo-10"]
    },
    {
        "_name": "Apollo-12",
        "_deps": ["Apollo-11","Surveyor-3"],
        "requires": "Requires Surveyor-3 and Apollo-11"
    },
    {
        "_name": "Apollo-13",
        "_deps": ["Apollo-12"],

    },
    {
        "_name": "Apollo-14",
        "_deps": ["Apollo-13"]
    },
    {
        "_name": "Apollo-15",
        "_deps": ["Apollo-14"]
    },
    {
        "_name": "Apollo-16",
        "_deps": ["Apollo-15"]
    },
    {
        "_name": "Apollo-17",
        "_deps": ["Apollo-16"]
    },
    {
        "_name": "Skylab-1",
        "_deps": ["Apollo-11"]
    },
    {
        "_name": "Skylab-2",
        "_deps": ["Skylab-1"]
    },
    {
        "_name": "Skylab-3",
        "_deps": ["Skylab-2"]
    },
    {
        "_name": "Skylab-4",
        "_deps": ["Skylab-3"]
    },
    {
        "_name": "Apollo-Soyuz",
        "_deps": ["Skylab-2"]
    },

    // VENUS FLYBY
    {
        "_name": "AAP: Venus Flyby",
        "_deps": ["Skylab-2"]
    },
    // MARS FLYBY
    {
        "_name": "AAP: Mars Flyby",
        "_deps": ["AAP: Venus Flyby"]
    },

    // KEYHOLE
    {
        "_name": "Corona_KH1",
        "_deps": ["Pioneer-1"]
    },
    {
        "_name": "Corona_KH4",
        "_deps": ["Corona_KH1"]
    },
    {
        "_name": "Corona_KH4A",
        "_deps": ["Corona_KH4"]
    },
    {
        "_name": "Corona_KH4B",
        "_deps": ["Corona_KH4A"]
    },
    {
        "_name": "Gambit_KH7",
        "_deps": ["Corona_KH4B"]
    },
    {
        "_name": "Gambit3_KH8",
        "_deps": ["Gambit_KH7"]
    },
    {
        "_name": "Hexagon_KH9",
        "_deps": ["Gambit3_KH8"]
    },

    // MOL
    {
        "_name": "Gemini-MOL",
        "_deps": ["Hexagon_KH9"]
    },

    // P-11 Subsatellite
    {
        "_name": "P-11",
        "_deps": ["Hexagon_KH9"]
    },
    
    // STRAWMAN
    {
        "_name": "Strawman",
        "_deps": ["Gambit3_KH8"]
    },
    {
        "_name": "Strawman-4",
        "_deps": ["Strawman"]
    },
    
    // TIROS
    {
        "_name": "TIROS-Satellite",
        "_deps": ["Vanguard-2"]
    },

    // NIMBUS
    {
        "_name": "Nimbus-1",
        "_deps": ["TIROS-Satellite"]
    },
    {
        "_name": "Nimbus-2",
        "_deps": ["Nimbus-1"]
    },
    {
        "_name": "Nimbus-3",
        "_deps": ["Nimbus-2"]
    },
    {
        "_name": "Nimbus-4",
        "_deps": ["Nimbus-3"]
    },
    {
        "_name": "Nimbus-5",
        "_deps": ["Nimbus-4"]
    },
    {
        "_name": "Nimbus-6",
        "_deps": ["Nimbus-5"]
    },
    {
        "_name": "Nimbus-7",
        "_deps": ["Nimbus-6"]
    },

    // TRANSIT
    {
        "_name": "Transit-1A",
        "_deps": ["Vanguard-3"]
    },
    {
        "_name": "Transit-1B",
        "_deps": ["Transit-1A"]
    },
    {
        "_name": "Transit-2A",
        "_deps": ["Transit-1B"]
    },
    {
        "_name": "Transit-3A",
        "_deps": ["Transit-2A"]
    },
    {
        "_name": "Transit-3B",
        "_deps": ["Transit-3A"]
    },
    {
        "_name": "Transit-4A",
        "_deps": ["Transit-3B"]
    },
    {
        "_name": "Transit-5A missions",
        "_deps": ["Transit-4A"]
    },
    {
        "_name": "Transit-5BN",
        "_deps": ["Transit-5A missions"]
    },
    {
        "_name": "Transit-5C1",
        "_deps": ["Transit-5BN"]
    },
    {
        "_name": "Transit-O missions",
        "_deps": ["Transit-5C1"]
    },
    {
        "_name": "Transit-SOOS missions",
        "_deps": ["Transit-O missions"]
    },
    {
        "_name": "Poppy missions",
        "_deps": ["Vanguard-3"]
    },

    // SCORE
    {
        "_name": "SCORE",
        "_deps": ["Explorer-1"]
    },

    // OSCAR
    {
        "_name": "OSCAR",
        "_deps": ["Corona_KH1"]
    },

    // COURIER
    {
        "_name": "Courier-1A",
        "_deps": ["SCORE"]
    },
    {
        "_name": "Courier-1B",
        "_deps": ["Courier-1A"]
    },

    // SYNCOM
    {
        "_name": "Syncom missions",
        "_deps": ["Courier-1B"]
    },

    // RELAY
    {
        "_name": "Relay-1",
        "_deps": ["Courier-1A"]
    },
    {
        "_name": "Relay-2",
        "_deps": ["Relay-1"]
    },

    // TELSTAR
    {
        "_name": "Telstar-1",
        "_deps": ["Courier-1A"]
    },
    {
        "_name": "Telstar-2",
        "_deps": ["Telstar-1"]
    },

    // IDCSP
    {
        "_name": "IDCSP missions",
        "_deps": ["Syncom missions"]
    },

]