// const db = require('../config/db');
const db = require('../config/db');

const barangModel = {
    insert: (nama_barang, harga_beli, harga_jual, stok, foto_barang) => new Promise((resolve, reject) => {
        db.query(`INSERT INTO barang (nama_barang, harga_beli, harga_jual, stok, foto_barang) VALUES ('${nama_barang}', ${harga_beli}, ${harga_jual}, ${stok}, '${foto_barang}')`, (err, result) => {
            if (err) {
                reject(err);
            } else {
                resolve(result);
            }
        });
    }),
    list: (limit, offset) => new Promise((resolve, reject) => {
        db.query(`SELECT * FROM barang LIMIT ${limit} OFFSET ${offset}`, (err, result) => {
            if (err) {
                reject(err);
            } else {
                resolve(result);
            }
        });
    }),
    listBarangById: (id_barang) => new Promise((resolve, reject) => {
        db.query(`SELECT * FROM barang WHERE id_barang = ${id_barang}`, (err, result) => {
            if (err) {
                reject(err);
            } else {
                resolve(result);
            }
        });
    }),
    update: (id_barang, nama_barang, harga_beli, harga_jual, stok, foto_barang) => new Promise((resolve, reject) => {
        db.query(`UPDATE barang SET nama_barang = '${nama_barang}', harga_beli = ${harga_beli}, harga_jual = ${harga_jual}, stok = ${stok}, foto_barang = '${foto_barang}' WHERE id_barang = ${id_barang}`, (err, result) => {
            if (err) {
                reject(err);
            } else {
                resolve(result);
            }
        });
    }),
    destroy: (id_barang) => new Promise((resolve, reject) => {
        db.query(`DELETE FROM barang WHERE id_barang = ${id_barang}`, (err, result) => {
            if (err) {
                reject(err);
            } else {
                resolve(result);
            }
        });
    }),

    // listByname
    listByname: (nama_barang) => new Promise((resolve, reject) => {
        db.query(`SELECT * FROM barang WHERE lower(nama_barang) LIKE lower ('%${nama_barang}%')`, (err, result) => {
            if (err) {
                reject(err);
            } else {
                resolve(result);
            }
        });
    })
};
module.exports = barangModel;

