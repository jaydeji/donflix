import axios from 'axios';

export default {
  async nowPlaying({ commit }) {
    const res = await axios
      .get('movie/now_playing')
      // .get('movie/531454/videos)
      .catch((error) => {
        throw new Error(`API ${error}`);
      });
    commit('NOW_PLAYING', res.data);
  },
};
