import axios from 'axios';

export default {
  async nowPlaying({ commit }) {
    const res = await axios
      .get('movie/now_playing')
      // .get('movie/531454/videos)
      .catch((error) => {
        throw new Error(`API ${error}`);
      });
    const x = await axios.all(
      res.data.results
        .filter((_, i) => i < 3)
        .map((el, i) =>
          axios.get(`movie/${el.id.toString()}`).then((e) => ({
            ...e.data,
            myVid: `https://image.tmdb.org/t/p/original${e.data.backdrop_path}`,
            show: i === 0 ? true : false,
          }))
        )
    );
    commit('NOW_PLAYING', x);
  },
  async recommended({ commit }) {
    const res = await axios.get('movie/top_rated').catch((error) => {
      throw new Error(`API ${error}`);
    });
    const x = await axios.all(
      res.data.results
        .filter((_, i) => i < 12)
        .map((el) => axios.get(`movie/${el.id.toString()}`).then((e) => e.data))
    );
    commit('RECOMMENDED', x);
  },
  async getVideo({ commit }, payload) {
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
  async popular({ commit }) {
    const res = await axios.get('movie/popular').catch((error) => {
      throw new Error(`API ${error}`);
    });
    const x = await axios.all(
      res.data.results
        .filter((_, i) => i < 12)
        .map((el) => axios.get(`movie/${el.id.toString()}`).then((e) => e.data))
    );
    commit('POPULAR', x);
  },
};
