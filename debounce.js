//Debounce
//- "Rebater" uma ação
//- Não permitir que uma ação seja executada com certa frequência

const path = "https://jsonplaceholder.tyicode.com/users";

fetch(`${path}?name_like=in`)
  .then((res) => res.json())
  .then((data) => console.log(data));

let users = [];
async function filterUsers(name) {
  users = await fetch(`${path}?name_like=${name}`).then((res) => res.json());
}

//let time = null;
//function debounceEvent(vaue) {
//clearTimeout(time);
//time = setTimeout(() => {
//filterUsers(event.target.value).then((users) =>
//users.map((user) => user.name)
//);
//}, 1000);
//}

//function debounceEvent(vaue) {
//let time = null;
//return function () {
//clearTimeout(time);
//time = setTimeout(() => {
//filterUsers(event.target.value).then((users) =>
//users.map((user) => user.name)
//);
//}, 1000);
//};
//}

//function debounceEvent() {
//let time = null;
//return function (value) {
//clearTimeout(time);
//time = setTimeout(() => {
//filterUsers(value).then((users) => users.map((user) => user.name));
//}, 1000);
//};
//}

//function debounceEvent(time) {
//return function (fn, wait) {
//clearTimeout(time);
//time = setTimeout(() => {
//fn();
//}, wait);
//};
//}

//const debounce = debounceEvent();

//function handleKeyUp(event) {
////debounceEvent(event.target.value);
////debounce(event.target.value);
//debounce(() => {
//filterUsers(value).then((users) => users.map((user) => user.name));
//}, 2000);
//}

function debounceEvent(fn, wait = 1000, time) {
  return function (wait) {
    clearTimeout(time);
    time = setTimeout(() => {
      fn.apply(this, arguments);
    }, wait);
  };
}

// as array function
const debounceEvent =
  (fn, wait = 1000, time) =>
  (...args) =>
    clearTimeout(time, (time = setTimeout(() => fn(...args), wait)));

function handleKeyUp(event) {
  filterUsers(event.target.value).then((users) =>
    users.map((user) => user.name)
  );
}

//document.querySelector("input").addEventListener("keyup", handleKeyUp);
document
  .querySelector("input")
  .addEventListener("keyup", debounceEvent(handleKeyUp, 500));
