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

                <MulticorderUI height="350"
                  :videoTypes="[record_option]"
                />
            </v-col>
          <v-col cols="2"></v-col>
          </v-row>

          <div align="center" class="pt-10">
            <v-btn class="text-none white--text" bottom color="blue_button" depressed rounded
            @click="dialog = false">
                <h5 class="font-weight-light">Start recording</h5>
            </v-btn>
          </div>
        </v-container>
    </v-content>
</template>

<script>
import  MulticorderUI  from 'multicorder/vuetify_ui/src/components/MulticorderUI.vue';

export default {
      data() {
        return {
          record_option: this.$session.get('record_option'),
        }
      },

      components: {
          MulticorderUI
        },
      computed:{
      theme(){
        return 'dark'
      }
    }
  }
</script>
