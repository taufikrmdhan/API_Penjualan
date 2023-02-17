const multer = require('multer');

// import path
const path = require('path');
const db = require('../config/db');

// manajemen file
const multerUpload = multer({
  storage: multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, './public');
    },
    filename: (req, file, cb) => {
      const ext = path.extname(file.originalname);
      const filename = `${Date.now()}${ext}`;
      cb(null, filename);
    },
  }),
  fileFilter: (req, file, cb) => {
    const ext = path.extname(file.originalname);
    if (ext === '.jpg' || ext === '.png') {
      cb(null, true);
    } else {
      const error = {
        message: 'file type not supported',
      };
      cb(error, false);
    }
  },
  limits: {
    // file maksimal 100kb
    fileSize: 100000,
  },
});

const upload = (req, res, next) => {
  const multerSingle = multerUpload.single('foto_barang');
  multerSingle(req, res, (err) => {
    if (err) {
      res.json({
        message: 'error',
        error: err,
      });
    } else {
      next();
    }
  });
};
module.exports = upload;
