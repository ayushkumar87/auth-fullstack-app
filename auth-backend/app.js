const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const authRoutes=require("./routes/authRoutes")

const app = express();

// MIDDLEWARE
app.use(cors());
app.use(express.json());

// CONNECT DB
mongoose.connect("mongodb://127.0.0.1:27017/authDB")
.then(()=> console.log("MongoDB Connected"))
.catch(err => console.log(err));

// TEST ROUTE
app.get("/", (req, res) => {
    res.send("Auth API Working");
});

app.use("/api/auth",authRoutes)

// START SERVER
app.listen(5000, () => {
    console.log("Server running on port 5000");
});