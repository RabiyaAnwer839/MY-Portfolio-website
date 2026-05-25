const btn = document.getElementById('menuBtn');
    const menu = document.getElementById('mobileMenu');
    btn.addEventListener('click', () => menu.classList.toggle('open'));

    document.querySelectorAll('.mobile-menu a').forEach(link => {
  link.addEventListener('click', () => menu.classList.remove('open'));
});


const skills = document.querySelectorAll(".skill");

skills.forEach((skill)=>{

    setInterval(()=>{

        skill.style.boxShadow = `
        0 0 30px rgba(34,139,205,${Math.random()})
        `;

    },1000);

});