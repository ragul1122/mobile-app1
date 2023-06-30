const logo = document.getElementById('logo');
const launch = document.getElementById('launch');
const device = document.getElementById('device');

const page1 = document.getElementById('page1');
const page2 = document.getElementById('page2');
const page3 = document.getElementById('page3');
const page4 = document.getElementById('page4');
const page5 = document.getElementById('page5');
const page6 = document.getElementById('page6');
const page7 = document.getElementById('page7');
const page8 = document.getElementById('page8');
const page9 = document.getElementById('page9');
const page10 = document.getElementById('page10');
const page11 = document.getElementById('page11');
const page12 = document.getElementById('page12');

function resetPages (currPage) {
  const pages = document.getElementsByClassName('page');
  Object.keys(pages).forEach(function (elem) {
    pages[elem].classList.remove('active');
  });
  currPage.classList.add('active');
}

launch.addEventListener('click', function () {
  resetPages(page2);
  device.classList.remove('dark');
});

page99.addEventListener('click', function () {
  resetPages(page3);
  device.classList.remove('dark');
});

pocket.addEventListener('click', function () {
  resetPages(page4);
  device.classList.remove('dark');
});

  rrr01.addEventListener('click', function () {
     resetPages(page5);
     device.classList.remove('dark');
});
  
rrr02.addEventListener('click', function () {
  resetPages(page6);
  device.classList.remove('dark');
});

rrr03.addEventListener('click', function () {
  resetPages(page7);
  device.classList.remove('dark');
});

rrr05.addEventListener('click', function () {
  resetPages(page8);
  device.classList.remove('dark');
});

rrr06.addEventListener('click', function () {
  resetPages(page9);
  device.classList.remove('dark');
});

rrr07.addEventListener('click', function () {
  resetPages(page101);
  device.classList.remove('dark');
});

document.addEventListener('click', function (e) {
  if (e.target.classList.contains('page50')) {
    resetPages(page13);
    device.classList.remove('dark');
  }
});


aaa01.addEventListener('click', function () {
  resetPages(page8);
  device.classList.remove('dark');
});

aaa02.addEventListener('click', function () {
  resetPages(page8);
  device.classList.remove('dark');
});

aaa03.addEventListener('click', function () {
  resetPages(page7);
  device.classList.remove('dark');
});

aaa04.addEventListener('click', function () {
  resetPages(page4);
  device.classList.remove('dark');
});

aaa05.addEventListener('click', function () {
  resetPages(page4);
  device.classList.remove('dark');
});

aaa06.addEventListener('click', function () {
  resetPages(page4);
  device.classList.remove('dark');
});

aaa07.addEventListener('click', function () {
  resetPages(page3);
  device.classList.remove('dark');
});

aaa08.addEventListener('click', function () {
  resetPages(page2);
  device.classList.remove('dark');
});

aaa09.addEventListener('click', function () {
  resetPages(page1);
  device.classList.remove('dark');
});