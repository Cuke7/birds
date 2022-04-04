<template>
  <v-app dark>
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
    <v-footer app>
      Projet pédagogique, données issues du site https://www.oiseaux.net/.
    </v-footer>
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
