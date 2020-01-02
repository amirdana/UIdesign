var scrollableElement = window;
scrollableElement.addEventListener("wheel", findScrollDirectionOtherBrowsers);
function findScrollDirectionOtherBrowsers(event) {
  var delta;
  if (event.wheelDelta) {
    delta = event.wheelDelta;
  } else {
    delta = -1 * event.deltaY;
  }
  if (delta < 0) {
    console.log("DOWN");
    document.querySelector(".arrow").style.display = "block";
    document.querySelector(".arrow").classList.add("slide-bottom");
    setTimeout(() => {
      document.querySelector(".arrow").style.display = "none";
    }, 500);
  } else if (delta > 0) {
    console.log("UP");
    document.querySelector(".arrow1").style.display = "block";
    document.querySelector(".arrow1").classList.add("slide-top");
    setTimeout(() => {
      document.querySelector(".arrow1").style.display = "none";
    }, 500);
  }
}
document.querySelector(".menu-togg").addEventListener("click", () => {
  const elmnt = document.querySelector(".menu");
  const togg = document.querySelector(".menu-togg");
  if (elmnt.style.left == "0vw") {
    elmnt.style.left = "150vw";
    togg.style.color = "white";
  } else {
    elmnt.style.left = "0vw";
    togg.style.color = "#ccc";
  }
});
window.addEventListener("keydown", e => {
  console.log(e);
  if (e.key == "Control") {
    preventDefault();
  }
});
