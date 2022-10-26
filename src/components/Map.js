import React from "react";
import {
  GoogleMap,
  Marker,
  withScriptjs,
  withGoogleMap,
} from "react-google-maps";

const Map = withScriptjs(
  withGoogleMap(({ coordinates }) => (
    <GoogleMap
      defaultZoom={19}
      defaultCenter={{ lat: coordinates[0], lng: coordinates[1] }}
    >
      <Marker position={{ lat: coordinates[0], lng: coordinates[1] }} />
    </GoogleMap>
  ))
);

export default Map;
