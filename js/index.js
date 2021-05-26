function elementInViewport(el, scrollTop) {
  return el.offsetTop - window.innerHeight < scrollTop;
}

const sectionWork = document.querySelector('.section-work');
const sectionAbout = document.querySelector('.section-about');

document.querySelector('.page').addEventListener('scroll', (event) => {
  if (sectionWork && elementInViewport(sectionWork, event.target.scrollTop)) {
    sectionWork.classList.add('right');
  }
  if (
    sectionAbout &&
    elementInViewport(sectionAbout, event.target.scrollTop - 200)
  ) {
    sectionAbout.classList.add('left');
  }
});

document.querySelector('.nav_link_contacts').addEventListener('click', (e) => {
  e.preventDefault();
  document.getElementById('contancts').scrollIntoView({ behavior: 'smooth' });
});

document.querySelector('.nav_link_work').addEventListener('click', (e) => {
  e.preventDefault();
  document.getElementById('work').scrollIntoView({ behavior: 'smooth' });
});

document.querySelector('.logo').addEventListener('click', (e) => {
  e.preventDefault();
  document.querySelector('.page').scrollTo({
    top: 0,
    behavior: 'smooth',
  });
});
