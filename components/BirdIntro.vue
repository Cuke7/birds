<template>
  <div class="ma-4">
    <v-row>
      <v-col cols="auto" class="purple--text text-h4">
        {{ bird.name }}
      </v-col>
    </v-row>
    <v-row justify="start">
      <v-col cols="auto" class="grey--text text-body-1 font-weight-bold">
        {{ bird.latinName }}
      </v-col>
    </v-row>

    <v-row justify="center">
      <v-col cols="auto">
        <v-card
          color="background2"
          class="rounded-xl"
          width="150"
          elevation="10"
        >
          <v-img src="/kingFisher.jpg" contain width="150" height="150"></v-img>
        </v-card>
      </v-col>
    </v-row>

    <!-- <div class="text-h5 green--text my-4">Description</div>
    <div
      v-for="(p, index) in bird.description"
      :key="index"
      class="my-2 text-justify text-body-1"
    >
      {{ p }}
    </div> -->
    <div v-for="(categorie, index) in categories" :key="index">
      <div class="text-h5 green--text my-4">{{ getHeaderText(categorie) }}</div>
      <div
        v-for="(p, index) in bird[categorie]"
        :key="index"
        class="my-2 text-justify text-body-1"
      >
        {{ p }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["bird"],
  data: () => ({
    //
  }),
  computed: {
    cleanBird() {
      let cleanBird = { ...this.bird };
      delete cleanBird["name"];
      delete cleanBird["latinName"];
      console.log(cleanBird);
      return cleanBird;
    },
    categories() {
      return Object.keys(this.cleanBird);
    },
  },
  methods: {
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
</style>
