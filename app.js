//Declaration of Packages
const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js"); //Requiring our created Date Module

const app = express();

const items = ["Coffee", "Tea", "Snacks"]; //This is declared as empty array globally. because, this item has to be rendered in res.render

const workItems = []; //This Empty list is declared for Work page

app.set("view engine", "ejs"); //Setting EJS for rendering

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

//Route 1 Home (GET)
app.get("/", function(req, res) {

    const day = date.getDate(); //Calling the function here from Date Module
    res.render("list", { title: day, newListItems: items });

});

//Route 1 & Route 2 (POST)
app.post("/", function(req, res) {

    const item = req.body.newItem; //parsing input values into item

    //if the submit value of button is "Work" then items pushed to Work page
    if (req.body.list === "Work") {
        workItems.push(item);
        res.redirect("/work") //Redirected towards Route 2 Work Page

        //if submit value of button is not "Work" then items pushed to Home page
    } else {
        items.push(item);
        res.redirect("/"); //Redirected towards Route 1 Home Page
    }

});

//Route 2 Work (GET)
app.get("/work", function(req, res) {
    res.render("list", { title: "Work List", newListItems: workItems });
});

// Route 3 About (GET)
app.get("/about", function(req, res) {
    res.render("about");
})


app.listen(3000, function() {
    console.log("Server working at Port 3000");
});