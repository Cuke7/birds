<template>
  <v-row>
    <v-col>
      <v-row justify="center">
        <v-col style="margin-left: 50px" class="pl-0">
          <v-switch v-model="switchHD" label="Photos HD"></v-switch>
        </v-col>
      </v-row>
      <v-row justify="center" align="start">
        <v-col cols="auto">
          <client-only>
            <Tinder
              ref="tinder"
              key-name="id"
              :queue.sync="queue"
              :offset-y="10"
              @submit="onSubmit"
            >
              <template slot-scope="scope">
                <item :scope="scope" :switchHD="switchHD"></item>
              </template>
            </Tinder>
          </client-only>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
import birdData from "~/static/birdData.json";
import Tinder from "vue-tinder";

export default {
  layout: "simple",
  components: { Tinder },
  data: () => ({
    switchHD: true,
    queue: [],
    offset: 0,
    items: [],
  }),
  created() {
    this.items = this.shuffle(
      birdData.filter((item) => item.images.length > 0)
    );
    for (let i = 0; i < this.items.length; i++) {
      this.queue.push({ item: this.items[i], id: this.offset });
      this.offset++;
    }
  },
  methods: {
    onSubmit({ item }) {
      if (this.queue.length < 1) {
        for (let i = 0; i < this.items.length; i++) {
          this.queue.push({ item: this.items[i], id: this.offset });
          this.offset++;
        }
      }
    },
    shuffle(array) {
      let currentIndex = array.length,
        randomIndex;

      // While there remain elements to shuffle...
      while (currentIndex != 0) {
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
          array[randomIndex],
          array[currentIndex],
        ];
      }

      return array;
    },
  },
};
</script>

<style>
body {
  overflow: hidden; /* Hide scrollbars */
}

#app .vue-tinder {
  position: absolute;
  z-index: 1;
  left: 0;
  right: 0;
  top: 100px;
  margin: auto;
  margin-right: 70px;
  margin-left: 70px;
  width: calc(100% - 140px);
  height: 50%;
  /* min-width: 300px; */
  /* max-width: 355px; */
}
</style>
