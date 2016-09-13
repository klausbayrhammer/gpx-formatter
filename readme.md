## Synopsis

This module will output correctly formatted gpx files

## Code Example

```js
import gpx from 'gpx'
const res = gpx({name:'Example GPX Document', track: [
    {lat:'47.644548', long:'-122.326897', time:'2009-10-17T18:37:26Z'},
    {lat:'47.644548', long:'-122.326897', time:'2009-10-17T18:37:31Z'},
    {lat:'47.644548', long:'-122.326897', time:'2009-10-17T18:37:34Z'}]});
assert.equal(res,
    `<gpx xmlns="http://www.topografix.com/GPX/1/1" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.topografix.com/GPX/1/1 http://www.topografix.com/GPX/1/1/gpx.xsd"><trk><name>Example GPX Document</name><trkseg><trkpt lat="47.644548" lon="-122.326897"><time>2009-10-17T18:37:26Z</time></trkpt><trkpt lat="47.644548" lon="-122.326897"><time>2009-10-17T18:37:31Z</time></trkpt><trkpt lat="47.644548" lon="-122.326897"><time>2009-10-17T18:37:34Z</time></trkpt></trkseg></trk></gpx>`)

```

## License

MIT