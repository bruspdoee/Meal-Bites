import axios from "axios";


export default {
  newPosting: function (posting) {
    return axios.post("/api/post", posting)
  },
  findDonations: function (posting) {
    return axios.get("/api/post/getdonations/" + posting.userName)
  },
  findAll: function (posting) {
    return axios.get("/api/post/getall/", posting)
  }


};
