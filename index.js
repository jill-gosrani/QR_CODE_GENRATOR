/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/
// import inquirer from 'inquirer';
import qr from "qr-Image";
import express from "express";
import bodyParser from "body-parser";

const app = express();
const PORT = 3000;
app.use(bodyParser.urlencoded({extended:true}));
app.get("/", (req, res)=>{
  res.render("index.ejs");
});

app.post("/submit", (req, res)=>{
  const qrLink = req.body["links"];
  var qr_svg = qr.imageSync(qrLink);
  var qrBase64 = qr_svg.toString('base64');
  res.render("index.ejs", {
    img: qrBase64
  });
});

app.listen(PORT,()=>{
  console.log(`Listning to port ${PORT}`);
});