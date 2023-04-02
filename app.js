
let sonuc;

function find() {
    let month = document.getElementById("ay").value;
    let day = Number(document.getElementById("gün").value);

    if (month === "aralık" && day >= 22 || month === "ocak" && day <= 19) {
        sonuc = "Oğlak";
    }
    else if (month === "ocak" && day >= 20 || month === "subat" && day <= 18) {
        sonuc = "Kova";
    }
    else if (month === "subat" && day >= 19 || month === "mart" && day <= 20) {
        sonuc = "Balık";
    }
    else if (month === "mart" && day >= 21 || month === "nisan" && day <= 20) {
        sonuc = "Koç";
    }
    else if (month === "nisan" && day >= 21 || month === "mayıs" && day <= 20) {
        sonuc = "Boğa";
    }
    else if (month === "mayıs" && day >= 21 || month === "haziran" && day <= 20) {
        sonuc = "İkizler";
    }
    else if (month === "haziran" && day >= 21|| month === "temmuz" && day <= 22) {
        sonuc = "Yengeç";
    }
    else if (month === "temmuz" && day >= 23 || month === "agustos" && day <= 22) {
        sonuc = "Aslan";
    }
    else if (month === "agustos" && day >= 23 || month === "eylül" && day <= 22) {
        sonuc = "Başak";
    }
    else if (month === "eylül" && day >= 23 || month === "ekim" && day <= 22) {
        sonuc = "Terazi";
    }
    else if (month === "ekim" && day >= 23 || month === "kasım" && day <= 22) {
        sonuc = "Akrep";
    }
    else if (month === "kasım" && day >= 23 || month === "aralık" && day <= 21) {
        sonuc = "Yay";
    }
    
    document.getElementById("lblSonuc").innerHTML = "Burcunuz : " + sonuc;
}