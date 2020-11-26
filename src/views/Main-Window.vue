<template>
  <div>
    <v-container class="fill-height" fluid>
      <DataTable />
    </v-container>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import DataTable from "../components/Data-Table.vue";

@Component({
  name: "MainWindow",
  components: { DataTable }
})
export default class MainWindow extends Vue {
  @Prop() private source!: string;
  private drawer = false;
}
</script>
