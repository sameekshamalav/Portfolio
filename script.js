// const links = document.querySelectorAll('.link');
// const sections = document.querySelectorAll('.section');

// let activeLink = 0;

// links.forEach((link, i) => {
//     link.addEventListener('click', () => {
//         if(activeLink != i){
//             links[activeLink].classList.remove('active');
//             link.classList.add('active');
//             sections[activeLink].classList.remove('active');

//             setTimeout(() => {
//                 activeLink = i;
//                 sections[i].classList.add('active');
//             }, 1000);
//         }
//     })
// })
const header = document.querySelector('.navbar-dark');
console.log(header)
window.onscroll = function() {
    const top = window.scrollY;
    if(top >=100) {
        header.classList.add('navbarDark');
    }
    else {
        header.classList.remove('navbarDark');
    }
}

// collapse navbar after click on small devices
const navLinks = document.querySelectorAll('.link')
const menuToggle = document.getElementById('navbarSupportedContent')

navLinks.forEach((l) => {
    l.addEventListener('click', () => { new bootstrap.Collapse(menuToggle).toggle() })
})