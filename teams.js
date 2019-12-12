function initMap() {
    let map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 38.75, lng: -97.50}, zoom: 5
    });

    let teams = [
        // AFC EAST
        {
            name: 'Bufallo Bills',
            division: 'AFC East',
            location: {
                lat: 42.774,
                lng: -78.787
            },
            stadium: 'New Era Field',
        },
        {
            name: 'Miami Dolphins',
            division: 'AFC East',
            location: {
                lat: 25.958,
                lng: -80.239
            },
            stadium: 'Hard Rock Stadium',
        },
        {
            name: 'New England Patriots',
            division: 'AFC East',
            location: {
                lat: 42.091,
                lng: -71.264
            },
            stadium: 'Gillette Stadium',
        },
        {
            name: 'New York Jets',
            division: 'AFC East',
            location: {
                lat: 40.814,
                lng: -74.074
            },
            stadium: 'MetLife Stadium',
        },
        // AFC NORTH
        {
            name: 'Baltimore Ravens',
            division: 'AFC North',
            location: {
                lat: 39.278,
                lng: -76.623
            },
            stadium: 'M&T Bank Stadium',
        },
        {
            name: 'Cincinnati Bengals',
            division: 'AFC North',
            location: {
                lat: 39.095,
                lng: -84.516
            },
            stadium: 'Paul Brown Stadium',
        },
        {
            name: 'Cleveland Browns',
            division: 'AFC North',
            location: {
                lat: 41.506,
                lng: -81.699
            },
            stadium: 'FirstEnergy Stadium',
        },
        {
            name: 'Pittsburgh Steelers',
            division: 'AFC North',
            location: {
                lat: 40.447,
                lng: -80.016
            },
            stadium: 'Heinz Field',
        },
        // AFC SOUTH
        {
            name: 'Houston Texans',
            division: 'AFC South',
            location: {
                lat: 29.685,
                lng: -95.411
            },
            stadium: 'NRG Stadium',
        },
        {
            name: 'Indianapolis Colts',
            division: 'AFC South',
            location: {
                lat: 39.760,
                lng: -86.164
            },
            stadium: 'Lucas Oil Stadium',
        },
        {
            name: 'Jacksonville Jaguars',
            division: 'AFC South',
            location: {
                lat: 30.324,
                lng: -81.638
            },
            stadium: 'TIAA Bank Field',
        },
        {
            name: 'Tennessee Titans',
            division: 'AFC South',
            location: {
                lat: 36.166,
                lng: -86.771
            },
            stadium: 'Nissan Stadium',
        },
        // AFC WEST
        {
            name: 'Denver Broncos',
            division: 'AFC West',
            location: {
                lat: 39.744,
                lng: -105.020
            },
            stadium: 'Empower Field at Mile High',
        },
        {
            name: 'Kansas City Chiefs',
            division: 'AFC West',
            location: {
                lat: 39.049,
                lng: -94.484
            },
            stadium: 'Arrowhead Stadium',
        },
        {
            name: 'Los Angeles Chargers',
            division: 'AFC West',
            location: {
                lat: 33.864,
                lng: -118.261
            },
            stadium: 'Dignity Health Sports Park',
        },
        {
            name: 'Oakland Raiders',
            division: 'AFC West',
            location: {
                lat: 37.752,
                lng: -122.201
            },
            stadium: 'Ring Central Coliseum',
        },
        // NFC EAST
        {
            name: 'Dallas Cowboys',
            division: 'NFC East',
            location: {
                lat: 32.748,
                lng: -97.093
            },
            stadium: 'AT&T Stadium',
        },
        {
            name: 'New York Giants',
            division: 'NFC East',
            location: {
                lat: 40.814,
                lng: -74.074
            },
            stadium: 'MetLife Stadium',
        },
        {
            name: 'Philadelphia Eagles',
            division: 'NFC East',
            location: {
                lat: 39.901,
                lng: -75.168
            },
            stadium: 'Lincoln Financial Field',
        },
        {
            name: 'Washington Redskins',
            division: 'NFC East',
            location: {
                lat: 38.908,
                lng: -76.864
            },
            stadium: 'FedExField',
        },
        // NFC NORTH
        {
            name: 'Chicago Bears',
            division: 'NFC North',
            location: {
                lat: 41.863,
                lng: -87.617
            },
            stadium: 'Soldier Field',
        },
        {
            name: 'Detroit Lions',
            division: 'NFC North',
            location: {
                lat: 42.340,
                lng: -83.046
            },
            stadium: 'Ford Field',
        },
        {
            name: 'Green Bay Packers',
            division: 'NFC North',
            location: {
                lat: 44.501,
                lng: -88.062
            },
            stadium: 'Lambeau Field',
        },
        {
            name: 'Minnesota Vikings',
            division: 'NFC North',
            location: {
                lat: 44.974,
                lng: -93.258
            },
            stadium: 'U.S. Bank Stadium',
        },
        // NFC SOUTH
        {
            name: 'Atlanta Falcons',
            division: 'NFC South',
            location: {
                lat: 33.755,
                lng: -84.401
            },
            stadium: 'Mercedes-Benz Stadium',
        },
        {
            name: 'Carolina Panthers',
            division: 'NFC South',
            location: {
                lat: 35.226,
                lng: -80.853
            },
            stadium: 'Bank of America Stadium',
        },
        {
            name: 'New Orleans Saints',
            division: 'NFC South',
            location: {
                lat: 29.951,
                lng: -90.081
            },
            stadium: 'Mercedes-Benz Superdome',
        },
        {
            name: 'Tampa Bay Buccaneers',
            division: 'NFC South',
            location: {
                lat: 27.976,
                lng: -82.503
            },
            stadium: 'Raymond James Stadium',
        },
        // NFC WEST
        {
            name: 'Arizona Cardinals',
            division: 'NFC West',
            location: {
                lat: 33.528,
                lng: -112.263
            },
            stadium: 'State Farm Stadium',
        },
        {
            name: 'Los Angele Rams',
            division: 'NFC West',
            location: {
                lat: 34.014,
                lng: -118.288
            },
            stadium: 'Los Angeles Memorial Coliseum',
        },
        {
            name: 'San Francisco 49ers',
            division: 'NFC West',
            location: {
                lat: 37.403,
                lng: -121.970
            },
            stadium: "Levi's Stadium",
        },
        {
            name: 'Seattle Seahawks',
            division: 'NFC West',
            location: {
                lat: 47.595,
                lng: -122.332
            },
            stadium: 'CenturyLink Field',
        },
    ];

    let labels = [];
    for (let i = 0; i < teams.length; i++) {
        labels.push(teams[i].name);
    };

    let locations = [];
    for (let i=0; i < teams.length; i++) {
        locations.push(teams[i].location);
    };

    let stadia = [];
    for (let i=0; i < teams.length; i++) {
        stadia.push(teams[i].stadium);
    };

    let divisions = [];
    for (let i=0; i < teams.length; i++) {
        divisions.push(teams[i].division);
    };

    let markers = locations.map(function(location, i) {
        return new google.maps.Marker({
            position: location,
            title: labels[i],
            map: map
        });
    });

    let infoWindows = labels.map(function(label, i) {
        return new google.maps.InfoWindow({
            content: '<h3>' + label + '</h3><p><strong>Division: </strong>' + divisions[i] + '</p><p><strong>Stadium: </strong>' + stadia[i] + '</p>'
        });
    });

    for (let i=0; i < teams.length; i++) {
        markers[i].addListener('click', function() {
            infoWindows[i].open(map, markers[i]);
        })
    }
}