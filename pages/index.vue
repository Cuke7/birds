<template>
  <v-row justify="center" align="start">
    <v-col cols="12" md="6">
      <!-- <Bird :bird="birdTest"></Bird> -->

      <v-text-field
        color="purple"
        label="Chercher un oiseau"
        v-model="searchQuery"
        autocomplete="off"
        class="ma-6"
        append-icon="mdi-trash"
      ></v-text-field>

      <v-col
        cols="12"
        v-for="(searchResult, index) in searchResults"
        :key="index"
      >
        <v-sheet min-height="70" class="fill-height" color="transparent">
          <v-lazy class="fill-height">
            <div>
              <v-row align="center">
                <v-col cols="auto">
                  <v-avatar size="50">
                    <v-img :src="searchResult.images[0]" contain> </v-img>
                  </v-avatar>
                </v-col>
                <v-col cols="auto">
                  {{ searchResult.name }}
                </v-col>
              </v-row>
              <v-divider class="mt-5"></v-divider>
            </div>
          </v-lazy>
        </v-sheet>
      </v-col>

      <!-- <v-virtual-scroll bench="20" :items="searchResults" item-height="64">
        <template v-slot:default="{ item }">
          <v-row align="center">
            <v-col cols="auto">
              <v-avatar size="50">
                <v-img :src="item.images[0]" contain> </v-img>
              </v-avatar>
            </v-col>
            <v-col cols="auto">
              {{ item.name }}
            </v-col>
          </v-row>
          <v-divider class="mt-5 mx-4"></v-divider>
        </template>
      </v-virtual-scroll> -->

      <!-- <div v-for="(searchResult, index) in searchResults" :key="index">
        <v-row
          class="mx-6 my-3 grey--text text-decoration-underline"
          @click="navigateTo(searchResult.name)"
        >
          {{ searchResult.name }}
        </v-row>
      </div> -->
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
    searchResults: birdData,
  }),
  methods: {
    navigateTo(birdName) {
      this.$store.commit("updateSearchQuery", this.searchQuery);
      this.$router.push("/" + birdName);
    },
  },
  computed: {
    birdTest() {
      return this.$store.getters.getBirdData("Rougegorge familier");
    },
    searcher() {
      console.log("Computing");
      return new Searcher(birdData, {
        keySelector: (obj) => obj.name,
      });
    },
  },
  watch: {
    searchQuery(val) {
      if (val.length > 2) {
        this.searchResults = this.searcher
          .search(val, {
            returnMatchData: true,
          })
          .map((el) => el.item);
      } 
      // else {
      //   this.searchResults = birdData;
      // }
    },
  },
};
</script>
