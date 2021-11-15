<template>
  <v-row justify="center" align="start">
    <v-col cols="12" md="6">
      <Bird :bird="birdTest"></Bird>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data: () => ({}),
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
