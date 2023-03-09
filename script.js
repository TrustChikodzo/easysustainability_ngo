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

// COPY EMAIL
let emailBtn = document.querySelector('#email-btn');
let modal = document.querySelector('.copy-to-clipboard');
let modalCross = document.querySelector('.fa-xmark');

emailBtn.addEventListener( 'click', ()=>{
    navigator.clipboard.writeText(emailBtn.innerHTML);
    modal.style.display = 'flex';
});

modalCross.addEventListener( 'click', ()=>{
    modal.style.display = 'none';
});