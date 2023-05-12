//alert to show .js fles is linked working//
// alert(".JS is working")

//toggle nav bar button//


// const BurgerToggleButton =document.getElementById("burger-button")
let myButton = document.getElementById("burgerButton");
let myNavBar = document.querySelector('.mobleElements');
let submitionButton = document.getElementById("the-submit-button");

function burgOpenClose(){
    if (document.getElementById("icon").getAttribute('class') === "fa-solid fa-bars"){
    document.getElementById("icon").setAttribute('class', "fa-solid fa-x")
   } else {document.getElementById("icon").setAttribute('class', "fa-solid fa-bars")}

};

function showDontShowAbout(){
    console.log('function ran')
    if (document.getElementById("about-tab").getAttribute('class') === "No-Show-About-Page"){
        document.getElementById("about-tab").setAttribute('class', "Show-About-Page")
       } else {document.getElementById("about-tab").setAttribute('class', "No-Show-About-Page")}
}

myButton.addEventListener('click', function(){

    
   if (myNavBar.className === 'mobleElements') {
        myNavBar.className = 'openMobleElements';
    } else {
        myNavBar.className = 'mobleElements';
    };
    burgOpenClose();
    showDontShowAbout();

});


// submitionButton.addEventListener('click',location.replace("/thankYouPage.html"));