<template>
  <div class="ma-4">
    <v-row>
      <v-col cols="auto" class="purple--text text-h4 pb-0">
        {{ bird.name }}
      </v-col>
    </v-row>
    <v-row justify="start" class="mt-0">
      <v-col
        cols="auto"
        class="grey--text text-body-1 font-weight-bold pb-0 mb-4"
      >
        {{ bird.latinName }}
      </v-col>
    </v-row>

    <!-- <v-row justify="center" class="mt-0">
      <v-col cols="auto"> -->
    <div style="display: flex; overflow-x: auto" class="mt-4">
      <v-card
        v-for="(imageUrl, index) in bird.images"
        :key="index"
        color="background2"
        class="rounded-xl mr-4 mb-2"
        width="150"
        elevation="10"
        @click="openDialog(imageUrl.hdLink)"
      >
        <v-img :src="imageUrl.sdLink" contain width="150" height="150" />
      </v-card>
    </div>

    <div v-for="(categorie, index) in categories" :key="index">
      <div v-if="bird[categorie] != null">
        <div class="text-h5 green--text mt-8 mb-2">
          {{ getHeaderText(categorie) }}
        </div>
        <div
          v-for="(p, index) in bird[categorie]"
          :key="index"
          class="my-2 text-justify text-body-1"
        >
          {{ p }}
        </div>
      </div>
    </div>

    <v-dialog v-model="photoDialog" max-width="600">
      <v-img :src="activeImageUrl" contain class="rounded-xl"> </v-img>
    </v-dialog>
  </div>
</template>

<script>
export default {
  props: ["bird"],
  data: () => ({
    photoDialog: false,
    activeImageUrl: "",
  }),
  computed: {
    cleanBird() {
      let cleanBird = { ...this.bird };
      delete cleanBird["name"];
      delete cleanBird["latinName"];
      delete cleanBird["images"];
      delete cleanBird["key"];
      return cleanBird;
    },
    categories() {
      return Object.keys(this.cleanBird);
    },
  },
  methods: {
    openDialog(imageUrl) {
      this.activeImageUrl = imageUrl;
      this.photoDialog = true;
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
  },
};
</script>

<style scoped>
h4 {
  word-break: break-word;
}

/* width */
::-webkit-scrollbar {
  width: 10px;
  height: 7px;
  /* display: none; */
}

/* Track */
::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px grey;
  border-radius: 10px;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #9c27b0;
  border-radius: 10px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #4caf50;
}
</style>
