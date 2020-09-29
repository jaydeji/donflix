export default {
  NOW_PLAYING(state: any, payload: any) {
    state.nowPlaying = payload;
  },
  RECOMMENDED(state: any, payload: any) {
    state.recommended = payload;
  },
  POPULAR(state: any, payload: any) {
    state.popular = payload;
  },
  SINGLE(state: any, payload: any) {
    state.single = payload;
  },
  SIMILAR(state: any, payload: any) {
    state.similar = payload.results;
  },
  SET_SHOW(state: any, payload: any) {
    state.nowPlaying.forEach((_: any, i: number) => {
      if (i === payload) {
        state.nowPlaying[i].show = true;
      } else {
        state.nowPlaying[i].show = false;
      }
    });
  },
  VIDEO_URL(state: any, payload: any) {
    if (payload.id === 1) state.video_url = payload.data;
    if (payload.id === 2) state.video_url2 = payload.data;
    if (payload.id === 3) state.video_url3 = payload.data;
  },
  IMAGES(state: any, payload: any) {
    state.images = payload.data;
  },
  SEARCHMOVIE(state: any, payload: any) {
    state.searchMovie = payload;
  },
  CLEARMOVIE(state: any) {
    state.searchMovie = null;
  },
  RESETMOVIE(state: any) {
    state.searchMovie = undefined;
  },
  LIST(state: any, payload: any) {
    const exists = state.list?.find((e: any) => e.id === payload.id);
    if (exists) {
      state.list = state.list.filter((e: any) => e.id !== exists.id);
    } else {
      state.list.push(payload);
    }
    localStorage.setItem('list', JSON.stringify(state.list));
  },
};
