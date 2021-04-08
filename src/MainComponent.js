import React, { useEffect, useState } from "react";
import {
	withScriptjs,
	withGoogleMap,
	GoogleMap,
	Marker,
	InfoWindow,
} from "react-google-maps";
import { getArea, getCity} from "./functions";
import {getState} from "./functions";
import { GOOGLE_API_KEY } from "./requests";
import Geocode from "react-geocode";
Geocode.setApiKey(`${GOOGLE_API_KEY}`);

function MainComponent() {
	const [state, setState] = useState({
		address: "",
		city: "",
		area: "",
		zoom: 15,
		height: 400,
		mapPosition: {
			lat: 0,
			lng: 0,
		},
		markerPosition: {
			lat: 0,
			lng: 0,
		},
	});

	const getRegion = () => {};
	const onMarkerDragEnd = (event) => {
		let newLat = event.latLng.lat();
		let newLng = event.latLng.lng();

		Geocode.fromLatLng(newLat, newLng).then((response) => {
			const address = response.results[0].formatted_address;
			const addressArray = response.results[0].address_components;
			const city = getCity(addressArray);
			const area = getArea(addressArray);
			const region = getState(addressArray);
            alert(region)
		});
	};

	const MapWithAMarker = withScriptjs(
		withGoogleMap((props) => (
			<GoogleMap defaultZoom={8} defaultCenter={{ lat: -34.397, lng: 150.644 }}>
				<Marker
					draggable={true}
					onDragEnd={onMarkerDragEnd}
					position={{ lat: -34.397, lng: 150.644 }}>
					<InfoWindow>
						<div>Hey</div>
					</InfoWindow>
				</Marker>
			</GoogleMap>
		))
	);
	return (
		<div>
			<MapWithAMarker
				googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${GOOGLE_API_KEY}&v=3.exp&libraries=geometry,drawing,places`}
				loadingElement={<div style={{ height: `100%` }} />}
				containerElement={<div style={{ height: `400px` }} />}
				mapElement={<div style={{ height: `100%` }} />}
			/>
		</div>
	);
}

export default MainComponent;
