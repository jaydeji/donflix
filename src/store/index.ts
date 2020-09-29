import actions from './actions';
import mutations from './mutations';

const getLocal = (data: any) => {
  try {
    return JSON.parse(data);
  } catch (error) {
    return data;
  }
};

export default {
  state: () => ({
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
  }),
  getters: {
    recommendations: (state: any) => {
      return state.recommended?.map((e: any) => ({
        url: `url(https://image.tmdb.org/t/p/original${e.poster_path})`,
        title: e.original_title,
        year: e?.release_date.slice(0, 4),
        rating: e.vote_average,
        id: e.id,
      }));
    },
    popular: (state: any) => {
      return state.popular?.map((e: any) => ({
        url: `url(https://image.tmdb.org/t/p/original${e.poster_path})`,
        title: e.original_title,
        year: e.release_date?.slice(0, 4),
        rating: e.vote_average,
        id: e.id,
      }));
    },
    similar: (state: any) => {
      return state.similar?.map((e: any) => ({
        url: `url(https://image.tmdb.org/t/p/original${e.poster_path})`,
        title: e.original_title,
        year: e.release_date?.slice(0, 4),
        rating: e.vote_average,
        id: e.id,
      }));
    },
    searchMovie: (state: any) => {
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
  },
  mutations,
  actions,
};
