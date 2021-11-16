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

      <div v-for="(searchResult, index) in searchResults" :key="index">
        <v-row
          class="mx-6 my-3 grey--text text-decoration-underline"
          @click="navigateTo(searchResult.name)"
        >
          {{ searchResult.name }}
        </v-row>
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
    },
  },
};
</script>
