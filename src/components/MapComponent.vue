  <template>
  <div id="controls">
    <div>
      <div class="card shadow-lg mx-5">
        <div class="card-body" style="display: grid">
      <button class="btn btn-primary" @click="randomize">
        Randomize
      </button>
        </div>
      </div>
    </div>
  </div>
  <div id="map" class="map"></div>
</template>
<script>
import L from "leaflet";
import provinces from "../assets/limits_IT_provinces.geojson.json";
const colors = ['red', 'blue', 'black', 'green']
export default {
  mounted() {
    this.map = L.map("map").setView(this.milano_center, 6);
     L.tileLayer(
       "https://api.maptiler.com/maps/basic/{z}/{x}/{y}.png?key=LfyMKHonq3SlRENyb8u4",
       {
         attribution:
           '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>',
       }
     ).addTo(this.map);
     this.italia_layer = L.geoJSON(provinces, {
       style: feature => {
         return {color: colors[Math.floor(Math.random()*colors.length)]}
       }});
      this.italia_layer.addTo(this.map)
  },
  methods: {
    randomize: function() {
      this.italia_layer?.remove()
       this.italia_layer = L.geoJSON(provinces, {
       style: feature => {
         return {color: colors[Math.floor(Math.random()*colors.length)]}
       }});
      this.italia_layer.addTo(this.map)
    }
  },
  data() {
    return  {
      map: null,
      milano_center: [42, 16],
      italia_layer: undefined,
      layer_status: false,
    }
  }
};
</script>

<style scoped>
#controls {
  height: 15vh;
  padding: 7vh 0 0 0;
}
#map {
  height: 85vh;
}
</style>