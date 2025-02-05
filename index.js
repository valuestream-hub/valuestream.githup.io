let sideMenuElement = document.getElementById('sideMenu');
let emptyElement = document.getElementById('empty');
let sideMenuShow = false;
function toggleSideMenu() {
  if (sideMenuShow) {
    sideMenuElement.style.left = '-15vw';
    emptyElement.style.backgroundColor = '#fff';
    emptyElement.style.zIndex = -1;
  } else {
    sideMenuElement.style.left = '0vw';
    emptyElement.style.backgroundColor = '#000';
    emptyElement.style.opacity = 0.7;
    emptyElement.style.zIndex = 1;
  }
  sideMenuShow = !sideMenuShow;
}

function closeSideMenu() {
  sideMenuShow = false;
  sideMenuElement.style.left = '-15vw';
  emptyElement.style.zIndex = -1;
  emptyElement.style.backgroundColor = '#fff';
}
