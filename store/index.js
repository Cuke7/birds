import birdData from "~/static/birdData.json";

export const state = () => ({
  birdData: birdData,
});

export const getters = {
  getBirdData: (state) => (nom) => {
    return state.birdData.find((item) => item.name === nom);
  },
};

export const mutations = {
  //   changeSubtitle(state, value) {
  //     state.subtitle = value;
  //   },
};
