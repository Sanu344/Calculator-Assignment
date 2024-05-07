let array = [];
let string = "";
const cancel = (document.getElementById("cancel").onclick = () => {
  const content = document.getElementById("display");
  string = "";
  content.innerHTML = string;
  console.log(content.innerHTML);
});

const number = (document.getElementById("number1").onclick = () => {
  const content = document.getElementById("display");
  const num = document.getElementById("number1").innerHTML;
  string = string + num;
  content.innerHTML = string;
});

const number2 = (document.getElementById("number2").onclick = () => {
  const content = document.getElementById("display");
  const num = document.getElementById("number2").innerHTML;
  string = string + num;
  content.innerHTML = string;
});

const number3 = (document.getElementById("number3").onclick = () => {
  const content = document.getElementById("display");
  const num = document.getElementById("number3").innerHTML;
  string = string + num;
  content.innerHTML = string;
});

const number4 = (document.getElementById("number4").onclick = () => {
  const content = document.getElementById("display");
  const num = document.getElementById("number4").innerHTML;
  string = string + num;
  content.innerHTML = string;
});
const number5 = (document.getElementById("number5").onclick = () => {
  const content = document.getElementById("display");
  const num = document.getElementById("number5").innerHTML;
  string = string + num;
  content.innerHTML = string;
});
const number6 = (document.getElementById("number6").onclick = () => {
  const content = document.getElementById("display");
  const num = document.getElementById("number6").innerHTML;
  string = string + num;
  content.innerHTML = string;
});
const number7 = (document.getElementById("number7").onclick = () => {
  const content = document.getElementById("display");
  const num = document.getElementById("number7").innerHTML;
  string = string + num;
  content.innerHTML = string;
});
const number8 = (document.getElementById("number8").onclick = () => {
  const content = document.getElementById("display");
  const num = document.getElementById("number8").innerHTML;
  string = string + num;
  content.innerHTML = string;
});
const number9 = (document.getElementById("number9").onclick = () => {
  const content = document.getElementById("display");
  const num = document.getElementById("number9").innerHTML;
  string = string + num;
  content.innerHTML = string;
});
const devide = (document.getElementById("number/").onclick = () => {
  const content = document.getElementById("display");
  const num = document.getElementById("number/").innerHTML;
  string = string + num;
  content.innerHTML = string;
});
const sub = (document.getElementById("number-").onclick = () => {
  const content = document.getElementById("display");
  const num = document.getElementById("number-").innerHTML;
  string = string + num;
  content.innerHTML = string;
});
const add = (document.getElementById("number+").onclick = () => {
  const content = document.getElementById("display");
  const num = document.getElementById("number+").innerHTML;
  string = string + num;
  content.innerHTML = string;
});
const mul = (document.getElementById("number*").onclick = () => {
  const content = document.getElementById("display");
  const num = document.getElementById("number*").innerHTML;
  string = string + num;
  content.innerHTML = string;
});
const dot = (document.getElementById("number.").onclick = () => {
  const content = document.getElementById("display");
  const num = document.getElementById("number.").innerHTML;
  string = string + num;
  content.innerHTML = string;
});

const equals = (document.getElementById("equals").onclick = () => {
  const content = document.getElementById("display");

  try {
    const result = eval(string);
    string = result.toString();
    content.innerHTML = string;
  } catch (error) {
    string = "Error";
    content.innerHTML = string;
  }
});
