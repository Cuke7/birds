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
      ></v-text-field>

      <div v-for="(searchResult, index) in searchResults" :key="index">
        {{ searchResult.name }}
      </div>
    </v-col>
  </v-row>
</template>

<script>
import birdData from "~/static/birdData.json";
const { Searcher } = require("fast-fuzzy");
export default {
  data: () => ({
    searchQuery: "",
    searchResults: [],
  }),
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
      this.searchResults = this.searcher
        .search(val, {
          returnMatchData: true,
        })
        .map((el) => el.item);
    },
  },
};
</script>
