'use strict'

const taulukko = document.querySelector('#target');

const date = new Date();
const options = {
  year: "numeric",
  month: "long",
  day: "numeric",
};

const finDate = date.toLocaleDateString("fi-FI", options);

var userAgent = navigator.userAgent;

function getOS() {
  const platform = navigator.platform.toLowerCase();
  const userAgent = navigator.userAgent.toLowerCase();

  if (platform.includes('win')) return 'Windows';
  if (platform.includes('mac')) return 'MacOS';
  if (platform.includes('linux')) return 'Linux';
  if (/android/.test(userAgent)) return 'Android';
  if (/iphone|ipad|ipod/.test(userAgent)) return 'iOS';
  return 'Unknown OS';
}

function createCells() {
  const container = document.createElement('div');

  const name = document.createElement('p');
  name.innerText = `Browser name: ${userAgent}`;
  container.appendChild(name);

  const os = document.createElement('p');
  os.innerText = `Operating System: ${getOS()}`;
  container.appendChild(os);

  const ScreenWidth = document.createElement('p');
  ScreenWidth.innerText = `Screen Width: ${window.screen.width}`;
  container.appendChild(ScreenWidth);

  const ScreenHeight = document.createElement('p');
  ScreenHeight.innerText = `Screen Height: ${window.screen.height}`;
  container.appendChild(ScreenHeight);

  const availableScreen = document.createElement('p');
  availableScreen.innerText = `Available screen space for the browser: ${window.screen.availWidth}x${window.screen.availHeight}`;
  container.appendChild(availableScreen);

  const date = document.createElement('p');
  date.innerText = `Current date: ${finDate}`;
  container.appendChild(date);

  return container;
}

const listHtml = createCells();

taulukko.insertAdjacentElement('afterend', listHtml);
