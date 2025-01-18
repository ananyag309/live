'use client';
import 'leaflet/dist/leaflet.css'
import dynamic from 'next/dynamic'

//import { MapContainer, TileLayer } from 'react-leaflet';

const MapContainer = dynamic(() => import('react-leaflet').then((mod) => mod.MapContainer), {ssr:false}); 
const TileLayer = dynamic(() => import('react-leaflet').then((mod) => mod.TileLayer), {ssr:false});
  
export default function Maps(){
  return (
    <MapContainer
      center={[28.474388, 77.503990]}
      zoom={13}
      style={{height:'50vh'}}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
    </MapContainer>
  )

}
