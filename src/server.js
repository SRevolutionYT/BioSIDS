const express = require('express');
const app = express();
const fs = require('fs');
const multer = require('multer')
const tus = require('tus-node-server')
const nodemon = require('nodemon')
const Jimp = require('jimp');

const server = new tus.Server()
var nome
const nomeador = (req) => {
   nome = Date.now()+'.jpg' 
  return nome 
}


server.datastore = new tus.FileStore({
  path:'/image',
  namingFunction:nomeador,
})

// Jimp.read(`./image/${nome}.jpg`, (err, imagem) => {
//   if (err) throw err;
//   imagem
//     .resize(1280, 720) // resize
//     .greyscale() // set greyscale
//     .write('tratada.jpg'); // save
// });


const uploadApp = express()
uploadApp.all('*',server.handle.bind(server))


app.use('/upload',uploadApp)

app.listen(3333, function () {
  console.log('Servidor aberto na porta: 3333!');
});
