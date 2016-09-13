module.exports = data => {
    if(!data) {
        return '';
    }
    const trackpoints = data.map(trkpt => `<trkpt lat="${trkpt.lat}" lon="${trkpt.long}"><time>${trkpt.time}</time></trkpt>`).join('');
    return `<trkseg>${trackpoints}</trkseg>`
};