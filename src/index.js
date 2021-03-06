import _ from 'lodash';
import './style.css';
import Icon from './icon.jpg';
import Data from './data.xml';
import Datajson from './cars.json';

function component() {
  const element = document.createElement('div');

  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('hello');

  // Add the image to our existing div.
  const myIcon = new Image();
  myIcon.src = Icon;

  element.appendChild(myIcon);
  console.log(Data);
  console.log(Datajson);

  return element;
}

document.body.appendChild(component());
