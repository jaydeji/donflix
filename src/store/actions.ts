import axios from 'axios';
import { ActionContext } from 'vuex';
import { State } from './index';

export default {
  async nowPlaying({ commit }: ActionContext<State, any>) {
    const res = await axios
      .get('movie/now_playing')
      // .get('movie/531454/videos)
      .catch((error) => {
        throw new Error(`API ${error}`);
      });
    const x = await axios.all(
      res.data.results
        .filter((_: any, i: number) => i < 3)
        .map((el: any, i: number) =>
          axios.get(`movie/${el.id.toString()}`).then((e) => ({
            ...e.data,
            myVid: `https://image.tmdb.org/t/p/original${e.data.backdrop_path}`,
            show: i === 0 ? true : false,
          }))
        )
    );
    commit('NOW_PLAYING', x);
  },
  async recommended({ commit }: ActionContext<State, any>) {
    const res = await axios.get('trending/movie/day').catch((error) => {
      throw new Error(`API ${error}`);
    });
    const x = await axios.all(
      res.data.results
        .filter((_: any, i: number) => i < 12)
        .map((el: any) =>
          axios.get(`movie/${el.id.toString()}`).then((e) => e.data)
        )
    );
    commit('RECOMMENDED', x);
  },

  async getVideo({ commit }: ActionContext<State, any>, payload: any) {
    const res = await axios
      .get(`movie/${payload.url}/videos`)
      .catch((error) => {
        throw new Error(`API ${error}`);
      });
    commit('VIDEO_URL', {
      data: res.data.results?.[0]?.key,
      id: payload.number,
    });
  },

  async getImages({ commit }: ActionContext<State, any>, payload: any) {
    const res = await axios.get(`movie/${payload}/images`).catch((error) => {
      throw new Error(`API ${error}`);
    });
    commit('IMAGES', {
      data: res.data.backdrops
        ?.filter((_: any, i: number) => i < 6)
        .map((e: any) => {
          return `https://image.tmdb.org/t/p/original${e.file_path}`;
        }),
    });
  },

  async popular({ commit }: ActionContext<State, any>) {
    const res = await axios.get('movie/popular').catch((error) => {
      throw new Error(`API ${error}`);
    });
    const x = await axios.all(
      res.data.results
        .filter((_: any, i: number) => i < 12)
        .map((el: any) =>
          axios.get(`movie/${el.id.toString()}`).then((e) => e.data)
        )
    );
    commit('POPULAR', x);
  },

  async single({ commit }: ActionContext<State, any>, id: string | number) {
    const res = await axios.get(`movie/${id}`).catch((error) => {
      throw new Error(`API ${error}`);
    });
    commit('SINGLE', res.data);
  },

  async similar({ commit }: ActionContext<State, any>, id: string | number) {
    const res = await axios.get(`movie/${id}/similar`).catch((error) => {
      throw new Error(`API ${error}`);
    });
    commit('SIMILAR', res.data);
  },

  async searchMovie(
    { commit }: ActionContext<State, any>,
    searchString: string
  ) {
    const res = await axios
      .get('search/movie?query=' + searchString)
      .catch((error) => {
        throw new Error(`API ${error}`);
      });
    commit('SEARCHMOVIE', res.data);
  },
};
