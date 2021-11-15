<template>
  <v-row justify="center" align="start">
    <v-col cols="12" md="6">
      <BirdIntro :bird="birdTest"></BirdIntro>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data: () => ({
    // birdTest: {
    //   name: "Rougegorge famillier",
    //   latinName: "Ave Maria",
    //   pictureUrl: "/kingFisher.jpg",
    //   intro: "Pater noster",
    // },
  }),
  computed: {
    birdTest() {
      return this.$store.getters.getBirdData("Rougegorge familier");
    },
  },
};
</script>

<style scoped>
h4 {
  word-break: break-word;
}
</style>
