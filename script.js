// =========================
// MOBILE MENU
// =========================

const btn = document.getElementById("menuBtn");
const menu = document.getElementById("mobileMenu");

if (btn && menu) {

    btn.addEventListener("click", () => {
        menu.classList.toggle("open");
    });

    document.querySelectorAll(".mobile-menu a").forEach(link => {

        link.addEventListener("click", () => {
            menu.classList.remove("open");
        });

    });

}


// =========================
// SKILL GLOW EFFECT
// =========================

const skills = document.querySelectorAll(".skill");

skills.forEach(skill => {

    setInterval(() => {

        const opacity = 0.3 + Math.random() * 0.5;

        skill.style.boxShadow = `
            0 0 30px rgba(34, 139, 205, ${opacity})
        `;

    }, 1000);

});