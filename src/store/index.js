import actions from './actions';
import mutations from './mutations';

const getLocal = (data) => {
  try {
    return JSON.parse(data);
  } catch (error) {
    return data;
  }
};

export default {
  state: {
    nowPlaying: null,
    recommended: null,
    video_url: null,
    video_url2: null,
    video_url3: null,
    popular: null,
    single: null,
    similar: null,
    images: null,
    searchMovie: undefined,
    list: getLocal(localStorage.getItem('list')) || [],
  },
  getters: {
    recommendations: (state) => {
      return state.recommended?.map((e) => ({
        url: `url(https://image.tmdb.org/t/p/original${e.poster_path})`,
        title: e.original_title,
        year: e?.release_date.slice(0, 4),
        rating: e.vote_average,
        id: e.id,
      }));
    },
    popular: (state) => {
      return state.popular?.map((e) => ({
        url: `url(https://image.tmdb.org/t/p/original${e.poster_path})`,
        title: e.original_title,
        year: e.release_date?.slice(0, 4),
        rating: e.vote_average,
        id: e.id,
      }));
    },
    similar: (state) => {
      return state.similar?.map((e) => ({
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
        : state.searchMovie?.results?.map((e) => ({
            url: `url(https://image.tmdb.org/t/p/original${e.poster_path})`,
            title: e.original_title,
            year: e.release_date?.slice(0, 4),
            rating: e.vote_average,
            id: e.id,
          }));
    },
  },
  mutations,
  actions,
};
