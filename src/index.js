import _ from "lodash";
import "./style.css";
import "./style1.css";
import "./iconfonts/iconfont.css";
import Icon from "./demo.gif";
import printMe from "@/dir/print.js";
import createInput from "@/dir/input.js";

function component() {
  const element = document.createElement("div");
  const btn = document.createElement("button");

  // lodash（目前通过一个 script 引入）对于执行这一行是必需的
  element.innerHTML = _.join(
    ["Hello", "webpack", ",", "这是一套新的字体：阿里妈妈刀隶体"],
    " "
  );
  const i = document.createElement("span");

  i.className = "iconfont iconindex-yunqian";
  element.classList.add("hello");

  // 将图像添加到我们已经存在的 div 中。
  const myIcon = new Image();
  myIcon.src = Icon;

  element.appendChild(myIcon);
  element.appendChild(i);

  btn.innerHTML = "Click me and check the console!";
  btn.onclick = printMe;

  element.appendChild(btn);

  return element;
}

console.log(module.hot, "module");
document.body.appendChild(component());
// 双向绑定的简单示例
createInput();
