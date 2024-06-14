import { APIProvider, Map, AdvancedMarker } from "@vis.gl/react-google-maps";

const mapContainerStyle = {
  width: "100%",
  height: "400px",
};

const center = {
  lat: 60.3616738,
  lng: 5.3612205,
};

const MapComponent = () => {
  return (
    <APIProvider apiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
      <Map
        style={mapContainerStyle}
        defaultCenter={center}
        defaultZoom={15}
        gestureHandling={"greedy"}
        disableDefaultUI={false}
        mapId={import.meta.env.VITE_GOOGLE_MAPS_MAP_ID}
      >
        <AdvancedMarker position={center}></AdvancedMarker>
      </Map>
    </APIProvider>
  );
};

export default MapComponent;
