import birdData from "~/static/birdData.json";

export const state = () => ({
  birdData: birdData,
  searchQuery: "",
  BirdName: "",
});

export const getters = {
  getBirdData: (state) => (nom) => {
    return state.birdData.find((item) => item.name === nom);
  },
};

export const mutations = {
  updateSearchQuery(state, value) {
    state.searchQuery = value;
  },
  updatBirdName(state, value) {
    state.BirdName = value;
  },
};
