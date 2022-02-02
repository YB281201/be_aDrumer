var nu = document.querySelectorAll(".drum").length;

for (var i = 0; i < nu; i++) {
  document.querySelectorAll("button")[i].addEventListener("click", function(){
      tiktikBoom(this.innerHTML);
      buttonAnimation(this.innerHTML);
  });
}

document.addEventListener("keydown", function(e){
    tiktikBoom(e.key);
    buttonAnimation(e.key);
})

function tiktikBoom(key) {
  switch (key) {
    case "w":
      new Audio("sounds/crash.mp3").play();
      break;
    case "a":
      new Audio("sounds/kick-bass.mp3").play();
      break;
    case "s":
      new Audio("sounds/snare.mp3").play();
      break;
    case "d":
      new Audio("sounds/tom-1.mp3").play();
      break;
    case "j":
      new Audio("sounds/tom-2.mp3").play();
      break;
    case "k":
      new Audio("sounds/tom-3.mp3").play();
      break;
    case "l":
      new Audio("sounds/tom-4.mp3").play();
      break;
    default:
      break;
  }
}



function buttonAnimation(buttonPresssed){
    var bPressed = document.querySelector("."+buttonPresssed);
    bPressed.classList.add("pressed");
    setTimeout(function(){
        bPressed.classList.remove("pressed");
    },100);
}