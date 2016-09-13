const trackFormatter = require('./track');
const trackSegmentFormatter = require('./track-segment');


module.exports = data => {
        const track = trackFormatter(data, trackSegmentFormatter);
        return `<gpx xmlns="http://www.topografix.com/GPX/1/1" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.topografix.com/GPX/1/1 http://www.topografix.com/GPX/1/1/gpx.xsd">${track}</gpx>`
    };