const time = new Date().getHours();
let greeting;
if (time < 10) {
  greeting = "Selamat Pagi";
} else if (time < 20) {
  greeting = "Selamat Malam";
} else {
  greeting = "Selamat Sore";
}
document.getElementById("if").innerHTML = greeting;


let text;
switch (new Date().getDay()) {
  case 6:
    text = "Hari ini adalah Hari Minggu";
    break;
  case 0:
    text = "Hari ini adalah Hari Sabtu";
    break;
  default:
    text = "Meliat Hari Akhir Pekan";
}
document.getElementById("switch").innerHTML = text;

let teks = "";

for (let i = 1; i < 11; i++) {
  teks += "Ini Nomor " + i + "<br>";
}

document.getElementById("ForLoop").innerHTML = teks;

let satu = ""
let i = 1;

do {
  satu += "<br>Nomor ini " + i;
  i++;
}
while (i < 11);  

document.getElementById("Dowhileloop").innerHTML = satu;

function keCelsius(f) {
    return (5/9) * (f-32);
  }
  
  let value = keCelsius(770);
document.getElementById("function").innerHTML = value;