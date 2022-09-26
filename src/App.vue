<template>
  <v-app  v-bind:style="[$route.name=='LiveRecord' ? {background: $vuetify.theme.themes[theme].background} : '']">
    <Navbar/>

    <v-main class="mx-4 mb-4">
      <router-view/>
    </v-main>
  </v-app>
</template>


<script>
import Navbar from '@/components/Navbar'

export default {
  name: 'App',
  components: {Navbar},
      computed:{
      theme(){
        return 'dark'
      }
    },

  data: () => ({
    //
  }),
};
</script>
