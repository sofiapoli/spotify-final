import axios from "axios";


const token =
  "BQA3Qw_31nRYNBdyHYAqbAh5U5hSB7DMLN8-UMcLKpElflww8WJErTFZG6katMeiLK2Vayztp8oENu8G_5M";
const headers = {
  Authorization: "Bearer " + token,
};

export const spotify = {
  get(url) {
    return axios.get("https://api.spotify.com/v1/" + url, {
      headers,
    });
  },
};

