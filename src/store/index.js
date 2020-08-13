import actions from './actions';
import mutations from './mutations';

export default {
  state: {
    nowPlaying: null,
    recommended: null,
    video_url: null,
    video_url2: null,
    popular: null,
    single: null,
    similar: null,
  },
  getters: {
    recommendations: (state) => {
      return state.recommended?.map((e) => ({
        url: `url(https://image.tmdb.org/t/p/original${e.poster_path})`,
        title: e.original_title,
        year: e.release_date.slice(0, 4),
        rating: e.vote_average,
        id: e.id,
      }));
    },
    popular: (state) => {
      return state.popular?.map((e) => ({
        url: `url(https://image.tmdb.org/t/p/original${e.poster_path})`,
        title: e.original_title,
        year: e.release_date.slice(0, 4),
        rating: e.vote_average,
        id: e.id,
      }));
    },
    similar: (state) => {
      return state.similar?.map((e) => ({
        url: `url(https://image.tmdb.org/t/p/original${e.poster_path})`,
        title: e.original_title,
        year: e.release_date.slice(0, 4),
        rating: e.vote_average,
        id: e.id,
      }));
    },
  },
  mutations,
  actions,
};
