<template>
  <v-row justify="center" align="start">
    <v-col cols="12" md="6">
      <Bird :bird="bird"></Bird>
    </v-col>
  </v-row>
</template>

<script>
export default {
  layout: "subpage",
  data: () => ({
    //
  }),
  computed: {
    bird() {
      this.$store.commit("updatBirdName", this.slug);
      return this.$store.getters.getBirdData(this.slug);
    },
  },
  async asyncData({ params }) {
    const slug = params.birdName; // When calling /abc the slug will be "abc"
    return { slug };
  },
};
</script>
