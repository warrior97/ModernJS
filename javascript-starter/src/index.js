import '../assets/css/style.css';
import '../assets/img/fb_ico.png';



//dan 1
console.log('Hello by js');

const app = document.getElementById('app');
app.innerHTML = '<h1>Hello by JavaScript Basics</h1>';



//dan 2
const desc= document.getElementById('social');
desc.innerHTML='<a href="https://www.facebook.com"><img class="social-icon" src="images/fb_ico.png" /></a>';
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
    let b ='Dobard dan B';
    console.log(b);
}
console.log(a);
//console.log(b);

//Zadatak 1
var naziv='ITPizza';
var adresa='Bulevar kralja Aleksandra';
var broj='73';
console.log(naziv+' '+adresa+' '+broj);
//Izmena - Podaci o vlasniku na isti nacin

//Zadatak 2
//import math?

var poluprecnik=10;
var povrsinaPice=poluprecnik*poluprecnik*Math.PI;
//drugi nacin
//var povrsinaPice=Math.pow(poluprecnik,2)*Math.PI;
console.log('Povrsina pice je: '+povrsinaPice);

//Zadatak 3
var depoMalih=10;
var depoVelikih=20;
{
    let kolMalih=3;
    let kolvelikih=2;
    let ukupnoKauc=kolMalih*depoMalih+kolvelikih*depoVelikih;
    console.log('Ukupno za kauciju: '+ukupnoKauc);
}
//console.log('Ukupno za kauciju: '+ukupnoKauc);

//Zadatak 4
var dateNow=new Date();

console.log(dateNow);

var hourNow=dateNow.getHours();
var minuteNow=dateNow.getMinutes();
var secNow=dateNow.getSeconds();


console.log(dateNow.getDay());
console.log(hourNow+':'+minuteNow+':'+secNow);


//dan 2
//
var dayOfWeek=dateNow.getDay();
var cenaKap=120;
var kolicinaPice=5;
var danZaPopust=5;
/*
dateNow.setDate(6);
console.log(dateNow.getDay());
*/
//== takodje, ali ne :-)
console.log(`Danas je ${dayOfWeek}. dan u nedelji`);
if(dayOfWeek===danZaPopust){
    let cenaPop=0.85*cenaKap;
    
    console.log('Osnovna cena: '+kolicinaPice*cenaKap);
    console.log('Cena s popustom: '+kolicinaPice*cenaPop);
}else{
    console.log('Cena bez popusta: '+kolicinaPice*cenaKap);
}

//Zadatak 2
var dayOfWeekString;
switch(dayOfWeek){
    case 1:dayOfWeekString='monday';
}
console.log(dayOfWeekString);


