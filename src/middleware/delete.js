const fs = require('fs');
const path = require('path');
// const { listUserById } = require('../model/barang');
// const { listRecipeById } = require('../model/recipe.model');
const { listBarangById } = require('../model/barang.model');

const remove = async (req, res, next) => {
  // try {
  //   const { id_user } = req.params;
  //   const { rows: [user] } = await listUserById(id_user);
  //   const { image } = user;
  //   fs.unlink(`./public/${image}`, (err) => {
  //     if (err) {
  //       console.log(err);
  //     } else {
  //       next();
  //     }
  //   });
  // } catch (err) {
  //   res.json(err);
  // }
  try {
    const { id_barang } = req.params;
    const { rows: [barang] } = await listBarangById(id_barang);
    const { foto_barang } = barang;
    fs.unlink(`./public/${foto_barang}`, (err) => {
      if (err) {
        console.log(err);
      } else {
        next();
      }
    });
  } catch (err) {
    res.json(err);
  }
};

module.exports = remove;