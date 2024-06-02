const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

mobileMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden')
})

const header = document.querySelector('header');
window.addEventListener('scroll', () => {
    if(window.scrollY > 100) {
        header.classList.toggle('sticky',window.scrollY > 0);
        header.style.backgroundColor = 'rgba(0,0,0,0.8)';
    }
    else{
        header.style.backgroundColor = 'transparent';
    }
})

// smooth scroll for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e)  {
        e.preventDefault();
        const targetedSection = document.querySelector(this.getAttribute('href'));
        const navHeight = document.querySelector('nav').offsetHeight;
        let extraPadding = 0;

        if(window.innerWidth >=768) {
            extraPadding = 50;
        }

        window.scrollTo({
            top: targetedSection.offsetTop - navHeight -extraPadding,
            behavior: 'smooth'
        });

        // reset url to root path

        if(window.location.hash){
            window.location.replace(window.location.pathname);
        }
    })
})