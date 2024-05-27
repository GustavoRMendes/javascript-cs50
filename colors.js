document.addEventListener("DOMContentLoaded", function () {
  document.querySelector("#blue").onclick = function () {
    document.querySelector("#subtitle").style.color = "blue";
  };
  document.querySelector("#crimson").onclick = function () {
    document.querySelector("#subtitle").style.color = "crimson";
  };
  document.querySelector("#green").onclick = function () {
    document.querySelector("#subtitle").style.color = "green";
  };
});
