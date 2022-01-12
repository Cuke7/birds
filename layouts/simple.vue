<template>
  <v-app dark>
    <v-app-bar app color="background">
      <v-btn icon @click="$router.push('/')">
        <v-icon color="green"> mdi-arrow-left </v-icon>
      </v-btn>

      <v-spacer></v-spacer>
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
