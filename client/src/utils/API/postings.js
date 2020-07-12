import axios from "axios";


export default {
  newPosting: function (posting) {
    return axios.post("/api/post", posting)
  },
};
