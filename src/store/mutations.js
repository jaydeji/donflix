export default {
  NOW_PLAYING(state, payload) {
    state.nowPlaying = payload;
  },
  RECOMMENDED(state, payload) {
    state.recommended = payload;
  },
  POPULAR(state, payload) {
    state.popular = payload;
  },
  SET_SHOW(state, payload) {
    state.nowPlaying.forEach((e, i) => {
      if (i === payload) {
        state.nowPlaying[i].show = true;
      } else {
        state.nowPlaying[i].show = false;
      }
    });
  },
  VIDEO_URL(state, payload) {
    if (payload.id === 1) state.video_url = payload.data;
    if (payload.id === 2) state.video_url2 = payload.data;
  },
};
