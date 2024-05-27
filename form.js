document.addEventListener("DOMContentLoaded", function () {
  document.querySelector("form").onsubmit = function () {
    const name = document.querySelector("input#name").value;
    alert(`Hello, ${name}!`);
  };
});
