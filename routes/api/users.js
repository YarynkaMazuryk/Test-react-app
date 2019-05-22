const express = require('express');
const router = express.Router();

//User Model
const User = require('../../models/User');

// @route GET api/users
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

// @route POST api/users
// @desc put new user to DB
router.post("/putData", (req, res) => {
    const { name, email, status, about} = req.body;
    if (!name && !email && !status && !about) {
        return res.json({
            success: false,
            error: "INVALID INPUTS"
        });
    } else  {
        let user = new User({
            name: name,
            email: email,
            status: status,
            about: about
        });
        user.save(err => {
            if (err) return res.json({ success: false, error: 'Something went wrong' });
            return res.json({ success: true, newUser: user});
        });
    }
});


// @route DELETE api/users
// @desc delete user by ID
router.delete("/deleteUser", (req, res) => {
    const { id } = req.body;
    User.findOneAndDelete(id, err => {
        if (err) return res.send(err);
        // res.status(404).json({success: false})
        return res.json({ success: true, id: id });
    });
});

module.exports = router;