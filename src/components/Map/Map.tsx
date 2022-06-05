import React, {useContext, useEffect, useState} from "react";
import "./Map.css"
import {MapContainer, Marker, Popup, TileLayer} from "react-leaflet";
import'leaflet/dist/leaflet.css';
import '../../utils/fix-map-icon';
import {SearchContext} from "../../contexts/search.context";
import {SimpleAdEntity} from 'types';
import {SingleAd} from "./SingleAd";

export const Map = ()=> {
  const {search} = useContext(SearchContext);
  const [ads, setAds] = useState<SimpleAdEntity[]>([])

  useEffect(()=> {
    (async ()=> {
      const res = await fetch(`http://localhost:3001/ad/search/${search}`);
      const data = await res.json();
      setAds(data);
    })()
  }, [search])

  return (
    <div className="map">
      <p>Wyniki dla: {search}</p>
      <MapContainer center={[51.742349, 19.284055]} zoom={7} >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="https://www.openstreetmap.org/copyright"
        />
        {
          ads.map(ad => (
            <Marker key={ad.id} position={[ad.lat, ad.lon]}>
              <Popup>
                <SingleAd id={ad.id}/>
              </Popup>
            </Marker>
          ))
        }
      </MapContainer>
    </div>
  )
}
