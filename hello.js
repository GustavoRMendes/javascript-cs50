function updateH1() {
  const heading = document.querySelector("h1").innerHTML;
  if (heading === "Hello Friends!") {
    heading = "Goodbye";
  } else {
    heading = "Hello Friends!";
  }
}
