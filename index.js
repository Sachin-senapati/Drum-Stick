// for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
//   document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    // this.style.color="white";
    // console.log(this.innerHTML);
    $("button").click(function(){
      var buttonInnerHTML = this.innerHTML;
      makeSound(buttonInnerHTML);
      buttonAnimation(buttonInnerHTML);
    });
    // var buttonInnerHTML = this.innerHTML;
    // makeSound(buttonInnerHTML);
    // buttonAnimation(buttonInnerHTML);

//   });
// }
document.addEventListener("keypress", function(event) {
  makeSound(event.key);
  buttonAnimation(event.key);
});

function makeSound(key) {
  switch (key) {
    case "w":
      var a = new Audio("sounds/tom-1.mp3");
      a.play();
      break;
    case "a":
      var a = new Audio("sounds/tom-2.mp3");
      a.play();
      break;
    case "s":
      var a = new Audio("sounds/tom-3.mp3");
      a.play();
      break;
    case "d":
      var a = new Audio("sounds/tom-4.mp3");
      a.play();
      break;
    case "j":
      var a = new Audio("sounds/snare.mp3");
      a.play();
      break;
    case "k":
      var a = new Audio("sounds/crash.mp3");
      a.play();
      break;
    case "l":
      var a = new Audio("sounds/kick-bass.mp3");
      a.play();
      break;
    default:
      console.log("u have pressed wrong key");
  }
}

function buttonAnimation(currentKey) {
  var activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("pressed");
  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100);
}
