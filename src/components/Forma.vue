<template>
  <div class="menu">
    <div class="row">
      <h3>Povrsina: {{povrsina}} km2</h3>
    </div>
    <br />
    <hr />
    <div class="row">
      <div class="col-4">Naziv:</div>
      <div class="col-8">
        <input type="text" class="form-control" v-model="koordinate.naziv" />
      </div>
    </div>
    <br />
    <div class="row">
      <div class="col-4">X koordinata:</div>
      <div class="col-8">
        <input type="text" class="form-control" v-model="koordinate.xKoordinata" />
      </div>
    </div>
    <br />
    <div class="row">
      <div class="col-4">Y koordinata:</div>
      <div class="col-8">
        <input type="text" class="form-control" v-model="koordinate.yKoordinata" />
      </div>
    </div>
    <br />
    <div class="row">
      <input type="button" class="form-control" value="Dodaj marker" @click="dodaj" />
        <br>

    </div>

    <hr />
    <ul style='overflow:scroll; padding:50px; height:200px;' class="form-control">
      <li v-for="i,index in lista" @click="removeMarker(index)" class="row">
          <div class="col-10">
              <label > {{i.lat.toFixed(3)}} - {{i.lng.toFixed(3)}} </label>
          </div>
          <div class="col-2">
              X
          </div>
        </li>
    </ul>
  </div>
</template>
<script>
export default {
  computed: {
    lista() {
      return this.$store.state.forma.markers;
    },
    povrsina() {
      var X = [];
      var Y = [];
      var numPoints = this.$store.state.forma.markers.length;
      this.$store.state.forma.markers.forEach(element => {
        X.push(element.lat);
        Y.push(element.lng);
      });
      var area = 0;
    var i;
      var j = numPoints - 1;
      for (i = 0; i < numPoints; i++) {
        area += (X[j] + X[i]) * (Y[j] - Y[i]);
        j = i;
      }
      return Math.abs(area / 2).toFixed(5);
    }
  },
  created(){
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(this.showPosition);
        }
  },
  methods: {
    dodaj() {
      this.$store.dispatch(
        "dodajMarker",
        L.latLng(this.koordinate.xKoordinata, this.koordinate.yKoordinata)
      );
    },
    showPosition(position){
        this.$store.dispatch('dodajTrenutniMarker',L.latLng(position.coords.latitude,position.coords.longitude));
    },
    removeMarker(index){
        this.$store.dispatch('obrisiMarker',index);
    }
  },
  data() {
    return {
      koordinate: {
        xKoordinata: "",
        yKoordinata: "",
        naziv: ""
      },
      pozicija:[]
    };
  }
};
</script>
<style scoped>
.menu {
  padding: 30px;
}
ul{
    list-style: none;
    scroll-behavior: auto;
}
li{
    width: 100%;
    height: 50px;
    background-color: cadetblue;
    margin-bottom: 20px;
    border-radius: 10px;
    text-align: center;
    padding: 10px;
    color: white;
}
</style>