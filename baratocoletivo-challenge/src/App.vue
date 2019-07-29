<template>
  <v-app>
    <v-content>
      <v-app-bar app>
        <v-toolbar-title class="headline text-uppercase">
          <span>Barato Coletivo</span>
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn text href="https://github.com/vuetifyjs/vuetify/releases/latest" target="_blank">
          <span class="mr-2">Latest Release</span>
        </v-btn>
      </v-app-bar>
      <Shelf />
      Funciona :{{offersList}}
    </v-content>
  </v-app>
</template>

<script>
  import Shelf from './components/Shelf';
  const axios = require('axios');

  export default {
    name: 'App',
    components: {
      Shelf,
    },
    data: () => ({
      offersList: 'teste',
    }),
    mounted: {
      getOffers: function () {        
        alert('Chamou');
      }
    },
    beforeMount: function () {
      this.getOffers();
    },
  };
</script>