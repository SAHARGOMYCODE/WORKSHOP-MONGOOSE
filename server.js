const express = require("express");
const mongoose = require("mongoose");
const app = express();
mongoose.connect("mongodb://localhost:27017/films", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const filmsSchema = new mongoose.Schema({
  name: String,
  date: Number,
  acteur: String,
});
const Film = mongoose.model("Film", filmsSchema);
const Alice = new Film({
  name: "Alice",
  date: "2015",
  acteur: "jhonny deep",
});
const planete_des_singes = new Film({
  name: "planete_des_singes",
  date: "2008",
  acteur: "personne",
});
// Alice.save();
// planete_des_singes.save();

Film.updateOne({ name: "Alice" }, { name: "Titanic" }, function (err) {
  if (err) {
    console.log(err);
  } else {
    console.log("tout est modifier");
  }
});

// Film.deleteMany({ name: "Titanic" }, function (err) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("tout est supprimer");
//   }
// });
// Film.find({ name: "aventure" }, function (err, films) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(films);
//   }
// });

app.listen(3000, function () {
  console.log("server is running 4000");
});
