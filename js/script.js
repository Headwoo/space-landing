document.ondragstart = noselect;
function noselect() {return false;} 

const iconMenu = document.querySelector(".menu__icon");
if (iconMenu) {
    const menuBody = document.querySelector('.header__nav');
    iconMenu.addEventListener("click", function(e){
        document.body.classList.toggle("_lock");
        iconMenu.classList.toggle("_active");
        menuBody.classList.toggle("_active");
    });
}
