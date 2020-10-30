import axios from "axios";
const token =
  "BQAJz82A9aX3-4GbeB_Js4RFJBJnMceqks3NF91OdxIeZdjPowpogJqwcio9zMDjKftV0er7-WY8mDF6Gm4";
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

/*export const spotify = axios.create({
  baseURL: "https://api.spotify.com/v1/",

  headers: {
    "Access-Control-Allow-Origin": "*",
    Autorization: "Bearer " + token,
  },
});*/
