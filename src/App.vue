<script>
import NotFound from "./components/NotFound.vue";
import Hello from "./components/Hello.vue";
import MapComponent from './components/MapComponent.vue';
const routes = {
  "/": Hello,
  "/map": MapComponent
};
export default {
  data() {
    return {
      currentPath: window.location.hash,
    };
  },
  computed: {
    currentView() {
      return routes[this.currentPath.slice(1) || "/"] || NotFound;
    },
  },
  mounted() {
    window.addEventListener("hashchange", () => {
      this.currentPath = window.location.hash;
    });
  },
};
</script>

<template id="page-top">
  <nav
    class="navbar navbar-expand-lg navbar-light fixed-top shadow-sm"
    id="mainNav"
  >
    <div class="container">
      <a class="navbar-brand fw-bold" href="/">Map Visualization Services</a>
      <div id="navbarResponsive">
        <ul class="navbar-nav my-3 my-lg-0">
          <li class="nav-item">
            <a class="nav-link" href="/">Features</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#/map">Download</a>
          </li>
        </ul>
        
      </div>
    </div>
  </nav>
  <component :is="currentView" />
</template>

<style>
@import url("./assets/styles.css");
.nav {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  box-shadow: 2em;
}
i {
  font-size: 5em;
}
</style>
