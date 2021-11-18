<template>
  <v-app dark>
    <v-app-bar app color="background">
      <v-btn icon @click="$router.push('/')">
        <v-icon color="green"> mdi-arrow-left </v-icon>
      </v-btn>

      <v-spacer></v-spacer>

      <!-- <v-btn icon @click="share">
        <v-icon color="green"> mdi-share-variant </v-icon>
      </v-btn> -->
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
  computed: {
    subtitle() {
      return this.$store.state.BirdName;
    },
  },
  methods: {
    share() {
      if (navigator.share) {
        navigator
          .share({
            title: "Aucellus",
            text: this.subtitle,
            url: window.location.href,
          })
          .then(() => console.log(this.subtitle))
          .catch((error) => console.log("Error sharing", error));
      }
    },
  },
};
</script>

<style scoped>
.v-application {
  background-color: #282a36;
}
</style>
