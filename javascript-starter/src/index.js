import '../assets/css/style.css';



//dan 1
console.log('Hello by js');

const app = document.getElementById('app');
app.innerHTML = '<h1>Hello by JavaScript Basics</h1>';



//dan 2
const desc = document.getElementById('social');
desc.innerHTML = '<a href="https://www.facebook.com"><img class="social-icon" src="images/fb_ico.png" /></a>';
//Rad sa CSS
//Pravljenje menija


//dan 3
//bootstrap
//Primer staticke web strane

//dan 4
//git


//--------------------------------------------------
//Druga nedelja
//Dan 1
{
    var a = 'Dobar dan';
    console.log(a);
    let b = 'Dobard dan B';
    console.log(b);
}
console.log(a);
//console.log(b);

//Zadatak 1
var naziv = 'ITPizza';
var adresa = 'Bulevar kralja Aleksandra';
var broj = '73';
console.log(naziv + ' ' + adresa + ' ' + broj);
//Izmena - Podaci o vlasniku na isti nacin

//Zadatak 2
//import math?

var poluprecnik = 10;
var povrsinaPice = poluprecnik * poluprecnik * Math.PI;
//drugi nacin
//var povrsinaPice=Math.pow(poluprecnik,2)*Math.PI;
console.log('Povrsina pice je: ' + povrsinaPice);

//Zadatak 3
var depoMalih = 10;
var depoVelikih = 20;
{
    let kolMalih = 3;
    let kolvelikih = 2;
    let ukupnoKauc = kolMalih * depoMalih + kolvelikih * depoVelikih;
    console.log('Ukupno za kauciju: ' + ukupnoKauc);
}
//console.log('Ukupno za kauciju: '+ukupnoKauc);

//Zadatak 4
var dateNow = new Date();

console.log(dateNow);

var hourNow = dateNow.getHours();
var minuteNow = dateNow.getMinutes();
var secNow = dateNow.getSeconds();


console.log(dateNow.getDay());
console.log(hourNow + ':' + minuteNow + ':' + secNow);


//dan 2
//
var dayOfWeek = dateNow.getDay();
var cenaKap = 120;
var kolicinaPice = 5;
var danZaPopust = 5;
/*
dateNow.setDate(6);
console.log(dateNow.getDay());
*/
//== takodje, ali ne :-)
console.log(`Danas je ${dayOfWeek}. dan u nedelji`);
if (dayOfWeek === danZaPopust) {
    let cenaPop = 0.85 * cenaKap;

    console.log('Osnovna cena: ' + kolicinaPice * cenaKap);
    console.log('Cena s popustom: ' + kolicinaPice * cenaPop);
} else {
    console.log('Cena bez popusta: ' + kolicinaPice * cenaKap);
}

//Zadatak 2
var dayOfWeekString;
switch (dayOfWeek) {
    case 0: dayOfWeekString = 'Sunday'; break;
    case 1: dayOfWeekString = 'Monday'; break;
    case 2: dayOfWeekString = 'Tuesday'; break;
    case 3: dayOfWeekString = 'Wednesday'; break;
    case 4: dayOfWeekString = 'Thursday'; break;
    case 5: dayOfWeekString = 'Friday'; break;
    case 6: dayOfWeekString = 'Saturday'; break;

}
console.log(dayOfWeekString);
//Zadatak 5
//Odarditi istoovo ali za mesece
var monthString;
monthString = 'October';
//monthString=dateNow.getMonth();

//Kraj
app.innerHTML += `<h2>Today is ${dayOfWeekString}, ${dateNow.getDay()}. of ${monthString} ${dateNow.getFullYear()}.</h2>`


//Dan3
//Zadatak 1
//Napisati program koji ispsuje brojeve od 1 do 5 u konzoli
//Pitati zasto LET;
{
    for (let brojac = 1; brojac <= 5; brojac += 1) {
        console.log(brojac);
    }
}

//Dan 3
//Zadatak 1
//Napisati sledece program


//Prog 1
//Napisati program koji racuna sumu brojeva od 1 do N;

{
    let N = 10;
    let sumaBr = 0;
    for (let brojac = 1; brojac <= N; brojac++) {
        sumaBr += brojac;
    }
    console.log(`Suma brojeva od 1 do ${N} je ${sumaBr}`);
}

//Smisliti zadatak za vezbu
//+While

//Dan 4
//Funkcije


function saberiBrojeve(granica) {
    let sumaBr = 0;
    for (let brojac = 1; brojac <= granica; brojac++) {
        sumaBr += brojac;
    }
    return sumaBr;
}

{
    
    let N=10;
    let sumaBr = saberiBrojeve(N);
    //saberiBrojeve(N);
    console.log(`Suma brojeva funkcijom od 1 do ${N} je ${sumaBr}`);
}
//Zadaci za vezbanje s funkcijama



//Nedelja 3
//DOM
//Popunjavanje forme i eventi