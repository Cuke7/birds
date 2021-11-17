<template>
  <v-row justify="center" align="start">
    <v-col cols="12" md="6">
      <Bird v-if="bird" :bird="bird"></Bird>
    </v-col>
  </v-row>
</template>

<script>
export default {
  layout: "subpage",
  data: () => ({
    birdName: "",
  }),
  computed: {
    bird() {
      this.$store.commit("updatBirdName", this.$route.query.birdName);
      return this.$store.getters.getBirdData(
        decodeURI(this.$route.query.birdName)
      );
    },
  },
};
</script>
