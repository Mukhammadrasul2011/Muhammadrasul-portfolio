let menuList = document.getElementById("menu_list");
let barsIcon = document.getElementById("bars_icon");

let xmarkIcon = document.getElementById("xmark_icon")
function barsToggle() {
  menuList.classList.add("menu");
  xmarkIcon.classList.remove("media_icon");
  barsIcon.classList.add("media_icon");
}
function xmarkToggle() {
  menuList.classList.remove("menu");
  xmarkIcon.classList.add("media_icon");
  barsIcon.classList.remove("media_icon");
}