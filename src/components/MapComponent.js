import React, { useState } from "react";

import {
    withScriptjs,
    withGoogleMap,
    GoogleMap,
    Marker,
    InfoWindow,
} from "react-google-maps";

//function to show google map

//wrapping Map with sevaral component to work properly

//main function
function MapComponent({ lat, lng }) {
    const WrappedMap = withScriptjs(
        withGoogleMap(function Map() {
            //hooks state for selectedMarker to dispaly detais when click the position
            const [selectedMarker, setSelectedMarker] = useState(null);
            return (
                <GoogleMap
                    defaultZoom={11}
                    defaultCenter={{ lat: lat, lng: lng }}
                >

                    <Marker

                        position={{
                            lat: lat,
                            lng: lng,
                        }}


                    />


                </GoogleMap>
            );
        })
    );
    return (
        <div style={{ width: "100%", height: "40vh" }}>
            <WrappedMap
                googleMapURL={`https://maps.googleapis.com/maps/api/js?key=AIzaSyDUO8QmBhQBfZOdlDT5xlG3mxLM_Y2jDMc&v=3.exp&libraries=geometry,drawing,places`}
                //set shown elements when map is loaded.
                loadingElement={<div style={{ height: "100%" }} />}
                containerElement={<div style={{ height: "100%" }} />}
                mapElement={<div style={{ height: "100%" }} />}
            />
        </div>
    );
}

export default MapComponent;
