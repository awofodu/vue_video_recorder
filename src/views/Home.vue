<template>
  <v-container>
  <v-row>
    <v-col cols="1"></v-col>
    <v-col cols="10">
      <v-container fluid>
        <v-row class="grey--text">
          <v-col cols="12"><h5 class="font-weight-light">Snapbyte &emsp; <span class="text-h6">&gt;</span> &emsp; My Recordings</h5></v-col>
        </v-row>
        <v-row>
          <v-col cols="3">
                <div>
                  <span class="mr-3">My Recordings</span> 
                  <span class="text-h6 grey--text font-weight-medium">0</span>
                </div>
              </v-col>

              <v-col cols="9">
                <v-btn class="text-none grey--text mr-2" color="primary" outlined depressed rounded>
                    <v-icon left dark> mdi-swap-vertical </v-icon> 
                    <h5 class="font-weight-light">By Date</h5>
                  </v-btn>

                  <v-btn class="text-none grey--text mr-2" color="white" outlined depressed rounded>
                    <v-icon left dark> mdi-filter-outline </v-icon> 
                    <h5 class="font-weight-light">Add Filter <span class="arrow_down">></span></h5>
                  </v-btn>

                  <v-btn class="text-none white--text mr-2" color="blue_button" depressed rounded>
                    <v-icon left dark> mdi-video-outline </v-icon> 
                    <h5 class="font-weight-light">New Request</h5>
                  </v-btn>
                  
                  <v-btn class="text-none white--text" color="red_button" depressed rounded 
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
              <v-card-title>
                <h5>New Recording</h5> <v-spacer/> 
                <v-btn plain @click="dialog = false">
                  <span class="font-weight-light text-h4 black--text">&times;</span>
                </v-btn>
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
                    @click="startRecord()" width="250">
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
            class="mx-auto welcome_sheet lighten-2"
            height="500"
            width="850"
          >
            <v-container fill-height fluid>
              <v-row>
                <v-col cols="12"> 
                <div align="center">
                  <v-img src="/images/envelope.png" width="250"></v-img>
                </div>
                </v-col>

                <v-col cols="2"></v-col>
                <v-col cols="8">
                  <h4 class="font-weight-medium text-center"> Say hello to the World!</h4>
                  <h6 class="font-weight-medium grey--text text-center">
                  Record your first video/audio and share it what your team, friends, followers and customers.</h6>
                  <div align="center" class="pt-5">
                    <v-btn class="text-none white--text mr-2" color="red_button" depressed rounded 
                    @click.stop="dialog = true">
                      <v-icon left dark color="black"> mdi-record-rec </v-icon> 
                      <h5 class="font-weight-light">Start Recording</h5>
                    </v-btn>

                    <v-btn class="text-none white--text" color="blue_button" depressed rounded>
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
              <v-card-title>
                <h5>New Recording</h5> <v-spacer/> 
                <v-btn plain @click="dialog = false">
                  <span class="font-weight-light text-h4 black--text">&times;</span>
                </v-btn>
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
                    @click="dialog = false" width="250">
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
            <v-container fluid>
              <v-row>
                <v-col cols="6">
                  <!--<v-card>
                    <v-card height="200px">
                      <v-system-bar color="#AED6F1" class="lighten-1">
                        <v-row>
                          <v-col cols="4"></v-col>
                          <v-col cols="4" class="font-weight-medium text-center">PREVIEW</v-col>
                          <v-col cols="4"></v-col>
                        </v-row>
                      </v-system-bar>

                      
                    </v-card>
                  </v-card>-->
                  <v-img src="/images/demo.png" max-width="350"></v-img>
                </v-col>
                <v-col cols="6" class="pt-12">
                  <p class="def_text--text font-weight-medium text-h5">
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
        switch1: this.$session.get('record_option') == 'screen' ? true : false,
        switch2: this.$session.get('record_option') == 'camera' ? true : false,
        switch3: true,
        record_option: '', //default record option
        dialog: false,
        items: ['Tourism', 'Entertainment'],
      }
    },

    methods: {
      startRecord() {
        this.$router.push('/live-record');

      }
    },

    watch: {
      switch1(s1Value){
        //called whenever switch1 changes
        if(s1Value == true) {
          this.switch2 = false;
          this.record_option = 'screen';
          this.$session.set('record_option', this.record_option);
          // this.$session.destroy()
        }
      },
      switch2(s2Value){
        //called whenever switch1 changes
        if(s2Value == true) {
          this.switch1 = false;
          this.record_option = 'camera';
          this.$session.set('record_option', this.record_option);
        }
      }
    }
  }
</script>
