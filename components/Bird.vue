<template>
  <div class="ma-4">
    <v-row align="center">
      <v-col cols="9" class="purple--text text-h4 pb-0">
        {{ bird.name }}
      </v-col>
    </v-row>
    <v-row justify="start" class="mt-4">
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

    <div class="text-h5 green--text my-2">Chants</div>

    <v-row align="center" class="mt-1" justify="space-between">
      <v-col cols="3">
        <div>
          <v-btn
            fab
            v-if="!isPlaying"
            @click="play()"
            color="purple"
            :disabled="playerIsReady"
          >
            <v-icon> mdi-play </v-icon>
          </v-btn>
          <v-btn fab v-if="isPlaying" @click="pause()" color="purple">
            <v-icon> mdi-pause </v-icon>
          </v-btn>
        </div>
      </v-col>
      <v-col cols="9">
        <v-chip-group v-model="selectedSong" column>
          <v-chip
            v-for="(song, index) in bird.songs"
            :key="index"
            filter
            color="purple"
            @click="loadSong(index)"
          >
            Chant n°{{ index + 1 }}
          </v-chip>
        </v-chip-group>
      </v-col>
    </v-row>

    <audio
      hidden
      ref="audio"
      controls
      preload="auto"
      @canplay="player_is_ready()"
      @ended="isPlaying = false"
    >
      <source :src="bird.songs[0]" />
    </audio>

    <div v-for="(categorie, index) in categories" :key="index" class="mt-1">
      <div v-if="bird[categorie] != null" class="mb-8">
        <div class="text-h5 green--text mb-2">
          {{ getHeaderText(categorie) }}
        </div>
        <div
          v-for="(p, index) in bird[categorie]"
          :key="index"
          class="mb-2 text-justify text-body-1"
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
    isPlaying: false,
    playerIsReady: false,
    selectedSong: 0,
  }),
  computed: {
    cleanBird() {
      let cleanBird = { ...this.bird };
      delete cleanBird["name"];
      delete cleanBird["latinName"];
      delete cleanBird["images"];
      delete cleanBird["key"];
      delete cleanBird["songs"];
      return cleanBird;
    },
    categories() {
      return Object.keys(this.cleanBird);
    },
  },
  methods: {
    loadSong(index) {
      this.playerIsReady = false;
      this.isPlaying = false;
      this.$refs.audio.src = this.bird.songs[index];
    },
    player_is_ready() {
      console.log("Player is ready!");
      this.playerIsready = true;
    },
    play() {
      this.isPlaying = true;
      this.$refs.audio.play();
    },
    pause() {
      this.isPlaying = false;
      this.$refs.audio.pause();
    },
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
