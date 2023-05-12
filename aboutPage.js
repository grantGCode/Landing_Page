//alert to show .js fles is linked working//
// alert(".JS is working")

// const BurgerToggleButton =document.getElementById("burger-button")
let myButton = document.getElementById("burger-button");
let myNavBar = document.querySelector(".mobleElement");


//function to toggle burger to X when nav is open//
function burgOpenClose(){
    console.log('function ran')
    if (document.getElementById("burger-button").getAttribute('class') === "fa-solid fa-bars"){
    document.getElementById("burger-button").setAttribute('class', "fa-solid fa-x")
   } else {document.getElementById("burger-button").setAttribute('class', "fa-solid fa-bars")}

};

//function to show the link button to sight Home Page//
function showDontShowHome(){
    
    if (document.getElementById("home-page").getAttribute('class') === 'no-Show-Home'){
        document.getElementById("home-page").setAttribute('class', "show-Home")
       } else {document.getElementById("home-page").setAttribute('class', 'no-Show-Home')}
}

//toggle nav bar button//
myButton.addEventListener('click', function(){
    
   if (myNavBar.className === 'mobleElement') {
        myNavBar.className = 'open-moble-elements';
    } else {
        myNavBar.className = 'mobleElement';
    };
    burgOpenClose();
    showDontShowHome();

});
 