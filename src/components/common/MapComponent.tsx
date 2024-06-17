import { APIProvider, Map, AdvancedMarker } from "@vis.gl/react-google-maps";

const mapContainerStyle = {
  width: "100%",
  height: "500px",
};

type centerCoordinates = {
  center: {
    lat: number;
    lng: number;
  };
};

const MapComponent: React.FC<centerCoordinates> = ({ center }) => {
  return (
    <h1>Dummy component</h1>
    /*
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
    */
  );
};

export default MapComponent;
