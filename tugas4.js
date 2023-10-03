function TinggiBadan() {
  var x = 170;
  var y = 170;
  var z = 170;
  if (x > y) {
    if (x > z) {
      console.log("Tinggi badan siswa X lebih tinggi dari semua siswa");
    } else {
      console.log("Tinggi badan siswa Z lebih tinggi dari siswa X & Y");
    }
  } else {
    if (x < z) {
      console.log("Tinggi badan siswa X lebih Kecil dari semua siswa");
    } else {
      console.log("Tinggi badan siswa Y lebih tinggi dari semua siswa");
    }
  }
}
TinggiBadan();
