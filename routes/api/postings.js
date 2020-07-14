// ! you can chain a .post().put() and so on in every route.

const router = require("express").Router();
const postingsFunctions = require("../controllers/postings");

router.route("/").post(postingsFunctions.newPosting);

router.route("/getdonations/:userName").get(postingsFunctions.findDonations);



module.exports = router;
