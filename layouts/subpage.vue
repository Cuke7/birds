<template>
  <v-app dark>
    <v-app-bar app color="background">
      <v-btn icon @click="$router.push('/')">
        <v-icon color="green"> mdi-arrow-left </v-icon>
      </v-btn>

      <v-spacer></v-spacer>

      <v-btn icon @click="share">
        <v-icon color="green"> mdi-share-variant </v-icon>
      </v-btn>
      <v-spacer></v-spacer>
      <v-app-bar-nav-icon
        color="green"
        @click.stop="drawer = !drawer"
      ></v-app-bar-nav-icon>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" temporary fixed right id="drawer">
      <v-list nav dense>
        <v-list-item-group active-class="deep-purple--text text--accent-4">
          <v-list-item v-for="(item, index) in drawerItems" :key="index">
            <v-list-item-title
              @click="scroll(item)"
              class="green--text text-body-1"
              >{{ getHeaderText(item) }}</v-list-item-title
            >
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <v-container>
        <Nuxt ref="nuxt" />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
    };
  },
  computed: {
    drawerItems() {
      return this.$store.state.drawerItems;
    },
    subtitle() {
      return this.$store.state.BirdName;
    },
  },
  methods: {
    scroll(item) {
      console.log(item);
      this.$vuetify.goTo(document.getElementById(item));
    },
    getHeaderText(key) {
      if (key == "description") {
        return "Description";
      }
      if (key == "box_habitat") {
        return "Habitat";
      }
      if (key == "box_comportement") {
        return "Comportement";
      }
      if (key == "box_regime") {
        return "Régime";
      }
      if (key == "box_reproduction") {
        return "Reproduction";
      }
      if (key == "box_vol") {
        return "Vol";
      }
    },
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

#drawer {
  background-color: #282a36;
}
</style>
