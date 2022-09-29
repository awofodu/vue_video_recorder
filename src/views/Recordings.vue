<template>
  <v-container fluid>
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
                  <span class="text-h6 grey--text font-weight-medium">25</span>
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
                <v-alert dense outlined type="warning" border="left" >
                  Select a minimum of two options...
                </v-alert>
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
                    <v-btn class="text-none white--text" bottom color="blue_button" depressed rounded
                    @click="startRecord()" width="250">
                      <h5 class="font-weight-light">Start Recording</h5>
                    </v-btn>
                </div>

                
              </v-card-text>

              
            </v-card>
          </v-dialog>
        </v-row>
        <v-row>
          <v-simple-table>
              <thead>
                <tr>
                  <th class="toolbar_active--text">
                    <h3 class="font-weight-medium">Recordings</h3>
                  </th>
                  <th class="toolbar_active--text">
                    <h3 class="font-weight-medium">Title</h3>
                  </th>
                  <th class="toolbar_active--text">
                    <h3 class="font-weight-medium">Views</h3>
                  </th>
                  <th class="toolbar_active--text">
                    <h3 class="font-weight-medium">Size</h3>
                  </th>
                  <th class="toolbar_active--text" colspan="2">
                    <h3 class="font-weight-medium">Last Modified</h3>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr class="toolbar_active--text mb-5" v-for="recording in recordings" :key="recording.thumbnail">
                  <td>
                    <v-img
                        lazy-src="https://picsum.photos/id/11/10/6"
                        max-height="80"
                        max-width="80"
                        :src="recording.thumbnail"
                        contain
                      ></v-img>
                  </td>
                  <td>
                      <h4 class="font-weight-light toolbar_active--text text-sm-left">
                      {{recording.title}}
                      </h4>
                    <h5 class="table_content--text text-sm-left font-weight-light">
                      {{recording.subtitle}}
                    </h5>
                  </td>
                  
                  <td>{{recording.views}}</td>
                  
                  <td>{{recording.size}}</td>
                  
                  <td>{{recording.last_modified}}</td>
                  
                  <td>
                    <v-btn icon>
                      <v-icon class="grey--text">mdi-dots-horizontal</v-icon>
                    </v-btn>
                  </td>
                </tr>
              </tbody>
          </v-simple-table>
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
        recordings: [
          {
            thumbnail: '/images/thumbnail.jpg',
            title: 'Getting it rigt the first time',
            subtitle: 'The video description is shown here if the user has added it.',
            views: '324',
            size: '923KB',
            last_modified: '3 months ago',
          },
          {
            thumbnail: '/images/thumbnail1.jpg',
            title: 'Getting it rigt the first time',
            subtitle: 'The video description is shown here if the user has added it.',
            views: '324',
            size: '923KB',
            last_modified: '3 months ago',
          },
          {
            thumbnail: '/images/thumbnail2.jpg',
            title: 'Getting it rigt the first time',
            subtitle: 'The video description is shown here if the user has added it.',
            views: '324',
            size: '923KB',
            last_modified: '3 months ago',
          },
          {
            thumbnail: '/images/thumbnail3.jpg',
            title: 'Getting it rigt the first time',
            subtitle: 'The video description is shown here if the user has added it.',
            views: '324',
            size: '923KB',
            last_modified: '3 months ago',
          },
          {
            thumbnail: '/images/thumbnail4.jpg',
            title: 'Getting it rigt the first time',
            subtitle: 'The video description is shown here if the user has added it.',
            views: '324',
            size: '923KB',
            last_modified: '3 months ago',
          },
        ],
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
