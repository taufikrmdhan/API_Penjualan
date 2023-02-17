create database db_penjualan;

create table barang(
    id_barang serial primary key,
    nama_barang varchar(50) unique,
    harga_beli integer,
    harga_jual integer,
    stok integer,
    foto_barang text
)