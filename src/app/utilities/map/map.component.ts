import { Component, OnInit } from '@angular/core';
import {
  tileLayer,
  latLng,
  LeafletMouseEvent,
  Marker,
  marker,
  icon,
} from 'leaflet';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
})
export class MapComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  options = {
    layers: [
      tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 14,
        attribution: 'Vidly',
      }),
    ],
    zoom: 18,
    center: latLng(14.6321214355163, 121.05038449633876),
  };

  markerIcon = icon({
    iconSize: [ 25, 41 ],
    iconAnchor: [ 13, 41 ],
    iconUrl: 'marker-icon.png'
  });

  layers: Marker<any>[] = [];

  handleMapClick(event: LeafletMouseEvent) {
    const latitute = event.latlng.lat;
    const longitude = event.latlng.lng;
    this.layers = [];
    this.layers.push(marker([latitute, longitude], { icon: this.markerIcon }));
  }
}
