//quitar automaticamente el menu desplegado al hacer click en alguna opcion del navbar
const hamburguesaBtn = document.querySelector('.navbar-toggler');
const menudDesplegable = document.querySelector('.collapse');
const linksMenu = document.querySelectorAll('.navbar-nav .nav-item');
linksMenu.forEach(link => {
  link.addEventListener('click', () => {
    menudDesplegable.classList.remove('show'); 
    hamburguesaBtn.setAttribute('aria-expanded', 'false'); 
  });
});


//hacer un desplazamiento mas suave
const navbarLinks = document.querySelectorAll('.navbar-toggler');
navbarLinks.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const targetId = e.currentTarget.getAttribute('href');
    document.querySelector(targetId).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  });
});


