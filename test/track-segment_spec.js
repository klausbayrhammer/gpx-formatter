import assert from 'assert';
import tracksegment from '../track-segment';

describe('render track segment', () => {
    it('should not format track segments without trackpoints', () => {
        const renderedSegment = tracksegment();
        assert.equal(renderedSegment, '');
    });
    it('should format track segments with a single trackpoint', () => {
        const renderedSegment = tracksegment([{lat: '47.644548', long:'-122.326897', time:'2009-10-17T18:37:26Z'}]);
        assert.equal(renderedSegment, '<trkseg><trkpt lat="47.644548" lon="-122.326897"><time>2009-10-17T18:37:26Z</time></trkpt></trkseg>');
    });
    it('should format track segments with multiple single trackpoints', () => {
        const renderedSegment = tracksegment([
            {lat: '47.644548', long:'-122.326897', time:'2009-10-17T18:37:31Z'},
            {lat:'47.644548', long:'-122.326897', time:'2009-10-17T18:37:34Z'}]);
        assert.equal(renderedSegment, '<trkseg><trkpt lat="47.644548" lon="-122.326897"><time>2009-10-17T18:37:31Z</time></trkpt><trkpt lat="47.644548" lon="-122.326897"><time>2009-10-17T18:37:34Z</time></trkpt></trkseg>');
    });
});