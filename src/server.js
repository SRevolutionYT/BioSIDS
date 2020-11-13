const express = require("express");
const app = express();
const fs = require("fs");
const sharp = require("sharp");

app.use("/image", (req, res) => {
  let nome = "" + Date.now();
  const wstream = fs.createWriteStream(`./image/${nome}.jpg`);
  req.pipe(wstream);
  wstream.on("finish", () => {
    sharp(`./image/${nome}.jpg`)
      .resize(720, 480)
      .toFile(`./tratadas/tratada.jpg`)
      .then((data) => {
        res.send("resposta"),
          console.log("oi"),
          fs.unlink(`./image/${nome}.jpg`, (err) => {
            console.log(err);
          });
      })
      .catch((err) => {
        console.log(err);
      });
  });
  console.log("Vitão");
});

app.listen(3333, function () {
  console.log("Servidor aberto na porta: 3333!");
});
