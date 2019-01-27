import React from "react";
import L from 'leaflet';

import icon from '../images/icon.png';

import { Map, TileLayer, Marker, Popup } from 'react-leaflet';

const myIcon = L.icon({
    iconUrl: icon,
    iconSize: [40, 40]
})

export default function DirectorMap({ city, coordinates }) {
    const  position = [coordinates.lat, coordinates.lng];
    return (
        <Map style={{ height: "400px", width: "90%", margin: "0 auto" }} center={position} zoom={13}>
            <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
            />
            <Marker
                position={position}
                icon={myIcon}>
                <Popup>
                    {city}
                </Popup>
            </Marker>
        </Map>
    )
}