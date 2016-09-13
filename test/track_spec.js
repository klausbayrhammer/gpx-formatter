const assert = require('assert');
const track = require('../track');

describe('render track', () => {
    const trackSegmentFormatter = data => data ? '<trkseg></trkseg>' : '';

    it('should not format tracks without trackpoints and name', () => {
        const renderedSegment = track({}, trackSegmentFormatter);
        assert.equal(renderedSegment, '');
    });
    it('should render track segments with name and without track points', () => {
        const renderedSegment = track({name:'my track'}, trackSegmentFormatter);
        assert.equal(renderedSegment, '<trk><name>my track</name></trk>');
    });

    it('should render track segments with a single track point', () => {
        const renderedSegment = track({name:'my track', track: []}, trackSegmentFormatter);
        assert.equal(renderedSegment, '<trk><name>my track</name><trkseg></trkseg></trk>');
    })
});