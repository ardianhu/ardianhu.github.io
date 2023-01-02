/*function main() {
    document.getElementById("main").style.display = "block";
    document.getElementById("section1").style.display = "none";
    document.getElementById("section2").style.display = "none";
    document.getElementById("section3").style.display = "none";
}
function satu() {
    document.getElementById("section1").style.display = "block";
    document.getElementById("main").style.display = "none";
    document.getElementById("section2").style.display = "none";
    document.getElementById("section3").style.display = "none";
}
function dua() {
    document.getElementById("section2").style.display = "block";
    document.getElementById("section1").style.display = "none";
    document.getElementById("main").style.display = "none";
    document.getElementById("section3").style.display = "none";
}
function tiga() {
    document.getElementById("section3").style.display = "block";
    document.getElementById("section1").style.display = "none";
    document.getElementById("section2").style.display = "none";
    document.getElementById("main").style.display = "none";
}*/


function showhide() {
  var x = document.getElementById("satu");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
var utama = document.getElementById("main");

    var lingkaran = document.getElementById("lingkaran");


function main() {
    var satu = document.getElementById("section1");
    var dua = document.getElementById("section2");
    var tiga = document.getElementById("section3");
    var main = document.getElementById("main");
    if (main.style.display === "none") {
        main.style.display = "block";
        satu.style.display = "none";
        dua.style.display = "none";
        tiga.style.display = "none";
        lingkaran.classList.add("z-10");
        
    }
}

function satu() {
    var satu = document.getElementById("section1");
    var dua = document.getElementById("section2");
    var tiga = document.getElementById("section3");
    if (satu.style.display === "none") {
        satu.style.display = "block";
        dua.style.display = "none";
        tiga.style.display = "none";
        utama.style.display = "none";
        lingkaran.classList.remove("z-10");
    }
}
function dua() {
    var dua = document.getElementById("section2");
    var satu = document.getElementById("section1");
    var tiga = document.getElementById("section3");
    if (dua.style.display === "none") {
        dua.style.display = "block";
        satu.style.display = "none";
        tiga.style.display = "none";
        utama.style.display = "none";
        lingkaran.classList.remove("z-10");
    }
}
function tiga() {
    var tiga = document.getElementById("section3");
    var dua = document.getElementById("section2");
    var satu = document.getElementById("section1");
    if (tiga.style.display === "none") {
        tiga.style.display = "block";
        dua.style.display = "none";
        satu.style.display = "none";
        utama.style.display = "none";
        lingkaran.classList.remove("z-10");
    }
}