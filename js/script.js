/* Denne kode er brugt i NERA's undervisning og efterfølgende tilpasset til mine tilpassede class-navne*/
/* Oprindelig kode som kommentar nederst i filen */

const bars = document.querySelector("#hamburger");
const icon = document.querySelector("#hamburger > i")

const openNav = () => {
    /* navigation */
    document.querySelector("nav > * ul").classList.toggle("show");
    
    /* icon */
    icon.classList.toggle("bi-list");
    icon.classList.toggle("bi-x-lg");
    
    /* aria-expanded */
    const expanded = bars.getAttribute('aria-expanded') === 'true';
    bars.setAttribute('aria-expanded', expanded ? 'false' : 'true');
    
    /*aria-label*/
    const label = bars.getAttribute('aria-label') === 'åben navigation';
    bars.setAttribute('aria-label', label ? 'luk navigation' : 'åben navigation');

}

bars.addEventListener("click", openNav);


/* 
const bars = document.querySelector("#bars");
const icon = document.querySelector("#bars > i")

const openNav = () => {
    ** navigation **
    document.querySelector("nav > ul").classList.toggle("show");
    
    ** icon **
    icon.classList.toggle("fa-bars");
    icon.classList.toggle("fa-xmark");
    
    ** aria-expanded **
    const expanded = bars.getAttribute('aria-expanded') === 'true';
    bars.setAttribute('aria-expanded', expanded ? 'false' : 'true');
    
    **aria-label**
    const label = bars.getAttribute('aria-label') === 'åben navigation';
    bars.setAttribute('aria-label', label ? 'luk navigation' : 'åben navigation');

}

bars.addEventListener("click", openNav);
*/