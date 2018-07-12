<template>
  <div>
    <div id="map" style="height: 100vh;"></div>
  </div>
</template>

<script>
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// L.Icon.Default.imagePath = '.';
// OR
// 修正图标引用
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

// console.log(leaflet);
export default {
  mounted() {
    var map = L.map('map').setView([23.2, 113.2], 13);
   	L.tileLayer(
   		// 'http://{s}.tile.osm.org/{z}/{x}/{y}.png'
       'http://mt2.google.cn/vt/x={x}&y={y}&z={z}'
      //  'http://localhost:8010/{z}/{x}/{y}.png'
   	, {
   	// attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
   	}).addTo(map);
   	L.marker([23.2, 113.2]).addTo(map)
      .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
      .openPopup();
  }
}
</script>

