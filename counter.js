let num = 0;
function count() {
  num += 1;
  document.querySelector("h1").innerHTML = num;
  if (num % 10 === 0) {
    alert(`Count is now ${num}`);
  }
}
