import Vue from "vue";
import Vuetify from "vuetify/lib";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    light: true,
    themes: {
      light: {
        primary: "#000000",
        secondary: "#ffffff",
        accent: "#009688",
        error: "#e91e63",
        warning: "#ff9800",
        info: "#009688",
        success: "#4caf50",
      },
    },
  },
});
