import { MutationTree } from 'vuex';
import { State } from './index';

export default <MutationTree<State>>{
  NOW_PLAYING(state, payload?: any[]) {
    state.nowPlaying = payload;
  },
  RECOMMENDED(state, payload: any) {
    state.recommended = payload;
  },
  POPULAR(state, payload: any) {
    state.popular = payload;
  },
  SINGLE(state, payload: any) {
    state.single = payload;
  },
  SIMILAR(state, payload: any) {
    state.similar = payload.results;
  },
  SET_SHOW(state, payload: any) {
    state.nowPlaying?.forEach((_: any, i: number) => {
      if (i === payload) {
        if (state.nowPlaying) state.nowPlaying[i].show = true;
      } else {
        if (state.nowPlaying) state.nowPlaying[i].show = false;
      }
    });
  },
  VIDEO_URL(state, payload: any) {
    if (payload.id === 1) state.video_url = payload.data;
    if (payload.id === 2) state.video_url2 = payload.data;
    if (payload.id === 3) state.video_url3 = payload.data;
  },
  IMAGES(state, payload: any) {
    state.images = payload.data;
  },
  SEARCHMOVIE(state, payload: any) {
    state.searchMovie = payload;
  },
  CLEARMOVIE(state) {
    state.searchMovie = null;
  },
  RESETMOVIE(state) {
    state.searchMovie = undefined;
  },
  LIST(state, payload: any) {
    const exists = state.list?.find((e: any) => e.id === payload.id);
    if (exists) {
      state.list = state.list?.filter((e: any) => e.id !== exists.id);
    } else {
      state.list?.push(payload);
    }
    localStorage.setItem('list', JSON.stringify(state.list));
  },
};
