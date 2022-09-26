<template>
  <v-container>
  <v-row>
    <v-col cols="1"></v-col>
    <v-col cols="10">
      <v-container>
        <v-row class="grey--text">
          <v-col cols="12"><h5 class="font-weight-light">Snapbyte &emsp; <span class="text-h6">&gt;</span> &emsp; My Recordings</h5></v-col>
        </v-row>
        <v-row>
          <v-col cols="4">
                <div>
                  <span class="pr-3">My Recordings</span> 
                  <span class="text-h6 grey--text">0</span>
                </div>
              </v-col>

              <v-col cols="8">
                <v-btn class="text-none grey--text mr-2" color="primary" outlined depressed small rounded>
                    <v-icon left dark> mdi-swap-vertical </v-icon> 
                    <h5 class="font-weight-light">By Date</h5>
                  </v-btn>

                  <v-btn class="text-none grey--text mr-2" color="white" outlined depressed small rounded>
                    <v-icon left dark> mdi-filter-outline </v-icon> 
                    <h5 class="font-weight-light">Add Filter</h5>
                  </v-btn>

                  <v-btn class="text-none white--text mr-2" color="blue_button" depressed small rounded>
                    <v-icon left dark> mdi-video-outline </v-icon> 
                    <h5 class="font-weight-light">New Request</h5>
                  </v-btn>
                  
                  <v-btn class="text-none white--text" color="red_button" depressed small rounded 
                  @click.stop="dialog = true">
                    <v-icon left dark color="black"> mdi-record-rec </v-icon> 
                    <h5 class="font-weight-light">Start Recording</h5>
                    
                  </v-btn>
              </v-col>

        </v-row>

       <v-row justify="center">
          <v-dialog scrollable 
            v-model="dialog"
            max-width="400"
          >
            <v-card>
              <v-card-title class="text-h6">
                <h5>New Recording</h5> <v-spacer/> <v-btn plain @click="dialog = false">&times;</v-btn>
              </v-card-title>

              <v-divider/>

              <v-card-text>
                <div class="pt-5">
                  <span class="black--text">Save the record in</span>
                  <v-select dense
                    :items="items" class="pt-3"
                    filled solo-inverted
                    label="Select a project"
                  ></v-select>
                </div>
                    <v-btn absolute right fixed>
                      <v-checkbox class="pt-3"
                      v-model="$vuetify.theme.dark"
                      color="purple"
                      off-icon="mdi-theme-light-dark"
                      on-icon="mdi-theme-light-dark"
                      ></v-checkbox>
                    </v-btn>

                <div>
                    <v-switch dense class="v-input--reverse v-input--expand mt-1"
                      v-model="switch1" label="Record Screen"
                      inset color="switch_color"
                    ></v-switch>
                    <v-switch dense class="v-input--reverse v-input--expand mt-1"
                      v-model="switch2" label="Record Camera"
                      inset color="switch_color"
                    ></v-switch>
                    <v-switch dense class="v-input--reverse v-input--expand mt-1"
                      v-model="switch3" label="Record Mic"
                      inset color="switch_color"
                    ></v-switch>
                </div>

                <div align="center" class="pt-3">
                  <router-link to="/live-record">
                    <v-btn class="text-none white--text" bottom color="blue_button" depressed rounded
                    @click="dialog = false">
                      <h5 class="font-weight-light">Start Recording</h5>
                    </v-btn>
                    </router-link>
                </div>

                
              </v-card-text>

              
            </v-card>
          </v-dialog>
        </v-row>
        <v-row class="pt-2">
          <v-sheet
            class="mx-auto welcome_sheet"
            height="350"
            width="900"
          >
            <v-container fill-height fluid>
              <v-row>
                <v-col cols="12" class="pb-12">
                  <v-sheet
                    class="mx-auto envelope"
                    height="100"
                    width="110" rounded="lg"
                  >
                      <v-sheet
                        class="mx-auto red"
                        height="120"
                        width="95" rounded="lg"
                          >
                      </v-sheet>

                </v-sheet>
                </v-col>

                <v-col cols="2"></v-col>
                <v-col cols="8">
                  <h4 class="font-weight-medium text-center"> Say hello to the World!</h4>
                  <h6 class="font-weight-medium grey--text text-center">
                  Record your first video/audio and share it what your team, friends, followers and customers.</h6>
                  <div align="center" class="pt-5">
                    <v-btn class="text-none white--text mr-2" color="red_button" depressed small rounded 
                    @click.stop="dialog = true">
                      <v-icon left dark color="black"> mdi-record-rec </v-icon> 
                      <h5 class="font-weight-light">Start Recording</h5>
                    </v-btn>

                    <v-btn class="text-none white--text" color="blue_button" depressed small rounded>
                      <v-icon left dark> mdi-video-outline </v-icon> 
                      <h5 class="font-weight-light">New Request</h5>
                    </v-btn>
                  </div>
                </v-col>
                <v-col cols="2"></v-col>
              </v-row>
            </v-container>
          </v-sheet>
        </v-row>
      </v-container>
    </v-col>
    <v-col cols="1"></v-col>

    </v-row>

    <v-row justify="center">
      <v-dialog scrollable 
        v-model="dialog"
        max-width="400"
      >
        <v-card>
          <v-card-title class="text-h6">
            <h5>New Recording</h5> <v-spacer/> <v-btn plain @click="dialog = false">&times;</v-btn>
          </v-card-title>

          <v-divider/>

          <v-card-text>
            <div class="pt-5">
              <span class="black--text">Save the record in</span>
              <v-select dense
                :items="items" class="pt-3"
                filled solo-inverted
                label="Select a project"
              ></v-select>
            </div>
                <v-btn absolute right fixed>
                  <v-checkbox class="pt-3"
                  v-model="$vuetify.theme.dark"
                  color="purple"
                  off-icon="mdi-theme-light-dark"
                  on-icon="mdi-theme-light-dark"
                  ></v-checkbox>
                </v-btn>

            <div>
                <v-switch dense class="v-input--reverse v-input--expand mt-1"
                  v-model="switch1" label="Record Screen"
                  inset color="switch_color"
                ></v-switch>
                <v-switch dense class="v-input--reverse v-input--expand mt-1"
                  v-model="switch2" label="Record Camera"
                  inset color="switch_color"
                ></v-switch>
                <v-switch dense class="v-input--reverse v-input--expand mt-1"
                  v-model="switch3" label="Record Mic"
                  inset color="switch_color"
                ></v-switch>
            </div>

            <div align="center" class="pt-3">
              <router-link to="/live-record">
                <v-btn class="text-none white--text" bottom color="blue_button" depressed rounded
                @click="dialog = false">
                  <h5 class="font-weight-light">Start Recording</h5>
                </v-btn>
                </router-link>
            </div>

            
          </v-card-text>

          
        </v-card>
      </v-dialog>
    </v-row>

        <v-row>
          <v-col cols="1"></v-col>
          <v-col cols="10">
            <v-container>
              <v-row>
                <v-col cols="6">
                  <v-card>
                    <v-card height="200px">
                      <v-system-bar color="#AED6F1" class="lighten-1">
                        <v-row>
                          <v-col cols="4"></v-col>
                          <v-col cols="4" class="font-weight-medium text-center">PREVIEW</v-col>
                          <v-col cols="4"></v-col>
                        </v-row>
                      </v-system-bar>

                      <v-img src="/images/demo.png" max-width="500"></v-img>
                    </v-card>
                  </v-card>
                </v-col>
                <v-col cols="6">
                  <p class="def_text--text font-weight-medium">
                  Want more controls & better qality recording?</p>

                  <v-btn class="text-none white--text mr-2" color="blue_button" depressed rounded> 
                    <h5 class="font-weight-light">Download the desktop recorder</h5>
                  </v-btn>
                </v-col>
              </v-row>
            </v-container>
          </v-col>
          <v-col cols="1"></v-col>
        </v-row>

  </v-container>
</template>

<script>

export default {
    data () {
      return {
        switch1: true,
        switch2: true,
        switch3: false,
        dialog: false,
      }
    },
  }
</script>
