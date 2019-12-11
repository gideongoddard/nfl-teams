var map;

function initMap() {
    // AFC EAST
    let bills = {lat: 42.774, lng: -78.787};
    let dolphins = {lat: 25.958, lng: -80.239};
    let patriots = {lat: 42.091, lng: -71.264};
    let jets = {lat: 40.814, lng: -74.074};
    // AFC NORTH
    let ravens = {lat: 39.278, lng: -76.623};
    let bengals = {lat: 39.095, lng: -84.516};
    let browns = {lat: 41.506, lng: -81.699};
    let steelers = {lat: 40.447, lng: -80.016};
    // AFC SOUTH
    let texans = {lat: 29.685, lng: -95.411};
    let colts = {lat: 39.760, lng: -86.164};
    let jaguars = {lat: 30.324, lng: -81.638};
    let titans = {lat: 36.166, lng: -86.771};
    // AFC WEST
    let broncos = {lat: 39.744, lng: -105.020};
    let chiefs = {lat: 39.049, lng: -94.484};
    let chargers = {lat: 33.864, lng: -118.261};
    let raiders = {lat: 37.752, lng: -122.201};
    // NFC EAST
    let cowboys = {lat: 32.748, lng: -97.093};
    let giants = {lat: 40.814, lng: -74.074};
    let eagles = {lat: 39.901, lng: -75.168};
    let redskins = {lat: 38.908, lng: -76.864};
    // NFC NORTH
    let bears = {lat: 41.863, lng: -87.617};
    let lions = {lat: 42.340, lng: -83.046};
    let packers = {lat: 44.501, lng: -88.062};
    let vikings = {lat: 44.974, lng: -93.258};
    // NFC SOUTH
    let falcons = {lat: 33.755, lng: -84.401};
    let panthers = {lat: 35.226, lng: -80.853};
    let saints = {lat: 29.951, lng: -90.081};
    let buccaneers = {lat: 27.976, lng: -82.503};
    // NFC WEST
    let cardinals = {lat: 33.528, lng: -112.263};
    let rams = {lat: 34.014, lng: -118.288};
    let sf49ers = {lat: 37.403, lng: -121.970};
    let seahawks = {lat: 47.595, lng: -122.332};
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 37.275881, lng: -104.6530552}, zoom: 5
    });
    // AFC EAST
    let markBills = new google.maps.Marker({position: bills, title: 'Buffalo Bills', map: map});
    let markDolphins = new google.maps.Marker({position: dolphins, title: 'Miami Dolphins', map: map});
    let markPatriots = new google.maps.Marker({position: patriots, title: 'New England Patriots', map: map});
    let markJets = new google.maps.Marker({position: jets, title: 'New York Jets', map: map});
    // AFC NORTH
    let markRavens = new google.maps.Marker({position: ravens, title: 'Baltimore Ravens', map: map});
    let markBengals = new google.maps.Marker({position: bengals, title: 'Cincinnati Bengals', map: map});
    let markBrowns = new google.maps.Marker({position: browns, title: 'Cleveland Browns', map: map});
    let markSteelers = new google.maps.Marker({position: steelers, title: 'Pittsburgh Steelers', map: map});
    // AFC SOUTH
    let markTexans = new google.maps.Marker({position: texans, title: 'Houston Texans', map: map});
    let markColts = new google.maps.Marker({position: colts, title: 'Indianapolis Colts', map: map});
    let markJaguars = new google.maps.Marker({position: jaguars, title: 'Jacksonville Jaguars', map: map});
    let markTitans = new google.maps.Marker({position: titans, title: 'Tennessee Titans', map: map});
    // AFC WEST
    let markBroncos = new google.maps.Marker({position: broncos, title: 'Denver Broncos', map: map});
    let markChiefs = new google.maps.Marker({position: chiefs, title: 'Kansas City Chiefs', map: map});
    let markChargers = new google.maps.Marker({position: chargers, title: 'Los Angeles Chargers', map: map});
    let markRaiders = new google.maps.Marker({position: raiders, title: 'Oakland Raiders', map: map});
    // NFC EAST
    let markCowboys = new google.maps.Marker({position: cowboys, title: 'Dallas Cowboys', map: map});
    let markGiants = new google.maps.Marker({position: giants, title: 'New York Giants', map: map});
    let markEagles = new google.maps.Marker({position: eagles, title: 'Philadelphia Eagles', map: map});
    let markRedskins = new google.maps.Marker({position: redskins, title: 'Washington Redskins', map: map});
    // NFC NORTH
    let markBears = new google.maps.Marker({position: bears, title: 'Chicago Bears', map: map});
    let markLions = new google.maps.Marker({position: lions, title: 'Detroit Lions', map: map});
    let markPackers = new google.maps.Marker({position: packers, title: 'Green Bay Packers', map: map});
    let markVikings = new google.maps.Marker({position: vikings, title: 'Minnesota Vikings', map: map});
    // NFC SOUTH
    let markFalcons = new google.maps.Marker({position: falcons, title: 'Atlanta Falcons', map: map});
    let markPanthers = new google.maps.Marker({position: panthers, title: 'Carolina Panthers', map: map});
    let markSaints = new google.maps.Marker({position: saints, title: 'New Orleans Saints', map: map});
    let markBuccaneers = new google.maps.Marker({position: buccaneers, title: 'Tampa Bay Buccaneers', map: map});
    // NFC WEST
    let markCardinals = new google.maps.Marker({position: cardinals, title: 'Arizona Cardinals', map: map});
    let markRams = new google.maps.Marker({position: rams, title: 'Los Angeles Rams', map: map});
    let markSf49ers = new google.maps.Marker({position: sf49ers, title: 'San Francisco 49ers', map: map});
    let markSeahawks = new google.maps.Marker({position: seahawks, title: 'Seattle Seahawks', map: map});

    // AFC EAST
    let infoBills = new google.maps.InfoWindow({
        content: '<h3>Buffalo Bills</h3><p><strong>Division: </strong>AFC East</p><p><strong>Stadium: </strong>New Era Field</p>'
    });
    let infoDolphins = new google.maps.InfoWindow({
        content: '<h3>Miami Dolphins</h3><p><strong>Division: </strong>AFC East</p><p><strong>Stadium: </strong>Hard Rock Stadium</p>'
    });
    let infoPatriots = new google.maps.InfoWindow({
        content: '<h3>New England Patriots</h3><p><strong>Division: </strong>AFC East</p><p><strong>Stadium: Gillette Stadium</strong></p>'
    });
    let infoJets = new google.maps.InfoWindow({
        content: '<h3>New York Jets</h3><p><strong>Division: </strong>AFC East</p><p><strong>Stadium: </strong>MetLife Stadium</p>'
    });
    // AFC NORTH
    // ...
    let infoSeahawks = new google.maps.InfoWindow({
        content: '<h3>Seattle Seahawks</h3><p><strong>Division: </strong>NFC West</p><p><strong>Stadium: </strong>CenturyLink Field</p>'
    });
    let infoPackers = new google.maps.InfoWindow({
        content: '<h3>Green Bay Packers</h3><p><strong>Division: </strong>NFC North</p><p><strong>Stadium: </strong>Lambeau Field</p>'
    });
    
    // AFC EAST
    markBills.addListener('click', function() {
        infoBills.open(map, markBills);
    })
    markDolphins.addListener('click', function() {
        infoDolphins.open(map, markDolphins);
    })
    markPatriots.addListener('click', function() {
        infoPatriots.open(map, markPatriots);
    })
    markJets.addListener('click', function() {
        infoJets.open(map, markJets);
    })
    // ...
    markSeahawks.addListener('click', function() {
        infoSeahawks.open(map, markSeahawks);
    })
    markPackers.addListener('click', function() {
        infoPackers.open(map, markPackers);
    })
}