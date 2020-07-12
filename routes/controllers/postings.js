// get reference to DB
const db = require("../../models");

module.exports = {
  newPosting: (req, res, next) => {
    // create user in db
    db.Postings.create({
      userName: req.body.userName,
      donatedItem: req.body.donatedItem,
      donatedItemCategory: req.body.donatedItemCategory,
      quantity: req.body.quantity,
      comments: req.body.comments,
    })

      // redirect to login
      .then((posting) => res.json(posting))
      .catch((err) => {
        res.status(401);
        next(err);
      });
  },
};
