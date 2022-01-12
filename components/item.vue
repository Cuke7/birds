<template>
  <v-card class="pa-0" height="100%">
    <v-img
      :src="
        switchHD
          ? scope.data.item.images[0].hdLink
          : scope.data.item.images[0].sdLink
      "
      contain
      max-height="80%"
    ></v-img>

    <v-row justify="center">
      <v-col cols="auto">
        <v-card-title class="white--text">
          {{ scope.data.item.name }}
        </v-card-title>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
export default {
  props: ["scope", "switchHD"],
};
</script>

<style scoped>
.v-card {
  background-image: linear-gradient(
    to left bottom,
    #0056d8,
    #006ac3,
    #00687c,
    #005e35,
    #3a4f0b
  );
}
</style>
