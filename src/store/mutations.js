export default {
  NOW_PLAYING(state, payload) {
    state.nowPlaying = payload.results;
  },
};
