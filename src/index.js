import _ from 'lodash';
import printMe from './print.js';

const component = () => {
  const sectionDiv = document.createElement('div');
  const btn = document.createElement('button');
  sectionDiv.innerHTML = _.join(['Hello', 'webpack'], ' ');
  btn.innerHTML = 'Click me and check the console';
  btn.onclick = printMe;
  sectionDiv.append(btn);

  return sectionDiv;
};

document.body.appendChild(component());
