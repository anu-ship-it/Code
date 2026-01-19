//---------DOM (Document Object Model)-----------\\

//iska main purpose hai HTML ke structure ko modifiy karne 
//exp like adding new element, by clicking this element another element would open and many more
// DOM is tara sai kaam karta h
// Kya karna hai
// kab karna hai

//console.log(window);

//window.console.log("Bro"); // window sai hum brower ko access kar sakte h
// aur yai karke hmm window ke inspect mai Bro dekh sakte h
// aur yai ek type hmm nai usko overwrite kar dia h
//document.write('Hello bro');


//chote chote project
// Jab user click me par click kryai to screen black ho gye

function changeBackground(color) {
    document.body.style.backgroundColor = color;
}
// yai jab hum us element sai ek particular kaam hi karna chate h just a single work. but if we have to make it a multipurose element then we should go for another way.






// yaha har bar jar kar us element pr ja kar property likhe sai aacha usko ek unique id dai do. fir getElementById sai hmm uspr multiple changes kar sakte h upto us
const darkbutton = document.getElementById('dark-mode-button');
console.log(darkbutton);

darkbutton.addEventListener('click', function() {
    console.log('I got clicked');
    changeBackground('black');
});
// addEventListener ka mtlb yai hua ki hmm us particular element ko call kar rahe hai ki aao tumko kuch kaam karna h, fir uske andr ja kar ek function create kar sakte h apne according to our needs.

darkbutton.addEventListener('click', function () {
    console.log('Starting Dark Mode value in DB');
});


// Toogle kya hota hai: switching between 2 things [on to off]

const themeButtom = document.getElementById('theme-button');

themeButtom.addEventListener('click', () => {
    console.log(document.body.style.backgroundColor);
    const currentColor = document.body.style.backgroundColor;

    // yaha pr hum condition laga rhe hai jo browser ka current color usko change kardo aur agr wo white h to usko black kar do 
    if(!currentColor || currentColor == 'white') {
        changeBackground('black');
        themeButtom.innerText = 'Light Mode';
    } else {
        changeBackground('white');
        themeButtom.innerText = 'Dark Mode';
    }
});

