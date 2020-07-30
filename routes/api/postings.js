// ! you can chain a .post().put() and so on in every route.

const router = require("express").Router();
const postingsFunctions = require("../controllers/postings");

router.route("/").post(postingsFunctions.newPosting);

router.route("/getdonations/:userName").get(postingsFunctions.findDonations);

router
  .route("/getdonationsnumber/:userName")
  .get(postingsFunctions.findTotalDonationsNumber);

router.route("/getall").get(postingsFunctions.findAll);

router.route("/claim/:id/:userName").get(postingsFunctions.claimDonation);

module.exports = router;
