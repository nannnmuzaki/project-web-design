function totalHarga() {
    const jumlahTiket = document.getElementById('jumlah-tiket').value;
    const hargaTiket = 40000;
    const jumlahHarga = jumlahTiket * hargaTiket;

    document.getElementById('total-harga').textContent = `Rp. ${jumlahHarga.toLocaleString()}`;
}