import axios from "axios";
// import { claimDonation } from "../../../../routes/controllers/postings";

export default {
  newPosting: function (posting) {
    return axios.post("/api/post", posting);
  },
  findDonations: function (posting) {
    return axios.get("/api/post/getdonations/" + posting.userName);
  },
  findTotalDonationsNumber: function (posting) {
    return axios.get("/api/post/getdonationsnumber/" + posting.userName);
  },

  findAll: function (posting) {
    return axios.get("/api/post/getall/", posting);
  },

  claimDonation: function (posting) {
    return axios.get(
      "/api/post/claim/" + posting.donatedItem + "/" + posting.userName
    );
  },
};
