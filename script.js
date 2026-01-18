let kuota = 50
let total = 0

document.getElementById("form").addEventListener("submit", function(e) {
  e.preventDefault()

  let nama = document.getElementById("nama").value.trim()
  let email = document.getElementById("email").value.trim()
  let hp = document.getElementById("hp").value.trim()
  let kategori = document.getElementById("kategori").value
  let pesan = document.getElementById("pesan")

  if (!nama || !email || !hp || !kategori) {
    pesan.textContent = "Semua data wajib diisi"
    pesan.style.color = "red"
    return
  }

  if (!email.includes("@")) {
    pesan.textContent = "Email tidak valid"
    pesan.style.color = "red"
    return
  }

  if (!/^[0-9]+$/.test(hp)) {
    pesan.textContent = "Nomor HP hanya boleh angka"
    pesan.style.color = "red"
    return
  }

  if (total >= kuota) {
    pesan.textContent = "Pendaftaran ditutup, kuota sudah penuh"
    pesan.style.color = "red"
    return
  }

  total++
  document.getElementById("jumlah").textContent = total

  let item = document.createElement("div")
  item.textContent = nama + " - " + kategori
  document.getElementById("daftar").appendChild(item)

  pesan.textContent = "Pendaftaran berhasil"
  pesan.style.color = "green"

  document.getElementById("form").reset()
})
