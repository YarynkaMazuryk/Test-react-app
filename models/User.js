const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// this will be our data base's data structure
const UserSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    about: {
        type: String,
        required: true
    },
    status: Boolean
}, { collection: 'users' });

// export the new Schema so we could modify it using Node.js
module.exports = User = mongoose.model("User", UserSchema);