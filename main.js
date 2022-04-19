const navtoggle = document.querySelector('#navToggle');
const nav = document.querySelector('nav');
const navIcon = document.querySelectorAll('.navIcon');
const hamburger = document.querySelector('#hamburger');

navtoggle.addEventListener('click', () => {
  nav.classList.toggle('open');
  navIcon.forEach((icon) => {
    icon.classList.toggle('hidden');
  });
});

window.addEventListener('resize', () => {
  if (document.body.clientWidth > 768) {
    nav.classList.remove('open');
    navIcon.forEach((icon) => {
      icon.classList.add('hidden');
    });
    hamburger.classList.remove('hidden');
  }
});

const speakerList = [{
  imageLink: './components/peak.png',
  title: 'Robert Pong',
  description: 'Lorem ipsum dolor.',
  fullDescription: ' Lorem ipsum dolor sit amet consectetur adipisicing elit.',
},

{
  imageLink: './components/peak.png',
  title: 'Denis Lapo',
  description: 'Lorem ipsum dolor.',
  fullDescription: ' Lorem ipsum dolor sit amet consectetur adipisicing elit.',
},

{
  imageLink: './components/speaker4.jpg',
  title: 'Dan Levis',
  description: 'Lorem ipsum dolor.',
  fullDescription: ' Lorem ipsum dolor sit amet consectetur adipisicing elit.',
},

{
  imageLink: './components/speaker1.jpg',
  title: 'Alicia Keys',
  description: 'Lorem ipsum dolor.',
  fullDescription: ' Lorem ipsum dolor sit amet consectetur adipisicing elit.',
},

{
  imageLink: './components/speaker2.jpg',
  title: 'Toussaint Saraza',
  description: 'Lorem ipsum dolor.',
  fullDescription: ' Lorem ipsum dolor sit amet consectetur adipisicing elit.',
},

{
  imageLink: './components/speaker3.jpg',
  title: 'Kevin Brown',
  description: 'Lorem ipsum dolor.',
  fullDescription: ' Lorem ipsum dolor sit amet consectetur adipisicing elit.',
}];

const cardContainer = document.querySelector('.featured-speakers');

const speakers = () => {
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < speakerList.length; i++) {
    cardContainer.innerHTML += `<div class="speakers">
      <img id="speaker1" class="speak-img" src="${speakerList[i].imageLink}" alt="${speakerList[i].title}">
      <div class="speak-element">
        <h3 id="title">${speakerList[i].title}</h3>
        <h6 id="subTitle">${speakerList[i].description}
        </h6>
        <p id="paragraph">
          ${speakerList[i].fullDescription}
        </p>
      </div>
  </div>`;
  }
};

speakers();