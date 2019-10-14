//import '../assets/css/style.css';



//dan 1
console.log('Hello by js');

const app = document.getElementById('app');
app.innerHTML = '<p>Hello to BootcampPizza by JavaScript Basics</p>';



//dan 2
const desc = document.getElementById('social');
desc.innerHTML = '<a href="https://www.facebook.com"><img class="social-icon" src="assets/images/fb_ico.png" /></a>';
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
    default: dayOfWeekString = 'ERROR!';

}
console.log(dayOfWeekString);
//Zadatak 5
//Odarditi istoovo ali za mesece
var monthString;
monthString = 'October';
//monthString=dateNow.getMonth();

//Kraj
app.innerHTML += `<p>Today is ${dayOfWeekString}, ${dateNow.getDay()}. of ${monthString} ${dateNow.getFullYear()}.</p>`


//Dan3
//Zadatak 1
//Napisati program koji ispsuje brojeve od 1 do 5 u konzoli
//Pitati zasto LET;
{
    for (let counter = 1; counter <= 5; counter += 1) {
        console.log(counter);
    }
}

//Dan 3
//Zadatak 1
//Napisati sledece program


//Prog 1
//Napisati program koji racuna sumu brojeva od 1 do N;

{
    let N = 10;
    let sumNum = 0;
    for (let counter = 1; counter <= N; counter++) {
        sumNum += counter;
    }
    console.log(`The sum of numbers from 1 to ${N} is ${sumNum}`);
}

//Smisliti zadatak za vezbu
//+While

//Dan 4
//Funkcije


function sumNumbers(limit) {
    let sumNum = 0;
    for (let counter = 1; counter <= limit; counter++) {
        sumNum += counter;
    }
    return sumNum;
}

{

    let N = 10;
    let sumNum = sumNumbers(N);
    //saberiBrojeve(N);
    console.log(`The sum of numbers from 1 to ${N} is ${sumNum}`);
}
//Zadaci za vezbanje s funkcijama



//Nedelja 3
//funkcije nizovi
//Dan 1
//teroijska prica o nizovima
//zadatak ispis elemente niza
{
    let array = new Array();
    array.push(10);
    array.push('Ads');
    array.push(15);
    console.log(array);
    array.forEach(element => {
        console.log(element);
    });
}

//zadatak sumiraj elemente niza
//Zadatak nadji najveci

//dan 2
//Napisati funkciju koja ispsisuje dan na nosovu broja

function getDayFromNumberDay(day) {
    switch (day) {
        case 0: return 'Sunday';
        case 1: return 'Monday';
        case 2: return 'Tuesday';
        case 3: return 'Wednesday';
        case 4: return 'Thursday';
        case 5: return 'Friday';
        case 6: return 'Saturday';
        default: return 'ERROR!';

    }
}
getDayFromNumberDay(dateNow.getDay());

//unction calculatePizzaPrice(pizzaBase,...rest){ <-pogledaj :D
function calculatePizzaPrice(pizzaBase, count) {
    if (dayOfWeek === danZaPopust) {
        let cenaPop = 0.85 * pizzaBase;
        return cenaPop * count;

    } else {
        return pizzaBase * count;
    }

}
{
    let price = calculatePizzaPrice(10, 10);
    console.log(`Value of pizza selected is ${price} `);
}
//DOM
//Dan 3
//Broj pica

//Zadatak1
//Povecati broj pizza kad se klikne na pizu
var pizzaCount = 0;
function incrementPizzaCount() {
    pizzaCount++;
    console.log(pizzaCount);
}
//incrementPizzaCount();

var pizzaFooters = document.getElementsByClassName('item-footer');
var orderButtons=new Array();
for(let footer of pizzaFooters){
    for(let button of footer.getElementsByTagName('button')){
    orderButtons.push(button);
    }
    console.log(orderButtons);

}
    
for (let button of orderButtons) {
    console.log(button);
    button.addEventListener('click', function () {
        selectPizza(button);
    });
}
var counterField = document.getElementById('counter');
counterField.innerHTML = `${pizzaCount}`;
function selectPizza(e) {
    console.log(e);
    incrementPizzaCount();
    //ubaciti u korpu podatke o pici;
    counterField.innerHTML = `${pizzaCount}`;
}

//Dan 4
//Jos DOM-a
// prototip dodavanje porucene pize u listu


//Nedelja 4
//Dan 1
//Objekti
//Kreiranje objekta pizze;
//neki jednostavan objekat
var pizzaObjects = {
    name: 'Capricosa',
    sizes: [
        {
            name: 'XL',
            size: 50,
            price: 600
        }
        , {
            name: 'L',
            size: 30,
            price: 450
        }, {
            name: 'M',
            size: 15,
            price: 300
        }, {
            name: 'S',
            size: 10,
            price: 150
        }
    ]
};
console.log(pizzaObjects);
//Klasa
class Size {
    constructor(name, size, price) {
        this.name = name;
        this.size = size;
        this.price = price;
    }

}

{
    let sizetest = new Size('XL', 50, 600);
    console.log(sizetest.name);
}

let sizes = [new Size('XL', 50, 600),new Size('L',32,450)];

console.log(sizes);

var allPizzas = [{
    name: 'Capriccosa',
    sizes: sizes
}, {name: 'Margarita',
    sizes: sizes
}, {name: 'Quattro stagioni',
sizes: sizes
}, {name: 'Diavola',
sizes: sizes
}, {name: 'Pascolo',
sizes: sizes
}, {name: 'Giardiniera',
sizes: sizes
}];

console.log(allPizzas);