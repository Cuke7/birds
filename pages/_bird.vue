<template>
  <v-row justify="center" align="start">
    <v-col cols="12" md="6">
      <Bird v-if="bird" :bird="bird" ref="birds"></Bird>
    </v-col>
  </v-row>
</template>

<script>
import birdData from "~/static/birdData.json";
export default {
  layout: "subpage",
  async asyncData({ params }) {
    const birdName = params.bird; // When calling /abc the slug will be "abc"
    return { birdName };
  },
  data: () => ({
    birdName: "",
  }),
  computed: {
    bird() {
      // this.$store.commit("updatBirdName", this.$route.query.birdName);
      // return this.$store.getters.getBirdData(
      //   decodeURI(this.$route.query.birdName)
      // );
      this.$store.commit("updatBirdName", this.birdName);
      return birdData.find((item) => item.name === this.birdName);
      //return this.$store.getters.getBirdData(decodeURI(this.birdName));
    },
  },
};
</script>
