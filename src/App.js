import React, { Component } from 'react';

import MM from 'modestmaps';
import MMFollower from './follower-canvas';

class App extends Component {
    componentDidMount() {
        var layer = new MM.TemplatedLayer(
            'http://osm-bayarea.s3.amazonaws.com/{Z}-r{Y}-c{X}.jpg'
        );

        let map = new MM.Map('root', layer, new MM.Point(690, 360));
        MM.Follower = MMFollower(MM);
        let f = new MM.Follower(
            map,
            new MM.Location(37.81153, -122.2666097),
            'Broadway and Grand'
        );
        f = new MM.Follower(
            map,
            new MM.Location(37.80508, -122.27307),
            'Oakland'
        );
        map.setCenterZoom(new MM.Location(37.81153, -122.2666097), 14);
    }

    render() {
        return <div>Hello</div>;
    }
}

export default App;
