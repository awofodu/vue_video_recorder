<template>
  <v-container>
  <v-row>
    <v-col cols="1"></v-col>
    <v-col cols="10">
      <v-container>
        <v-row class="pt-4 grey--text">
          <v-col cols="12"><h5 class="font-weight-medium">Snapbyte > My Recordings</h5></v-col>
        </v-row>
        <v-row>
          <v-col cols="4">
                <div>
                  <span class="pr-3">My Recordings</span> 
                  <span class="text-h6 grey--text">25</span>
                </div>
              </v-col>

              <v-col cols="8">
                <v-btn class="text-none grey--text mr-2" color="primary" outlined depressed small rounded>
                    <v-icon left dark> mdi-swap-vertical </v-icon> By Date
                  </v-btn>

                  <v-btn class="text-none grey--text mr-2" color="white" outlined depressed small rounded>
                    <v-icon left dark> mdi-filter-outline </v-icon> Add Filter
                  </v-btn>

                  <v-btn class="text-none white--text mr-2" color="blue_button" depressed small rounded>
                    <v-icon left dark> mdi-video-outline </v-icon> New Request
                  </v-btn>
                  
                  <v-btn class="text-none white--text" color="red_button" depressed small rounded>
                    <v-icon left dark color="black"> mdi-record-rec </v-icon> Start Recording
                  </v-btn>
              </v-col>

        </v-row>

        <v-row>
          <v-simple-table>
              <thead>
                <tr>
                  <th class="grey--text">
                    Recordings
                  </th>
                  <th class="grey--text">
                    Title
                  </th>
                  <th class="grey--text">
                    Views
                  </th>
                  <th class="grey--text">
                    Size
                  </th>
                  <th class="grey--text" colspan="2">
                    Last Modified
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
                  <td class="pr-12">
                    <div class="pr-12">
                      <h4 class="font-weight-medium text-sm-left">
                      {{recording.title}}
                      </h4>
                    <h5 class="table_content--text text-sm-left font-weight-light">
                      {{recording.subtitle}}
                    </h5>
                    </div>
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
        recordings: [
          {
            thumbnail: '/video.jpg',
            title: 'Getting it rigt the first time',
            subtitle: 'The video description is shown here if the user has added it.',
            views: '324',
            size: '923KB',
            last_modified: '3 months ago',
          },
          {
            thumbnail: '/video.jpg',
            title: 'Getting it rigt the first time',
            subtitle: 'The video description is shown here if the user has added it.',
            views: '324',
            size: '923KB',
            last_modified: '3 months ago',
          },
          {
            thumbnail: '/video.jpg',
            title: 'Getting it rigt the first time',
            subtitle: 'The video description is shown here if the user has added it.',
            views: '324',
            size: '923KB',
            last_modified: '3 months ago',
          },
          {
            thumbnail: '/video.jpg',
            title: 'Getting it rigt the first time',
            subtitle: 'The video description is shown here if the user has added it.',
            views: '324',
            size: '923KB',
            last_modified: '3 months ago',
          },
          {
            thumbnail: '/video.jpg',
            title: 'Getting it rigt the first time',
            subtitle: 'The video description is shown here if the user has added it.',
            views: '324',
            size: '923KB',
            last_modified: '3 months ago',
          },
        ],
      }
    },
  }
</script>
