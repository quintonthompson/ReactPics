import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com/",
  headers: {
    Authorization:
      "Client-ID a027161e67ac939d4a04fe456794d6bd72a73c7f03a07a207cf364b8e37424b1"
  }
});
