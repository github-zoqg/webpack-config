import _ from 'lodash';
import './style.css';
import './style1.css';
import Icon from './demo.gif';
import printMe from '@/dir/print.js';

function component() {
    const element = document.createElement('div');
    const btn = document.createElement('button');
  
    // lodash（目前通过一个 script 引入）对于执行这一行是必需的
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('hello');
    
    // 将图像添加到我们已经存在的 div 中。
    const myIcon = new Image();
    myIcon.src = Icon;
  
    element.appendChild(myIcon);

    btn.innerHTML = 'Click me and check the console!';
    btn.onclick = printMe;
  
    element.appendChild(btn);

    return element;
  }
  
  console.log(module.hot,'module')
  document.body.appendChild(component());