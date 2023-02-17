const express = require('express');
const {
    insert, list, listBarangById, update, destroy,listByname
} = require('../controller/barang.controller');
// const {
//   insert, list, update, destroy, listUserById, updateByEmail
// } = require('../controller/user.controller');
// const { register, login } = require('../controller/auth.controller');

const jwtAuth = require('../middleware/jwtAuth');
const { isAdmin, isUser } = require('../middleware/authorization');
const deleted = require('../middleware/delete');
const upload = require('../middleware/upload');

const router = express.Router();

router
    .get('/barang/list', list)
    .get('/barang/list/:id_barang', listBarangById)
    .get('/barang/list/search/:nama_barang', listByname)
    .post('/barang/add',upload, insert)
    .put('/barang/update/:id_barang',deleted,upload, update)
    .delete('/barang/delete/:id_barang',deleted, destroy);
    
// router
//   .get('/user/list', jwtAuth, isAdmin, list)
//   .get('/user/list/:id_user', listUserById)
//   .post('/user/add', insert)
//   .put('/user/update/:id_user', deleted.remove, upload, update)
//   .put('/user/update/:email', updateByEmail)
//   // .delete('/user/delete/:id_user', destroy)
//   .delete('/user/delete/:id_user', deleted.remove, destroy)

//   .post('/user/register', register)
//   .post('/user/login', login);

module.exports = router;
