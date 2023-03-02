var bodyElement = document.querySelector("body");
var switchBtn = document.querySelector(".switch-btn");
switchBtn.addEventListener("click", switchFunction);
function switchFunction() {
  bodyElement.classList.toggle("active");
}
