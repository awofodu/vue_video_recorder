import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import colors from 'vuetify/lib/util/colors'

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
            light: {
              primary: '#0DABD8',
              secondary: '#EBF2F6',
              accent: '#8c9eff',
              error: '#b71c1c',
              def_text: "#21455E",
              appbar_background: "red",
              appbar_menur_color: "#707070",
              toolbar_active: "#21455E",
              grey: "#63768E",
              red_button: "#EF5350",
              blue_button: "#0DABDB",
              table_content: "#A3BAC6",
              switch_color: "0AD688",
              live_rec_bg1: "#0DABD8",
              live_prev_bg: "#21455E",
              record_icon: "#EE5951",
              divider_color: "#A3BAC6",
              appbar_color: "#FFFFFF",
              adilo_bg: "#FBBD71",
              nav_drawer_active: "#E2E5ED",
              envelope: "#4EC5E7",
            },

            dark: {
                primary: colors.blue.lighten3, 
                background: "#EAFAFF", 
                
              },
        }
    }
});
