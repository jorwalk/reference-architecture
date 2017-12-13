import * as React from 'react';

import ReactMapboxGl, { Layer } from "react-mapbox-gl";


const config = {
  "token": "pk.eyJ1Ijoiam9yZGFud2Fsa2VyIiwiYSI6ImNpb2Q4YjNrbjA0aGh2Z2txc2V4c2RsYnUifQ.v3q_DsYnHTPVICPHaTWy5Q",
  "styles": {
    "satellite": "mapbox://styles/mapbox/satellite-v9",
    "light": "mapbox://styles/mapbox/light-v9",
    "dark": "mapbox://styles/mapbox/dark-v9",
    "basic": "mapbox://styles/mapbox/basic-v9",
    "outdoor": "mapbox://styles/mapbox/outdoors-v10",
    "bright": "mapbox://styles/mapbox/bright-v9",
    "street" : "mapbox://styles/mapbox/streets-v9",

  }
};

const Map = ReactMapboxGl({ accessToken: config.token });


const paintLayer = {
  'fill-extrusion-color': '#aaa',
  'fill-extrusion-height': {
    type: 'identity',
    property: 'height'
  },
  'fill-extrusion-base': {
    type: 'identity',
    property: 'min_height'
  },
  'fill-extrusion-opacity': 0.7
};

export interface Props {
  onStyleLoad?: (map: any) => any;
}

class ThreeDMap extends React.Component {
  render() {
    const zoom = [15];
    const bearing = [-90];
    const pitch = [60];
    const center = [-90.199402, 38.627003];
    const onStyleLoad = (map) => {
      const { onStyleLoad } = this.props;
      return onStyleLoad && onStyleLoad(map);
    };

    return (
      <Map
        style= {config.styles.street}
        containerStyle={{
          height: "100vh",
          width: "100vw"
        }}
        onStyleLoad={onStyleLoad}
        zoom={zoom}
        center={center}
        pitch={pitch}
        bearing={bearing}
      >
        <Layer
          id="3d-buildings"
          sourceId="composite"
          sourceLayer="building"
          filter={['==', 'extrude', 'true']}
          type="fill-extrusion"
          minZoom={14}
          paint={paintLayer}
        />
      </Map>
    );
  }
}

export default ThreeDMap;
