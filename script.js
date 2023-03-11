const akhir = document.querySelector(".akhir");
const slide = document.querySelector("#slide");
const bg = document.querySelector("body");

akhir.innerHTML = slide.value;
slide.addEventListener("input", () => {
  akhir.innerHTML = slide.value;
});

const warna = document.querySelector("#warna");
const nilai = document.querySelector(".nil");
nilai.innerHTML = warna.value;
warna.addEventListener("input", () => {
  nilai.style.color = warna.value;
  bg.style.backgroundColor = warna.value;
  nilai.innerHTML = warna.value;
});
const showAlert = (text) => alert(text);
const p = document.querySelector("#p1");
p.addEventListener("keyup", (e) => {
  if (e.keyCode == 32 || e.keyCode == 13) {
    showAlert("alert ini tertrigger melalui enter atau spasi");
  }
});
