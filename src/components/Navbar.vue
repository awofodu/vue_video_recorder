<template>
  <nav class="pa-0">
      <v-app-bar
              dense
              flat clipped-left
              color="appbar_color accent-4" app
      >
          <v-container class="ml-5">
            <v-row align="center">
              <router-link to="/" class="navbar_logo_link">
                <v-app-bar-title class="pr-3 company_name">
                  <v-avatar rounded="lg" height="30" class="mr-2">
                    <v-img src="/images/logo.png" max-width="33"></v-img>
                  </v-avatar>
                    Adilo
                </v-app-bar-title>
              </router-link>

              <v-spacer class="mr-15 d-none d-sm-flex"></v-spacer>

              <div class="d-none d-sm-flex">
                  <v-btn plain small class="text-none mr-3 appbar_menur_color--text">Projects</v-btn>
                  <!--<v-btn outlined small class="text-none toolbar_active--text mr-3 font-weight-bold navbar_link_active">
                  Tools & App</v-btn> -->
                  <v-menu transition="slide-y-transition">
                    <template v-slot:activator="{ on, attrs }">
                      <v-btn
                        outlined small
                        class="text-none toolbar_active--text mr-3 font-weight-bold navbar_link_active mr-3"
                        v-bind="attrs"
                        v-on="on"
                      >
                        Tools & App
                      </v-btn>
                    </template>
                    <v-list>
                      <v-list-item link>
                        <v-list-item-title><h6 class="font-weight-light">Snapbyte Recorder</h6></v-list-item-title>
                      </v-list-item>
                      <v-divider/>
                      <v-list-item link>
                        <v-list-item-title><h6 class="font-weight-light">Audio Bounce</h6></v-list-item-title>
                      </v-list-item>
                      <v-divider/>
                      <v-list-item link>
                        <v-list-item-title><h6 class="font-weight-light">Sugar Voice</h6></v-list-item-title>
                      </v-list-item>
                    </v-list>
                  </v-menu>
                  <v-btn plain small class="text-none mr-3 appbar_menur_color--text">Channels</v-btn>
                  <v-btn plain small class="text-none mr-3 appbar_menur_color--text">Contacts</v-btn>
                  <v-btn plain small class="text-none mr-3 appbar_menur_color--text">Analytics</v-btn>
                  <v-btn plain small class="text-none mr-3 appbar_menur_color--text">Settings</v-btn>
                  

              </div>

              <v-spacer></v-spacer>
              
              <div class="d-none d-sm-flex">
                  <v-btn plain small class="text-none toolbar_active--text mr-3 font-weight-bold">Help</v-btn>
              </div>

              <v-divider inset vertical class="mr-3 divider_color d-none d-sm-flex"></v-divider>

              <div>
                <v-avatar rounded="lg" height="30" width="30">
                  <img src="/images/avatar.jpg">
                </v-avatar>
              </div>
              <div class="mr-6">
                <h5 class="text-title">Cody Fisher</h5>
                <h6 class="text-title grey--text font-weight-medium">CodyFisher@gmail.com</h6>
              </div>
              
            
            </v-row>
          </v-container>
      </v-app-bar>

    <v-divider></v-divider>

      <v-navigation-drawer clipped permanent app class="secondary"  v-if="$route.name!='LiveRecord'">
        <v-list dense rounded>
            <v-list-item v-for="link in links" :key="link.text" :to="link.route" v-model="selected">
                <v-list-item-icon class="ml-5 mr-4">
                  <v-img :src="'/images/svg/'+link.icon+'.svg'" width="25"></v-img>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title class="def_text--text">{{ link.text }}</v-list-item-title>
                </v-list-item-content>
            </v-list-item>
        </v-list>
    </v-navigation-drawer>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      selected: "My Recordings",
      links: [
        {icon: 'video-player', text: 'My Recordings', route: '/recordings'},
        {icon: 'share', text: 'Requested', route: '/requested'},
      ]
    }
  }
}

</script>