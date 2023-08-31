// El styles lo importamos aquí, ya se carga después al compilar todo
import '../scss/styles.scss';

const logoButton = document.getElementById('logo');
const modsButton = document.getElementById('mods-button');
const buttonPlay = document.getElementById('button');
const slider = document.getElementById('slider');
const infoServer = document.getElementById('info');
const trackyElement = document.getElementById('tracky');
const modsList = document.getElementById('mods-list');
const hideMenu = () => {
  buttonPlay.classList.replace('show', 'hidde');
  slider.classList.add('hidde');
  infoServer.classList.add('hidde');
  trackyElement.classList.add('hidde');
  modsList.classList.remove('hidde');
};
const showMenu = () => {
  buttonPlay.classList.replace('hidde', 'show');
  slider.classList.remove('hidde');
  infoServer.classList.remove('hidde');
  trackyElement.classList.remove('hidde');
  modsList.classList.add('hidde');
};
modsButton.addEventListener('click', () => {
  hideMenu();
  //   buttonPlay.classList.add('hidde');
  //   slider.classList.add('hidde');
});
logoButton.addEventListener('click', () => {
  showMenu();
});
