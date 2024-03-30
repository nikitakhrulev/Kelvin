const openBtn = document.querySelector('.nav-button');
const navigation = document.querySelector('.nav');
const navImg = document.getElementById('navImg');

openBtn.addEventListener('click', toggleNav);

function toggleNav() {
  
    if (navigation.classList.toggle('open')) {
        navImg.src = 'img/nav_close.svg';
    } else {
        navImg.src = 'img/nav_open.svg';
    }
}
