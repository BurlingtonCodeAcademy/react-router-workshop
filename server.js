const express = require('express')

const app = express()

const port = process.env.port || 5000

const cors = require("cors");

//middleware to set up the static server to access public only
app.use(express.static("public"));

//enables CORS so our front end and server can communicate with each other
app.use(cors());

//middleware to make reading URL encoded post bodies easier to read
app.use(express.urlencoded({ extended: true }));

//creating the API route
app.get("/api", (req, res) => {
    //sending the json to this API route
    res.sendFile(__dirname + "/api/walletloc.json")
})


app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });