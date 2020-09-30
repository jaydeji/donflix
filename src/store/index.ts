import actions from './actions';
import mutations from './mutations';
import { GetterTree } from 'vuex';

const getLocal = (data: any) => {
  try {
    return JSON.parse(data);
  } catch (error) {
    return data;
  }
};
// export type State = typeof state;

export type State = {
  nowPlaying?: any[];
  recommended?: [];
  video_url?: string;
  video_url2?: string;
  video_url3?: string;
  popular?: [];
  single?: [];
  similar?: [];
  images?: [];
  searchMovie: undefined | null | SearchMovie;
  list?: null | any[];
};

export interface SearchMovie {
  results: any;
}

const state: State = {
  nowPlaying: undefined,
  recommended: undefined,
  video_url: undefined,
  video_url2: undefined,
  video_url3: undefined,
  popular: undefined,
  single: undefined,
  similar: undefined,
  images: undefined,
  searchMovie: null,
  list: getLocal(localStorage.getItem('list')) || [],
};

const getters: GetterTree<State, State> = {
  recommendations: (state) => {
    return state.recommended?.map((e: any) => ({
      url: `url(https://image.tmdb.org/t/p/original${e.poster_path})`,
      title: e.original_title,
      year: e?.release_date.slice(0, 4),
      rating: e.vote_average,
      id: e.id,
    }));
  },
  popular: (state) => {
    return state.popular?.map((e: any) => ({
      url: `url(https://image.tmdb.org/t/p/original${e.poster_path})`,
      title: e.original_title,
      year: e.release_date?.slice(0, 4),
      rating: e.vote_average,
      id: e.id,
    }));
  },
  similar: (state) => {
    return state.similar?.map((e: any) => ({
      url: `url(https://image.tmdb.org/t/p/original${e.poster_path})`,
      title: e.original_title,
      year: e.release_date?.slice(0, 4),
      rating: e.vote_average,
      id: e.id,
    }));
  },
  searchMovie: (state) => {
    return state.searchMovie === null
      ? null
      : state.searchMovie?.results?.map((e: any) => ({
          url: `url(https://image.tmdb.org/t/p/original${e.poster_path})`,
          title: e.original_title,
          year: e.release_date?.slice(0, 4),
          rating: e.vote_average,
          id: e.id,
        }));
  },
};

export default {
  state: () => state,
  getters,
  mutations,
  actions,
};
