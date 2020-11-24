import axios from "axios";


const token =
  "BQAOTOQ0K_JL-xediv8aGgeXm0uv0kJspyrXmkMPPOhc0CSppIWaS1VN9XXZRbX3D1hjaYDKnYznNjjk-Ec";
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

