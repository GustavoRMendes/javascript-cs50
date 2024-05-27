function updateH1() {
  if (document.querySelector("h1").innerHTML === "Hello Friends!") {
    document.querySelector("h1").innerHTML = "Goodbye";
  } else {
    document.querySelector("h1").innerHTML = "Hello Friends!";
  }
}
