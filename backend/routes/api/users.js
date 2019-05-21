const express = require('express');
const router = express.Router();

//User Model
const User = require('../../models/User');

// @route GET api/items
// @desc Get all users
router.get("/getUsers", (req, res) => {
    User.find((err, users) => {
        if (err) {
            return res.json({success: false, error: 'Error' });
        } else {
            return res.json( { success: true, users: users } );
        }
    });
});


module.exports = router;