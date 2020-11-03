<template>
  <v-app id="inspire">
    <NavigationDrawer />
    <v-main>
      <MainWindow />
    </v-main>
    <MainFooter />
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
//components
import MainFooter from "./views/Main-Footer.vue";
import MainWindow from "./views/Main-Window.vue";
import NavigationDrawer from "./views/Navigation-Drawer.vue";

@Component({
  name: "App",
  components: { MainFooter, MainWindow, NavigationDrawer }
})
export default class App extends Vue {}
</script>
