var menuBtn = document.querySelector('.menu');
var closeBtns = document.querySelectorAll('.close');
var settingsBtn = document.querySelector('.settings');
var body = document.querySelector('body');

var showMenu = function() {
    body.style.left = '0%';
}

var showSettings = function() {
    body.style.left = '-200%';
}

var showMain = function() {
    body.style.left = '-100%';
}

menuBtn.addEventListener('click', showMenu);
settingsBtn.addEventListener('click', showSettings);
for (var i = 0; i < closeBtns.length; i++) {
    closeBtns[i].addEventListener('click', showMain);
}