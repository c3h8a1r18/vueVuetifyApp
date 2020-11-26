<template>
  <div id="DataTable">
    <v-card>
      <v-card-title>
        <v-text-field
          v-model="search"
          append-icon="mdi-magnify"
          label="Search"
          single-line
          hide-details
        ></v-text-field>
      </v-card-title>
      <v-data-table
        :headers="clientHeaders"
        :items="clients"
        :search="search"
      ></v-data-table>
    </v-card>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component({
  name: "DataTable",
  components: {}
})
export default class DataTable extends Vue {
  //props
  @Prop() private source!: string;
  //data
  private drawer = false;
  private search = "";

  private clientHeaders: Array<object> = [
    {
      text: "User Id",
      align: "start",
      filterable: false,
      value: "id"
    },
    { text: "First Name", value: "firstName" },
    { text: "LastName", value: "lastName" },
    { text: "Nationality", value: "nationality" },
    { text: "phoneNumber", value: "phoneNumber" }
  ];

  private clients: Array<object> = [
    {
      id: "001",
      firstName: "George",
      lastName: "Lazenby",
      nationality: "Ndolaralian",
      phoneNumber: "+260968292624"
    },
    {
      id: "002",
      firstName: "Roger",
      lastName: "Moore",
      nationality: "Kitwerian",
      phoneNumber: "+260950316967"
    },
    {
      id: "003",
      firstName: "Sean",
      lastName: "Connery",
      nationality: "Lusakarian",
      phoneNumber: "+260972591021"
    }
  ];
}
</script>
