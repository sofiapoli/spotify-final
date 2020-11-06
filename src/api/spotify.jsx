import axios from "axios";


const token =
  "BQCOX8dzbxzewq87OqCgoVJKtUG8cQ5yzjGnozxQ_KjJORcIFx6i--VcUJl8WMwfVu1O90e7x7BAeuoOw1A";
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

