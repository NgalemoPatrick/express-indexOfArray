// load express
const express = require("express");

// reate our express app
const app = express();

// My dataset
const car = [
    {name:'Patrick',car:'infinity'},
    {name:'Jean',car:'Honda'},
    {name:'Paul',car:'Toyo'},
    {name:'Pierre',car:'Moto'},
    {name:'Matta',car:'Velo'},
    {name:'Moo',car:'fer'},
];

const port = 3006;
// Define a root route directly on app
app.get("/:indexOfCarArray", (req, res) => {
  res.send(car[req.params.indexOfCarArray]);
});

// Tell the app to listen on port 3006
app.listen(port, function () {
  console.log("Listening on port 3006");
});
