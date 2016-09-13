module.exports = (track, trackSegmentFormatter) => {
    if(!track.name) {
        return '';
    }
    const tracksegment = trackSegmentFormatter(track.track);
    return `<trk><name>${track.name}</name>${tracksegment}</trk>`
};