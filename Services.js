let framImgElement = document.getElementById('framimg');
let divImgElement = document.getElementById('divImg');
let emptyElement = document.getElementById('empty');

let srcimg ="";
let framImgShow = false;
function toggleframImg(srcimg) {
  if (framImgShow) {
    framImgElement.style.left = '-100vw';
    emptyElement.style.backgroundColor = '#fff';
    emptyElement.style.zIndex = -1;
  } else {
    framImgElement.style.left = '0vw';
    emptyElement.style.backgroundColor = '#333';
    emptyElement.style.opacity = 0.7;
    emptyElement.style.zIndex = 1;
    divImgElement.src = srcimg ;
    divImgElement.style.width = '80vw';
  }
  framImgShow = !framImgShow;
}

function closeFramImg() {
  framImgShow = false;
  framImgElement.style.left = '-100vw';
  emptyElement.style.zIndex = -1;
  emptyElement.style.backgroundColor = '#fff';
}

// let imgpath = ""
// function photoShow(imgpath) {
//     window.open('imagpath','windowName','width=600','height=400');return false;
    
// }