// ANIMATE ON SCROLL INITIALIZATION
AOS.init();

// DROPDOWN
let nav = document.querySelector('#nav');
let navHeight = nav.clientHeight;
let dropdown_menu = document.querySelector('#dropdown_menu');
let dropdownIcon = document.querySelector('#dropdownIcon');

dropdownIcon.addEventListener( 'click' , ()=>{
    dropdownIcon.classList.toggle('dropdownIcon-keep');
    dropdown_menu.style.top = `${navHeight}px`;
    dropdown_menu.classList.toggle('d-none');
});