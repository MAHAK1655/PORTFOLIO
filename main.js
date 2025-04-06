// const menuBtn = document.getElementById("menu-btn");
// const navLinks = document.getElementById("menu-btn");
// const menuBtnIcon = menuBtn.querySelector("i");

// menuBtn.addEventListener("click", (e) => {
//     navLinks.classList.toggle("open");

//     const isOpen = navLinks.classList.contains("open");
//     menuBtnIcon.setAttribute(
//         "class",
//         isOpen? "ri-close-line" : "ri-menu-3-line"
//     );
// });

// navLinks.addEventListener("click", (e) => {
//     navLinks.classList.remove("open");
//     menuBtnIcon.setAttribute("class", "ri-menu-3-line");
// });


document.addEventListener("DOMContentLoaded", () => {
    const menuBtn = document.getElementById("menu-btn");
    const navLinks = document.getElementById("nav-links"); // Correcting the ID reference
    const menuBtnIcon = menuBtn.querySelector("i");

    menuBtn.addEventListener("click", () => {
        navLinks.classList.toggle("open");

        const isOpen = navLinks.classList.contains("open");
        menuBtnIcon.className = isOpen ? "ri-close-line" : "ri-menu-3-line";
    });

    navLinks.addEventListener("click", () => {
        navLinks.classList.remove("open");
        menuBtnIcon.className = "ri-menu-3-line";
    });
});

const scrollRevealOption = {
    distance:"50px",
    origin:"bottom",
    duration:1000,
};

scrollReveal().reveal(".header_image img", {
    ...scrollRevealOption,
    origin:"right", 
});
scrollReveal().reveal(".header_content h1", {
    ...scrollRevealOption,
    delay:500, 
});