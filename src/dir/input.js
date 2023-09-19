export default function creatInput() {
  let input = document.createElement("input");
  input.addEventListener("input", function (e) {
    console.log("ischange");
    obj.value = e.target.value;
  });
  let inputText = document.createElement("div");
  let obj = { value: "" };
  let temp = "";
  Object.defineProperty(obj, "value", {
    get: function () {
      return temp;
    },
    set: function (newVal) {
      console.log(`设置对象的新属性为:${newVal}`);
      temp = newVal;
      inputText.innerHTML = obj.value;
    },
  });
  let dom = document.createDocumentFragment();
  dom.appendChild(input);
  dom.appendChild(inputText);
  document.body.appendChild(dom);
}
