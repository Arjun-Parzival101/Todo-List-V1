const express = require("express");
const bodyParser = require("body-parser");

const app = express();

let items = ["Coffee", "Tea", "Snacks"]; //This is declared as empty array globally. because, this item has to be rendered in res.render

app.set("view engine", "ejs");

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function(req, res) {

    let today = new Date();

    let options = {
        weekday: "long",
        month: "long",
        day: "numeric",
    };

    let day = today.toLocaleDateString("en-US", options);

    res.render("list", { dayName: day, newListItems: items }); //Line 36 is included here, therefore that value is rendered here

});

app.post("/", function(req, res) {

    let item = req.body.newItem; //parsing input values into letiable item
    items.push(item); //pushes items into array

    // res.render("list", {newListItem: newItem});    This is commented because, we cannot have more than 1 render statement CHECK LINE NO: 22 & 38

    res.redirect("/"); //This redirects the array to rendering

});

app.listen(3000, function() {
    console.log("Server working at Port 3000");
});