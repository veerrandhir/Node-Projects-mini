import Color from "color";
import express from "express";
import { error } from "node:console";
// import argv from "argv";

const app = express();
const PORT = 4900;
// Create server great
// console.log(argv());

app.listen(PORT, () => {
  console.log("Succesfully server started");
});
app.get("/", (req, res) => {
  //   console.log(app.apply()); Not useful
  // console.log(app); Checking wether it's working or not
  res.send("Server is listning");
});
