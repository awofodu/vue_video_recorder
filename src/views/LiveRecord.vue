<template>
    <v-content>
        <v-container>
          <v-row>
          <v-col cols="2"></v-col>
            <v-col class="8">
                <span class="pl-6 font-weight-light live_preview grey--text">
                <v-icon
                  color="record_icon"
                  right dense small
                >
                  mdi-radiobox-marked
                </v-icon>
                Live Preview</span>
                <p></p>
                <!--<v-sheet
                  rounded
                  class="mx-auto live_prev_bg"
                  height="350"
                ></v-sheet> -->
                  <v-sheet
                    rounded
                    class="mx-auto display_sheet live_prev_bg"
                    height="350"
                  ></v-sheet>

                <video id="video" style="display: none;" autoplay height="350"></video>

                <div v-show="record_option == 'screen'">

                <video class="recording" style="display: none;" autoplay muted
                  height="350"></video>
                  
                <video class="output" style="display: none;" autoplay controls 
                      height="350"></video>
                </div>
            </v-col>
          <v-col cols="2"></v-col>
          </v-row>

          <div align="center" class="pt-10" v-if="record_option == 'camera'">
            <v-btn class="text-none white--text start-camera" bottom color="blue_button" 
             depressed rounded>
                <h5 class="font-weight-light">Start camera</h5>
            </v-btn>
            <v-btn class="text-none white--text start-cam-record"
             style="display: none;" bottom color="blue_button" depressed rounded>
                <h5 class="font-weight-light">Start recording</h5>
            </v-btn>
            <v-btn class="text-none white--text stop-cam-record" style="display: none;" bottom color="red_button" depressed rounded>
                <h5 class="font-weight-light">Stop recording</h5>
            </v-btn>
              <!-- <v-btn class="text-none white--text download-anc" id="download-video" download="test.webm" 
              bottom color="black" depressed rounded style="display: none;">
                  <v-icon dense> mdi-download</v-icon>
              </v-btn> -->

            <a id="download-video" download="test.webm" style="display: none;">Download Video</a>
          </div>

          <div align="center" class="pt-10" v-if="record_option == 'screen'">
            <v-btn class="text-none white--text record-btn" bottom color="blue_button" depressed rounded>
                <h5 class="font-weight-light">Start recording</h5>
            </v-btn>
            <v-btn class="text-none white--text stop-btn" style="display: none;" bottom color="red_button" depressed rounded>
                <h5 class="font-weight-light">Stop recording</h5>
            </v-btn>
              <v-btn class="text-none white--text download-anc" download="output.mp4" 
              bottom color="black" depressed rounded style="display: none;">
                  <v-icon dense> mdi-download</v-icon>
              </v-btn>
          </div>
        </v-container>
    </v-content>
</template>


<script>

export default {
    metaInfo: {
        // if no subcomponents specify a metaInfo.title, this title will be used
        title: 'Video Recorder',
        // all titles will be injected into this template
        titleTemplate: '%s | My Awesome Webapp',
        script: [
          { src: '/live_record.js', async: true, defer: true}
        ]
      },

      data() {
        return {
          record_option: this.$session.get('record_option'),
        }
      },

      components: {
        },
        
      computed:{
      theme(){
        return 'dark'
      }
    }
  }
</script>
