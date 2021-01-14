<template>
  <div>
    <v-container class="fill-height" fluid>
        <component v-bind:is="componentName">
        </component>
    </v-container>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import DataTable from "../components/Data-Table.vue";
import Clients from "../components/Clients.vue";
import Appointments from "../components/Appointments.vue";
import Users from "../components/Users.vue";

@Component({
  name: "MainWindow",
  components: { DataTable, Clients, Users, Appointments }
})
export default class MainWindow extends Vue {
  @Prop() private source!: string;
  @Prop() private componentName!: string;
  private drawer = false;

  get currentComponent () {
    return this.componentName;
  }
}
</script>
