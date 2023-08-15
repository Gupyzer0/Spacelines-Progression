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
        "_deps": ["Explorer-21"]
    },
    {
        "_name": "Explorer-27",
        "_deps": ["Explorer-22"]
    },
    {
        "_name": "Explorer-28",
        "_deps": ["Explorer-27"]
    },
    {
        "_name": "Explorer-30",
        "_deps": ["Explorer-28"]
    },
    {
        "_name": "Explorer-33",
        "_deps": ["Explorer-30"]
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
        "_deps": ["Gemini-XII"]
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
        "_name": "Lunar-Orbiter-1",
        "_deps": ["Surveyor-1"]
    },
    {
        "_name": "Lunar-Orbiter-2",
        "_deps": ["Lunar-Orbiter-1"]
    },
    {
        "_name": "Lunar-Orbiter-3",
        "_deps": ["Lunar-Orbiter-2"]
    },
    {
        "_name": "Lunar-Orbiter-4",
        "_deps": ["Lunar-Orbiter-3"]
    },
    {
        "_name": "Lunar-Orbiter-5",
        "_deps": ["Lunar-Orbiter-4"]
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
        "_deps": ["Mariner-5"]
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
        "_name": "Pegasus-1",
        "_deps": ["Little-Joe-II"]
    },
    {
        "_name": "Pegasus-2",
        "_deps": ["Pegasus-1"]
    },
    {
        "_name": "Pegasus-3",
        "_deps": ["Pegasus-2"]
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
        "_deps": ["Liberty-Bell-7"]
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
        "_deps": ["Faith-7"]
    },
    {
        "_name": "Gemini-IV",
        "_deps": ["Gemini-III"]
    },
    {
        "_name": "Gemini-V",
        "_deps": ["Gemini-IV"]
    },
    {
        "_name": "Gemini-VII",
        "_deps": ["Gemini-V"]
    },
    {
        "_name": "Gemini-VI-A",
        "_deps": ["Gemini-VII"]
    },
    {
        "_name": "Gemini-VIII-ATV",
        "_deps": ["Gemini-VI-A"]
    },
    {
        "_name": "Gemini-VIII",
        "_deps": ["Gemini-VIII-ATV"]
    },
    {
        "_name": "Gemini-IX-ATDA",
        "_deps": ["Gemini-VIII"]
    },
    {
        "_name": "Gemini-IX-A",
        "_deps": ["Gemini-IX-ATDA"]
    },
    {
        "_name": "Gemini-X-ATV",
        "_deps": ["Gemini-IX-A"]
    },
    {
        "_name": "Gemini-X",
        "_deps": ["Gemini-X-ATV"]
    },
    {
        "_name": "Gemini-XI-ATV",
        "_deps": ["Gemini-X"]
    },
    {
        "_name": "Gemini-XI",
        "_deps": ["Gemini-XI-ATV"]
    },
    {
        "_name": "Gemini-XII-ATV",
        "_deps": ["Gemini-XI"]
    },
    {
        "_name": "Gemini-XII",
        "_deps": ["Gemini-XII-ATV"]
    },

    // APOLLO PROGRAM
    {
        "_name": "Little-Joe-II",
        "_deps": ["Gemini-XII"]
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
        "_deps": ["Apollo-11","Surveyor-3"]
    },
    {
        "_name": "Apollo-13",
        "_deps": ["Apollo-12"]
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
        "_deps": ["Apollo-17"]
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
        "_deps": ["Skylab-4"]
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
    
    // STRAWMAN
    {
        "_name": "Strawman",
        "_deps": ["Gambit3_KH8"]
    },
    {
        "_name": "Strawman-4",
        "_deps": ["Strawman"]
    },
    
    
    
    
]