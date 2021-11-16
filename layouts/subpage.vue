<template>
  <v-app dark>
    <v-app-bar app color="background">
      <v-btn icon @click="$router.push('/')">
        <v-icon color="purple"> mdi-arrow-left </v-icon>
      </v-btn>

      <v-spacer></v-spacer>

      <v-btn icon @click="">
        <v-icon color="purple"> mdi-share-variant </v-icon>
      </v-btn>
    </v-app-bar>
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      //
    };
  },
};
</script>

<style scoped>
.v-application {
  background-color: #282a36;
}
</style>
