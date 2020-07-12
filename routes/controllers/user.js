// get reference to DB 
const db = require('../../models');
module.exports = {

   // login user
	login: (req, res, next) => {
      
      console.log(req.body);
      //validate request
		if (req.body.userName && req.body.password) {   
            
            // check error (including no user)
            if (!req.user) {
               const err =  new Error('incorrect credentials, no user found')
               next(err)

            // user found
				} else {
               console.log(`login: `, req.user);
               
               // save user to session to match on login
               req.session.user = req.userName;
					return res.json(req.userName);
				}
         // });

      // request missing fields
		} else {
			var err = new Error('All fields required.');
			err.status = 400;
			return next(err);
		}
   },

   // signup user
   create: (req, res, next) => {
      
      // create user in db
      db.User.create({
         firstName: req.body.firstName,
         lastName: req.body.lastName,
         userName: req.body.userName,
         address: req.body.address,
         email: req.body.email,
         password: req.body.password
      })

      // redirect to login
      .then(user =>  res.json(user))
      .catch(err => {
            res.status(401);
            next(err)
      });
   },
      
   signout: (req, res) => {
      console.log('signed out:', req.user.email )
      // destroy session
      req.session.destroy();
      // clear cookie on the client side
      res
         .status(200)
         .clearCookie('__id')
         .json({msg:'successfuly signed out'});
   },
   
   // authenticate user
	authenticate: (req, res, next) => {
      req.user ? res.json(req.user) : res.status(204).send();
   },
};
