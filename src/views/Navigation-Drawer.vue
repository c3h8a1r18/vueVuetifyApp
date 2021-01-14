<template>
  <div>
    <v-navigation-drawer v-model="drawer" app>
      <v-list dense>
        <v-list-item-group active-class="primary white--text">
          <v-list-item link @click="itemClicked('Home')">
            <v-list-item-action>
              <v-icon>mdi-home</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>Home</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item
            v-for="(item, index) in navigationItems"
            :key="index"
            @click="itemClicked(item.component)"
          >
            <v-list-item-content>
              <v-list-item-title v-text="item.value"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar app color="primary">
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Application</v-toolbar-title>
    </v-app-bar>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Emit } from "vue-property-decorator";

@Component({
  name: "NavigationDrawer",
  components: {}
})
export default class NavigationDrawer extends Vue {
  @Prop() private source!: string;
  private drawer = false;

  private navigationItems: Array<object> = [
    { id: 2, value: "Users", component: "Users" },
    { id: 1, value: "Clients", component: "Clients" },
    { id: 3, value: "Appointments", component: "Appointments" }
  ];
  @Emit("nav-clicked")
  itemClicked(componentName: string) {
    this.$router.push({ name: componentName });
    return componentName
  }
}
</script>
