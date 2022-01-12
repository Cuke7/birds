<template>
  <v-card class="pa-0" height="100%">
    <v-img :src="scope.data.item.images[0].hdLink" max-height="80%" contain></v-img>

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
  props: ["scope"],
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
