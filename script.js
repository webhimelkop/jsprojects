const nav = document.querySelector(".nav");
const navIcon = document.querySelector("#nav-icon");


navIcon.addEventListener("click", () => {
    if (nav.style.transform === "translateX(0)") {
        nav.style.transform = "translateX(-100%)";
        navIcon.classList.remove('fa-bars');
        navIcon.classList.add('fa-close');
        
    } else {
        nav.style.transform = "translateX(0)";
        navIcon.classList.remove('fa-close');
        navIcon.classList.add('fa-bars');
    }
});
