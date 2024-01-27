// ---------- Header Toggle Start ---------- //
let menuBtn = document.getElementById("menuBtn");
let menuList = document.querySelector(".header__nav");
menuBtn.addEventListener("click", ()=> {
    menuBtn.classList.toggle("fa-xmark");
    menuList.classList.toggle("open");
});

let menuLinks = document.querySelectorAll(".nav-list__item-link");
for (let menuLink of menuLinks) {
    menuLink.addEventListener("click", ()=> {
        menuBtn.classList.toggle("fa-xmark");
        menuList.classList.toggle("open");
    });
}
// ---------- Header Toggle End ---------- //


