const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const router = require("./router")
const dotenv = require("dotenv");
dotenv.config();

// App Initialization

const app = express();

// Middle Wares

app.use(cors);
app.use(express.json());

// Database Connection
// const DATABASE_URL = "mongodb+srv://Abdulmuizz7:amazing123@workoutdb.7hwmbhx.mongodb.net/WorkoutDB?retryWrites=true&w=majority";
// const PORT = 5000;

mongoose.connect(process.env.DATABASE_URL, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => {
        console.log("Connected To Database")
        app.listen(process.env.PORT, () => {
            console.log(`connected to port ${process.env.PORT}`)
        });
    })
    .catch((err) => console.log(err));


// Router Initialization

app.use("api/workouts", router);

