function openLetter() {
  document.querySelector(".message-box-1").style.webkitAnimationPlayState =
    "running";
  //document.querySelector('.message-box-2').style.webkitAnimationPlayState = 'running';
  document.querySelector(".arrow-down-closed").style.visibility = "hidden";
  document.querySelector(".arrow-up-open").style.visibility = "visible";
  document.querySelector(".media-btn").style.visibility = "visible";
  document.getElementById("audio").play();
}

const number = 0;
function mediaBtn() {
  number++;

  if (number % 2 == 0) {
    icon = '<i class="fas fa-pause"></i>';
    document.getElementById("audio").play();
  } else {
    icon = '<i class="fas fa-play"></i>';
    document.getElementById("audio").pause();
  }

  document.getElementById("media-button").innerHTML = icon;
}
