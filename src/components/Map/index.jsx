import React, { useEffect, useRef, useState } from "react";
import mapboxgl from "mapbox-gl";
import "./style.css";
import { HeaderConnect } from "../Header";
import { MapForm } from "./MapForm";
import { drawRoute } from "./MapDrawRoute";
import { MapOverlay } from "./MapOverlay";
import { useSelector } from "react-redux";
import { coordinatesSelector } from "../../reducers/route";

export default function Map(state) {
  const [map, setMap] = useState(null);
  const mapContainer = useRef(null);

  const coordinates = useSelector(coordinatesSelector);

  useEffect(() => {
    if (map) {
      try {
        drawRoute(map, coordinates);
      } catch (error) {
        console.log(error);
      }
    }
  },[coordinates]);


  useEffect(() => {
    mapboxgl.accessToken =
      "pk.eyJ1Ijoibm92YWxpazg2IiwiYSI6ImNsYXp0cWM4MTFjY24zcWxpOHdzaWluZWYifQ.MRFMmRcdwZsIlVmeu5ba4A";
    const map = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v12",
      center: [37.60345458984374, 55.695776911386126],
      zoom: 10,
    });
    setMap(map);

    return () => {
      map.remove();
    };
  }, []);

  return (
    <>
      <HeaderConnect />
      <div className="map-wrapper">
        <div data-testid="map" className="map-app" ref={mapContainer}></div>
        <MapForm />
        <MapOverlay />
      </div>
    </>
  );
}
