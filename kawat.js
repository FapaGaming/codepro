const fadeElements = document.getElementsByClassName('scrollFade');

const scrollFade = () => {
  const viewportBottom = window.scrollY + window.innerHeight;

  for (let index = 0; index < fadeElements.length; index++) {
    const element = fadeElements[index];
    const rect = element.getBoundingClientRect();

    const elementFourth = rect.height/4;
    const fadeInPoint = window.innerHeight - elementFourth;
    const fadeOutPoint = -(rect.height/2);

    if (rect.top <= fadeInPoint) {
      element.classList.add('scrollFade--visible');
      element.classList.add('scrollFade--animate');
      element.classList.remove('scrollFade--hidden');
    } else {
      element.classList.remove('scrollFade--visible');
      element.classList.add('scrollFade--hidden');
    }

    if (rect.top <= fadeOutPoint) {
      element.classList.remove('scrollFade--visible');
      element.classList.add('scrollFade--hidden');
    }
  }
}

document.addEventListener('scroll', scrollFade);
window.addEventListener('resize', scrollFade);
document.addEventListener('DOMContentLoaded', () => {
  scrollFade();
});


var nav = document.querySelector('nav');

window.addEventListener('scroll', function() {
    if(window.pageYOffset > 100) {
        nav.classList.add('bg-black', 'shadow');
    } else {
        nav.classList.remove('bg-black', 'shadow');
    }
})
// Skills
$('.skill').waypoint(function () {
    $('.progress .progress-bar').each(function () {
        $(this).css("width", $(this).attr("aria-valuenow") + '%');
    });
}, {offset: '80%'});


const btnscrolltoTop = document.querySelector('#btnscrolltoTop');

window.addEventListener('scroll', scrollFunction);

function scrollFunction(){

    if(window.pageYOffset > 300){

        if(!btnscrolltoTop.classList.contains('btnFade-in')){
            btnscrolltoTop.classList.remove('btnFade-out');
            btnscrolltoTop.classList.add('btnFade-in');
            btnscrolltoTop.style.display = 'block';
        }
    } else {

        if(btnscrolltoTop.classList.contains('btnFade-in')){
            btnscrolltoTop.classList.remove('btnFade-in');
            btnscrolltoTop.classList.add('btnFade-out');

            setTimeout(function(){
                btnscrolltoTop.style.display = 'none';
            }, 250);
        }
    }
}

btnscrolltoTop.addEventListener('click', backtoTop);

function backtoTop() 
    window.scrollTo(0, 0);
