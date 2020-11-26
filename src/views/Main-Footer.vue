<template>
  <div>
    <v-footer color="primary" app class="d-flex justify-center">
      <span class="white--text"
        >&copy; Charles Tombo {{ new Date().getFullYear() }}</span
      >
    </v-footer>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component({
  name: "MainFooter",
  components: {}
})
export default class MainFooter extends Vue {
  @Prop() private source!: string;
  private drawer = false;
}
</script>
