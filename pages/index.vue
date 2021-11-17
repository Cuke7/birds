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

      <v-virtual-scroll :items="searchResults" itemHeight="75">
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
      </v-virtual-scroll>

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
    </v-col>
  </v-row>
</template>

<script>
import birdData from "~/static/birdData.json";
const { Searcher } = require("fast-fuzzy");
export default {
  mounted() {
    this.searchQuery = this.$store.state.searchQuery;
    for (const bird of birdData) {
      if (!bird.images[0]) {
        console.log(bird.name);
      }
    }
  },
  data: () => ({
    searchQuery: "",
    searchResults: birdData,
    fab: false,
  }),
  methods: {
    navigateTo(birdName) {
      this.$store.commit("updateSearchQuery", this.searchQuery);
      this.$router.push("/fiche?birdName=" + encodeURI(birdName));
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
      if (val.length > 2) {
        this.searchResults = this.searcher
          .search(val, {
            returnMatchData: true,
          })
          .map((el) => el.item);
      }
      if (val.length == 0) {
        this.searchResults = birdData;
      }
      // else {
      //   this.searchResults = birdData;
      // }
    },
  },
};
</script>
