// get reference to DB
const db = require("../../models");
const { sequelize } = require("../../models");

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

  findDonations: (req, res, next) => {
    console.log("this is req body:" + req.params.userName);
    db.Postings.findAll({
      where: { userName: req.params.userName },
      order: [["createdAt", "DESC"]],
    })
      .then((donations) => res.json(donations))
      .catch((err) => {
        res.status(401);
        next(err);
      });
  },
  findAll: (req, res, next) => {
    db.Postings.findAll({ order: [["createdAt", "DESC"]] })
      .then((donations) => res.json(donations))
      .catch((err) => {
        res.status(401);
        next(err);
      });
  },

  findTotalDonationsNumber: (req, res, next) => {
    db.Postings.findAll({
      where: {userName: req.params.userName},
      attributes: ["donatedItemCategory", [sequelize.fn("sum", sequelize.col("quantity")), "total"],],
      group: ["Postings.donatedItemCategory"]
    })
      .then((donations) => res.json(donations))
      .catch((err) => {
        res.status(401);
        next(err);
      });
  },
};

