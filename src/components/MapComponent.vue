
<script>
import L from "leaflet";
import provinces from "../assets/limits_IT_provinces.geojson.json";
const colors = ["red", "blue", "black", "green"];
import AxiosService from "../utils/services";
import Analyzer from "../utils/analyze";
import analyze from "../utils/analyze";
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
    this.italia_layer = L.geoJSON(provinces);
    this.italia_layer.addTo(this.map);
    this.getData();
  },
  methods: {
    randomize: function () {
      this.italia_layer?.remove();
      this.italia_layer = L.geoJSON(provinces, {
        style: (feature) => {
          //  return {color: colors[Math.floor(Math.random()*colors.length)]}
          const item =
            this.map_json[
              feature.properties.prov_name.split(" ").join("").toLowerCase()
            ];
          const value = item?.Province2CellAvg;
          const avg = this.analyzer.provinceToCell.avg;
          const std = this.analyzer.provinceToCell.std_dev;
          if(value)
          return {
            color: value > avg ? (value > avg+std ? '#630606': '#890F0D') : (value > avg-std ? '#E83A14': '#D9CE3F')
          };
          else return {color: 'black'}
        },
        onEachFeature: (feature, myLayer) => {
          const prov_name = feature.properties.prov_name
          // const item =
          myLayer.bindPopup(prov_name+':\t '+this.map_json[prov_name.split(' ').join('').toLowerCase()]?.Province2CellAvg);
    }
      });
      this.italia_layer.addTo(this.map);
    },
    getData: function () {
      AxiosService.getData().then((data) => {
        this.prepareJson(data.data);
      });
    },
    prepareJson: function (data) {
      this.map_json = {};
      this.analyzer = new Analyzer(data);
      data.forEach((province) => {
        this.map_json[province.ProvinceName.split(" ").join("").toLowerCase()] = province;
      });
    },
  },
  data() {
    return {
      map: null,
      milano_center: [42, 16],
      italia_layer: undefined,
      layer_status: false,
      map_json: null,
      analyzer: null,
    };
  },
};
</script>


  <template>
  <div id="controls">
    <div>
      <div class="card shadow-lg mx-5">
        <div class="card-body" style="display: grid">
          <button class="btn btn-primary" @click="randomize">Randomize</button>
        </div>
      </div>
    </div>
  </div>
  <div id="map" class="map"></div>
</template>


<style scoped>
#controls {
  height: 15vh;
  padding: 7vh 0 0 0;
}
#map {
  height: 85vh;
}
</style>