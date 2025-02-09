import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "500px",
};

const center = {
  lat: 0.5279384851455688,
  lng: 35.25893783569336,
};

const GoogleMapComponent = () => {
  return (
    <LoadScript googleMapsApiKey="AIzaSyCpOX8UeB706633Osm3KSkp3sbj5Y_s8dE">
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={14}>
        <Marker position={center} title="My location" />
      </GoogleMap>
    </LoadScript>
  );
};

export default GoogleMapComponent;
