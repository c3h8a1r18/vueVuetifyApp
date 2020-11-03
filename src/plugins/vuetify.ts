import Vue from "vue";
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";
import "@mdi/font/css/materialdesignicons.css";

Vue.use(Vuetify);

const options = {
  theme: {
    themes: {
      light: {
        primary: "#607d8b",
        secondary: "#00bcd4",
        accent: " #673ab7",
        error: "#f44336",
        warning: "#ffc107",
        info: "#cddc39",
        success: "#4caf50"
      },
      icons: {
        iconfont: "mdi"
      }
    }
  }
};

export default new Vuetify(options);
