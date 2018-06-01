const express = require("express");
const bodyParser = require("body-parser");
const controllers = require("./controller");
const app = express();
app.use(bodyParser.json());
const port = 4000;

// dont need full crud. will need get post and delete not post
//
app.get("/api/display", controllers.displayAllListings); //to display all house listings
app.post("/api/add", controllers.addNewListing); //to add a new listing
app.delete("api/delete/id", controllers.deleteListing); //delete listing

app.listen(port, () => console.log("Server is Listening " + port));
