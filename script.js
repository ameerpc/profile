window.addEventListener('scroll',topUp);
const prfEle = document.getElementById('prf');
const scrollBtn = document.getElementById('scroll');
function topUp() {
    if((document.documentElement.scrollTop - prfEle.getBoundingClientRect().top) > 0 ) {
        scrollBtn.style.display = 'block';
    }
    else {
        scrollBtn.style.display = 'none';
    }
}