<template>
  <div>
    <l-map :zoom="zoom" :center="center" @click="addMarker" class="map">
      <l-tile-layer :url="url" :attribution="attribution"></l-tile-layer>
      <l-marker v-for="pocetna, index in pocetna" :lat-lng="pocetna" :icon="iconTrenutna" :visible="true"></l-marker>
      <l-marker v-for="marker, index in markers" :lat-lng="marker" @click="removeMarker(index)" :icon="iconOstali"></l-marker>
      <l-polygon :lat-lngs="coordinates"></l-polygon>
    </l-map>
  </div>
</template>
<script>
import { LMap, LTileLayer, LMarker, LPolygon } from "vue2-leaflet";
export default {
  components: {
    LMap,
    LTileLayer,
    LMarker,
    LPolygon
  },
  data() {
    return {
      zoom: 9,
      iconTrenutna: L.icon({
        iconUrl: "src/assets/trenutnaIcon.png",
        shadowUrl: '',
        iconSize: [38, 40],
      }),
      iconOstali: L.icon({
        iconUrl: "src/assets/markerIcon.png",
        shadowUrl: '',
        iconSize: [38, 40],
      }),
      center: L.latLng(44.412, 20.218),
      suppressMarkers: true,
      url: "http://{s}.tile.osm.org/{z}/{x}/{y}.png",
      attribution:
        '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    };
  },
  computed: {
    markers() {
      return this.$store.state.forma.markers;
    },
    coordinates() {
      return this.$store.state.forma.coordinates;
    },
    pocetna() {
      return this.$store.state.forma.pocetna;
    }
  },
  methods: {
    removeMarker(index) {
      this.$store.dispatch("obrisiMarker", index);
    },
    addMarker(event) {
      this.$store.dispatch("dodajMarker", event.latlng);
    }
  }
};
</script>
<style scoped>
.map {
  height: 600px;
}
.trenutnaLokacija {
  background-image: url("../assets/logo.png");
}
</style>