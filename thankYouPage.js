//alert to show .js fles is linked working//
// alert(".JS is working")


// const BurgerToggleButton =document.getElementById("burger-button")
let myButton = document.getElementById("burger-button");
let myNavBar = document.querySelector(".moble-element");


//function to toggle burger to X when nav is open//
function burgOpenClose(){
    console.log('burger function ran')
    if (document.getElementById("burger-button").getAttribute('class') === "fa-solid fa-bars"){
    document.getElementById("burger-button").setAttribute('class', "fa-solid fa-x")
   } else {document.getElementById("burger-button").setAttribute('class', "fa-solid fa-bars")}

};

//function to show the link button to sight Home Page//
function showDontShowHome(){
    console.log('Home function ran')
    if (document.getElementById("home-page").getAttribute('class') === 'no-Show-Thank-You-Page'){
        document.getElementById("home-page").setAttribute('class', "show-Thank-You-Page")
       } else {document.getElementById("home-page").setAttribute('class', 'no-Show-Thank-You-Page')}
}

//toggle nav bar button//
myButton.addEventListener('click', function(){
    console.log('function ran')
   if (myNavBar.className === 'moble-element') {
        myNavBar.className = 'openMobleElements';
    } else {
        myNavBar.className = 'moble-element';
    };
    burgOpenClose();
    showDontShowHome();

});
 
