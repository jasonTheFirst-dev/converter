"use strict";
const body = document.querySelector("body");
const outerContainer = document.querySelector(".outer--container");
const inputContainer = document.querySelector(".input--container");
const plus = document.querySelector(".plus");
const base = document.getElementById("base");
const get = document.querySelector(".get");
const outputContainer = document.querySelector(".output--container");
let result = document.querySelector(".result");
const cancelIcon = document.querySelector(".cancel--icon");
const generate = document.querySelector(".generate");
const generateResult = document.querySelector(".generate--container");
const box2Con = document.querySelector(".box2--container");
const genIcon = document.querySelector(".gen--input--icon");
const pwg = document.getElementById("pwg");
const generateAns = document.querySelector(".ga");
const box3Plus = document.querySelector(".box3--plus");
const mmmContainer = document.querySelector(".mmm--container");
const mmmBtns = document.querySelectorAll(".btn");
const meanBtnF = document.querySelector(".mean--btn--f");
const meanInputCon = document.querySelector(".mean--input");
const meanInput = document.getElementById("mean");
const mmmAnswer = document.querySelector(".mmm--answers");
let meanBtn = mmmBtns[0];

function displayRes() {
  inputContainer.classList.add("active");
  outputContainer.classList.remove("hide");
  let num = Number(base.value);
  if (!num) {
    base.placeholder = "Kindly enter a number";
    inputContainer.classList.remove("active");
    outputContainer.classList.add("hide");
  } else {
    result.innerHTML = num.toString(2);
  }
}
plus.addEventListener("click", () => {
  inputContainer.classList.toggle("active");
  if (!inputContainer.classList.contains("active")) {
    plus.innerHTML = "&#45;";
    plus.style.fontSize = "50px";
    outputContainer.classList.add("hide");
    base.value = "";
  } else if (!outputContainer.classList.contains("hide")) {
    outputContainer.classList.add("hide");
    inputContainer.classList.toggle("active");
    base.value = "";
  } else {
    plus.innerHTML = "&#43;";
  }
});
get.addEventListener("click", () => {
  displayRes();
});

cancelIcon.addEventListener("click", function () {
  outputContainer.classList.add("hide");
  inputContainer.classList.remove("active");
  base.value = "";
});

function generatePassword() {
  let pwgValue = pwg.value;

  let res = "";
  let strs = "";
  for (let i = 33; i <= 123; i++) {
    strs = strs + String.fromCodePoint(i);
  }

  let strsLength = strs.length;

  for (let j = 0; j < pwgValue; j++) {
    res += strs[Math.floor(Math.random() * strsLength)];
  }
  console.log(strs);
  if (!pwgValue) {
    pwg.placeholder = "Enter length of password";
  } else if (pwgValue > 0 && pwgValue < 4) {
    pwg.placeholder = "Enter number greater than 3";
    generateResult.classList.remove("gen--hidden");
  } else {
    generateAns.textContent = res;
    generateAns.classList.remove("hid");
    console.log(generateAns);
  }
}
generatePassword(5);
generate.addEventListener("click", () => {
  generateResult.classList.toggle("gen--hidden");
  if (!generateAns.classList.contains("hid")) {
    generateAns.classList.add("hid");
  }
  // gca.classList.add("gen--hidden");
});

genIcon.addEventListener("click", function () {
  generateResult.classList.add("gen--hidden");
  generatePassword();
});
// Box--3 Starts Here-----------------------------------------
box3Plus.addEventListener("click", function () {
  mmmContainer.classList.toggle("mmm--active");
  if (!mmmContainer.classList.contains("mmm--active")) {
    box3Plus.innerHTML = "&#45;";
    box3Plus.style.fontSize = "50px";
    meanInputCon.classList.add("mean--active");
    // outputContainer.classList.add("hide");
    // base.value = "";
  } else {
    box3Plus.innerHTML = " &#43; ";
    box3Plus.style.fontSize = "50px";
  }
  if (!mmmAnswer.classList.contains("mmm--active")) {
    mmmAnswer.classList.add("mmmAnwsers--hide");
    meanInput.value = "";
    mmmAnswer.textContent = "";
  }
});

/*here we are working on the mean,median, mode
 */
//this is for the mean
meanBtn.addEventListener("click", () => {
  meanInputCon.classList.toggle("mean--active");
  mmmContainer.classList.add("mmm--active");
});

meanBtnF.addEventListener("click", function () {
  let meanBtnValue = meanInput.value;
  if (!meanBtnValue) {
    meanInput.placeholder = "Enter a number separated by comma";
    return;
  } else {
    calcMean(meanBtnValue);
  }
});

function calcMean(inputValue) {
  let arrCon = [];
  let newValue;
  newValue = inputValue.split(",");
  for (let item of newValue) {
    arrCon.push(Number(item));
  }
  let sumUp = arrCon.reduce((acc, item, index, array) => acc + item, 0);
  console.log(sumUp);
  let total = sumUp / arrCon.length;
  console.log(total, typeof total);
  mmmAnswer.classList.remove("mmmAnwsers--hide");
  mmmAnswer.textContent = `Answer:   ${total}`;
  meanInputCon.classList.add("mean--active");
}
//the mean ends here
// console.log("!".codePointAt(0));
