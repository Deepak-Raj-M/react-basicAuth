var express = require('express');
var router = express.Router();
var baUsers = require('../db/ba_users');

/* GET home page. */
router.get('/',async function(req, res, next) {
	var users = await baUsers.create({usernmae:'deepak',email:'deepak@osiztech.com',password:'Crusader@123'});
	console.log(users);
  res.json({ status:true, message:'Hello user' });
});

module.exports = router;
