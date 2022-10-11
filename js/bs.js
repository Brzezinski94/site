const navLink = document.querySelectorAll('.nav-container');
function linkAct() {
    navLink.forEach(n => n.classList.remove('active'));
    this.classList.add('active');
}
navLink.forEach(n => n.addEventListener('click', linkAct));

// Left-Menu



// Nav-Links
TweenMax.staggerFrom('.menu-open', 1, {
    delay:3,
    opacity:0,
    x:100,
    ease:Expo.easeInOut
}, 0.08)

// Search-Icon
TweenMax.from('.social', 1.1, {
    delay:3.4,
    opacity:0,
    x:-50,
    ease:Expo.easeInOut
})

TweenMax.from('.info_text', 1.2, {
    delay:3.8,
    opacity:0,
    x:-50,
    ease:Expo.easeInOut
})

TweenMax.staggerFrom('.adv_inf', 1.3, {
    delay:4,
    opacity:0,
    x:-100,
    ease:Expo.easeInOut
}, 0.08)
