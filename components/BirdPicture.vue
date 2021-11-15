<template>
  <v-card color="background2" class="rounded-xl" width="150" elevation="10">
    <v-img :src="pictureUrl" contain width="150" height="150"></v-img>
  </v-card>
</template>

<script>
export default {
  props: ["pictureUrl"],
  data: () => ({
    //
  }),
};
</script>
