'use client';

import { useEffect } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const Map: React.FC = () => {
  useEffect(() => {
    const map = L.map('map').setView([-11.8576, -37.7952], 16);

    // OpenStreetMap (Simples e gratuito)
    L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
      attribution: '&copy; <a href="https://www.esri.com">ESRI</a> contributors',
      maxZoom: 19,
    }).addTo(map);
    
    // CartoDB Voyager (Mais vibrante)
    // L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
    //   attribution: '&copy; OpenStreetMap contributors &copy; <a href="https://carto.com/">CARTO</a>',
    //   subdomains: 'abcd',
    //   maxZoom: 19,
    // }).addTo(map);

    // Stamen Terrain (Topográfico)
    // L.tileLayer('https://stamen-tiles.a.ssl.fastly.net/terrain/{z}/{x}/{y}.jpg', {
    //   attribution: 'Map tiles by <a href="https://stamen.com">Stamen Design</a>, <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    //   maxZoom: 18,
    // }).addTo(map);

    return () => {
      map.remove();
    };
  }, []);

  return (
    <div
      id="map"
      style={{
        width: '100%',
        height: '500px',
        zIndex: '1',
      }}
    />
  );
};

export default Map;
