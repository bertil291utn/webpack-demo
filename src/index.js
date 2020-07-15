import {name,lastName} from './myname';

const component = () => {
  var element = document.createElement('div');

  // use your function!
  element.innerHTML = `Hi! My full name is ${name('Cody')} ${lastName('Lans')}`;
  return element;
};

document.body.appendChild(component());
