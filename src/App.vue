<template>
<div >
  <div class="row ">
      <div class="col-8 odeljak">
        <druga></druga>
      </div>
    <div class="col-3 odeljak">
      <forma></forma>
    </div>
    </div>
</div>
  
</template>

<script>
import L from "leaflet";
// import { LMap, LTileLayer, LMarker } from 'vue2-leaflet';
import Forma from './components/Forma';
import NovaMapa from './components/NovaMapa';
export default {
  components:{
    forma:Forma,
    druga:NovaMapa
  },
  data() {
    return {
    }
  },
};
</script>

<style>
.map {
  /* height: 600px; */
}
.odeljak{
  margin-top: 50px;
  border: 0.5px solid black;
  box-sizing: content-box;
  padding: 10px;
  margin-left: 20px;
  margin-bottom: 50px;
}
</style>
