import birdData from "~/static/birdData.json";

export const state = () => ({
  birdData: birdData,
  searchQuery: "",
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
};
