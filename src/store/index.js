import actions from './actions';
import mutations from './mutations';

export default {
  state: {
    nowPlaying: [],
  },
  getters: {
    images: (state) => {
      return state.nowPlaying
        .filter((_, i) => i < 3)
        .map((e) => e.backdrop_path);
    },
  },
  mutations,
  actions,
};
