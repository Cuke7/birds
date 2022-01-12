<template>
  <v-row justify="center" align="start">
    <v-col cols="12" md="6">
      <v-text-field
        color="purple"
        label="Chercher un oiseau"
        v-model="searchQuery"
        autocomplete="off"
        class="ma-6"
        append-icon="mdi-trash"
      ></v-text-field>

      <div class="ma-6">
        Projet pédagogique, données issues du site https://www.oiseaux.net/.
      </div>

      <!-- <v-virtual-scroll :items="searchResults" itemHeight="75">
        <template v-slot:default="{ item }">
          <v-list-item :key="item.key" @click="navigateTo(item.name)">
            <v-list-item-action>
              <v-avatar size="50" v-if="item.images[0]">
                <v-img :src="item.images[0].sdLink" contain> </v-img>
              </v-avatar>
              <v-avatar v-else color="purple">
                {{ item.name[0] }}
              </v-avatar>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>
                {{ item.name }}
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-divider></v-divider>
        </template>
      </v-virtual-scroll> -->
      <div v-for="(searchResult, index) in searchResults" :key="index">
        <v-list-item @click="navigateTo(searchResult.name)">
          <v-list-item-action>
            <v-avatar size="50" v-if="searchResult.images[0]">
              <v-img :src="searchResult.images[0].sdLink" contain> </v-img>
            </v-avatar>
            <v-avatar v-else color="purple">
              {{ searchResult.name[0] }}
            </v-avatar>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>
              {{ searchResult.name }}
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-divider></v-divider>
      </div>

      <v-btn
        fab
        v-scroll="onScroll"
        fixed
        bottom
        right
        @click="toTop"
        v-show="fab"
        color="purple"
        class="fab"
      >
        <v-icon>mdi-chevron-up</v-icon>
      </v-btn>
      <div class="ma-6">
        <v-card class="pa-4 text-body-2" color="background2">
          <div class="my-4 text-center">Match avec des oiseaux de ton pays</div>
          <div class="text-center my-4">
            <v-btn color="purple" nuxtLink to="/birder"> Commencer </v-btn>
          </div>
        </v-card>
      </div>
    </v-col>
  </v-row>
</template>

<script>
import birdData from "~/static/birdData.json";
const { Searcher } = require("fast-fuzzy");
export default {
  mounted() {
    this.searchQuery = this.$store.state.searchQuery;
  },
  data: () => ({
    searchQuery: "",
    searchResults: [],
    fab: false,
  }),
  methods: {
    navigateTo(birdName) {
      this.$store.commit("updateSearchQuery", this.searchQuery);
      // this.$router.push("/fiche?birdName=" + encodeURI(birdName));
      this.$router.push("/" + encodeURI(birdName));
    },
    onScroll(e) {
      if (typeof window === "undefined") return;
      const top = window.pageYOffset || e.target.scrollTop || 0;
      this.fab = top > 1500;
    },
    toTop() {
      this.$vuetify.goTo(0);
    },
  },
  computed: {
    searcher() {
      console.log("Computing");
      return new Searcher(birdData, {
        keySelector: (obj) => obj.name,
      });
    },
  },
  watch: {
    searchQuery(val) {
      if (val.length > 0) {
        this.searchResults = [];
        let temp = this.searcher.search(val, {
          returnMatchData: true,
        });

        let maxLength = temp.length < 20 ? temp.length : 20;

        for (let i = 0; i < maxLength; i++) {
          this.searchResults.push(temp[i].item);
        }
      }
    },
  },
};
</script>
