import * as React from "react";
import Map, { FullscreenControl, GeolocateControl, Marker, NavigationControl } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import mapboxgl from "mapbox-gl";
import { Box } from "@mui/material";

function MapBox() {
  const markerRef = React.useRef();
  const popup = React.useMemo(() => {
    return new mapboxgl.Popup().setHTML(
      "<h2>Salom Toshkent</h2><h2>Salom Toshkent</h2><h2>Salom Toshkent</h2>"
    );
  }, []);
  return (
    <Map
      mapboxAccessToken="pk.eyJ1IjoiZGF2cm9uOTciLCJhIjoiY2xrNmN6dTNmMDBjYzNpcGpid3B3MjM5MSJ9.LJ58oEgk4xh8GFyZk1P0hg"
      initialViewState={{
        longitude: 69.365876,
        latitude: 41.375559,
        zoom: 9,
      }}
      projection={"globe"}
      style={{ width: "100%", height: "100%", borderRadius: "5px" }}
      mapStyle="mapbox://styles/davron97/clk6dze4g00ha01pfavguegn9"
    >
      <Box>
        <GeolocateControl
          position="bottom-right"/>
        <FullscreenControl
          position="bottom-right"/>
        <NavigationControl
          position="bottom-right"/>
      </Box>
      <Marker
        longitude={69.365876}
        latitude={41.375559}
        anchor="bottom"
        style={{ cursor: "pointer" }}
        popup={popup}
        ref={markerRef}
        color="#0072BB"
      ></Marker>
    </Map>
  );
}

export default MapBox;
