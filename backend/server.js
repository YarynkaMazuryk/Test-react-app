const mongoose = require('mongoose');
const express = require('express');
var cors = require('cors');
const bodyParser = require('body-parser');

const users = require('./routes/api/users');


const API_PORT = process.env.PORT || 3001;
const app = express();
app.use(cors());

// MongoDB database url
const dbRoute = "mongodb+srv://yaryna:TSDszoYnuk3JLoau@cluster0-leq3i.mongodb.net/testApp?retryWrites=true";

// connects our back end code with the database
 mongoose
    .connect(dbRoute, { useNewUrlParser: true })
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.log("MongoDB connection error", err));


// (optional) only made for logging and
// bodyParser, parses the request body to be a readable json format
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


// this method removes existing data in our database
// router.delete("/deleteData", (req, res) => {
//     const { id } = req.body;
//     UserShema.findOneAndDelete(id, err => {
//         if (err) return res.send(err);
//         return res.json({ success: true });
//     });
// });


// this method adds new data in our database
// router.post("/putData", (req, res) => {
//     let data = new UserShema();
//     const { name, email, status, about} = req.body;
//     if (!name && !email && !status && !about) {
//         return res.json({
//             success: false,
//             error: "INVALID INPUTS"
//         });
//     }
//     data.name = name;
//     data.email = email;
//     data.status = status;
//     data.about = about;
//     data.save(err => {
//         if (err) return res.json({ success: false, error: err });
//         return res.json(data);
//     });
// });


// append /api/users for our http requests
app.use("/api/users", users);

// launch our backend into a port
app.listen(API_PORT, () => console.log(`Listening on port ${API_PORT}`));