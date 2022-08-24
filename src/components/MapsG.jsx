import React, { useState } from "react";
import { Map, Marker, GoogleApiWrapper, InfoWindow } from "google-maps-react";

const MapsG = (props) => {
  const [InfoWindow, setInfoWindow] = useState(false);
  const [activeMarker, setActiveMarker] = useState({});
  const [selectedPlace, setSelectedPlace] = useState({});

  const coords = { lat: -7.343146459561971, lng: 110.52763289782622 };

  let onMarkerClick = (props, marker, e) => {
    setSelectedPlace(props);
    setActiveMarker(marker);
    setInfoWindow(true);
  };

  let onMapClick = (props) => {
    if (InfoWindow) {
      setInfoWindow(false);
      setActiveMarker(null);
    }
  };

  const style = {
    height: "100%",
    width: "100%",
  };

  return (
    <div className="w-full  h-auto">
      <Map google={props.google} onClick={onMapClick} zoom={15} style={style} initialCenter={coords}>
        <Marker title={"Kanala Resto"} onClick={onMarkerClick} name={"Kanala Family Restourant"} position={coords} />

        <InfoWindow marker={activeMarker} visible={InfoWindow}>
          <div>
            <h1>{selectedPlace.name}</h1>
          </div>
        </InfoWindow>
      </Map>
    </div>
  );
};

export default GoogleApiWrapper({ apiKey: "AIzaSyBuF3xx3M-Em-Ly6utaJVUGy6kKEikXiDs" })(MapsG);
