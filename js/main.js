$(document).ready(function () {
  $("#hero-section")
    .bind("mousewheel", function (event) {
      if (event.originalEvent.wheelDelta < 0) {
        $(this).css("left", "-100%");
        $("#file-section").css("left", "0%");
      }
    })
    .on("mousedown touchstart", function (e) {
      yDown = e.pageY;
    })
    .on("mouseup touchend", function (e) {
      yUp = e.pageY;
      if (yDown < yUp) console.log("Swiped Up");
    });

  $("#file-section")
    .bind("mousewheel", function (event) {
      if (event.originalEvent.wheelDelta > 0) {
        $("#hero-section").css("left", "0px");
        $(this).css("left", "100%");
      }
    })
    .on("mousedown touchstart", function (e) {
      yDown = e.pageY;
    })
    .on("mouseup touchend", function (e) {
      yUp = e.pageY;
      if (yDown < yUp) console.log("Swiped Up");
    });

  var state = 0;
  var stateR = 0;
  var firstBox = "#file-first-box";
  var secondBox = "#file-second-box";
  var thirdBox = "#file-third-box";
  var firstBoxValue = ["1", "90%", "25%"];
  var secondBoxValue = ["4", "100%", "50%"];
  var thirdBoxValue = ["2", "90%", "75%"];
  var timerValue = 3000;

  var carouselTimerReset = setInterval(function () {
    $("#file-auto-button").click();
  }, 3000);

  function timerRepeat() {
    carouselTimerReset = setInterval(function () {
      $("#file-auto-button").click();
    }, 3000);
  }

  $("#file-right-button").on("click", function () {
    clearInterval(carouselTimerReset);
    timerRepeat();
  });
  $("#file-left-button").on("click", function () {
    clearInterval(carouselTimerReset);
    timerRepeat();
  });
  $("#file-right-button").on("click", carousel);
  $("#file-left-button").on("click", carousel);
  $("#file-auto-button").on("click", carousel);
  function carousel() {
    if (
      (state == 0 &&
        ($(this).attr("id") == "file-right-button" ||
          $(this).attr("id") == "file-auto-button")) ||
      (stateR == 1 && $(this).attr("id") == "file-left-button")
    ) {
      $(secondBox).css("z-index", firstBoxValue[0]);
      $(secondBox).css("height", firstBoxValue[1]);
      $(secondBox).css("width", firstBoxValue[1]);
      $(secondBox).css("left", firstBoxValue[2]);
      $(thirdBox).css("z-index", secondBoxValue[0]);
      $(thirdBox).css("height", secondBoxValue[1]);
      $(thirdBox).css("width", secondBoxValue[1]);
      $(thirdBox).css("left", secondBoxValue[2]);
      $(firstBox).css("z-index", thirdBoxValue[0]);
      $(firstBox).css("height", thirdBoxValue[1]);
      $(firstBox).css("width", thirdBoxValue[1]);
      $(firstBox).css("left", thirdBoxValue[2]);
      if ($(this).attr("id") == "file-left-button") {
        state--;
        stateR++;
      } else {
        state++;
        stateR--;
      }
      if (state == 3) state = 0;
      else if (state == -1) state = 2;
      if (stateR == 3) stateR = 0;
      else if (stateR == -1) stateR = 2;
    } else if (
      (state == 1 &&
        ($(this).attr("id") == "file-right-button" ||
          $(this).attr("id") == "file-auto-button")) ||
      (stateR == 0 && $(this).attr("id") == "file-left-button")
    ) {
      $(thirdBox).css("z-index", firstBoxValue[0]);
      $(thirdBox).css("height", firstBoxValue[1]);
      $(thirdBox).css("width", firstBoxValue[1]);
      $(thirdBox).css("left", firstBoxValue[2]);
      $(firstBox).css("z-index", secondBoxValue[0]);
      $(firstBox).css("height", secondBoxValue[1]);
      $(firstBox).css("width", secondBoxValue[1]);
      $(firstBox).css("left", secondBoxValue[2]);
      $(secondBox).css("z-index", thirdBoxValue[0]);
      $(secondBox).css("height", thirdBoxValue[1]);
      $(secondBox).css("width", thirdBoxValue[1]);
      $(secondBox).css("left", thirdBoxValue[2]);
      if ($(this).attr("id") == "file-left-button") {
        state--;
        stateR++;
      } else {
        state++;
        stateR--;
      }
      if (state == 3) state = 0;
      else if (state == -1) state = 2;
      if (stateR == 3) stateR = 0;
      else if (stateR == -1) stateR = 2;
    } else if (
      (state == 2 &&
        ($(this).attr("id") == "file-right-button" ||
          $(this).attr("id") == "file-auto-button")) ||
      (stateR == 2 && $(this).attr("id") == "file-left-button")
    ) {
      $(firstBox).css("z-index", firstBoxValue[0]);
      $(firstBox).css("height", firstBoxValue[1]);
      $(firstBox).css("width", firstBoxValue[1]);
      $(firstBox).css("left", firstBoxValue[2]);
      $(secondBox).css("z-index", secondBoxValue[0]);
      $(secondBox).css("height", secondBoxValue[1]);
      $(secondBox).css("width", secondBoxValue[1]);
      $(secondBox).css("left", secondBoxValue[2]);
      $(thirdBox).css("z-index", thirdBoxValue[0]);
      $(thirdBox).css("height", thirdBoxValue[1]);
      $(thirdBox).css("width", thirdBoxValue[1]);
      $(thirdBox).css("left", thirdBoxValue[2]);
      if ($(this).attr("id") == "file-left-button") {
        state--;
        stateR++;
      } else {
        state++;
        stateR--;
      }
      if (state == 3) state = 0;
      else if (state == -1) state = 2;
      if (stateR == 3) stateR = 0;
      else if (stateR == -1) stateR = 2;
    }
  }
});

// let constrain = 20;
// let mouseOverContainer = document.getElementById("ex1");
// let ex1Layer = document.getElementById("ex1-layer");

// function transforms(x, y, el) {
//   let box = el.getBoundingClientRect();
//   let calcX = -(y - box.y - (box.height / 2)) / constrain;
//   let calcY = (x - box.x - (box.width / 2)) / constrain;

//   return "perspective(100px) "
//     + "   rotateX("+ calcX +"deg) "
//     + "   rotateY("+ calcY +"deg) ";
// };

//  function transformElement(el, xyEl) {
//   el.style.transform  = transforms.apply(null, xyEl);
// }

// mouseOverContainer.onmousemove = function(e) {
//   let xy = [e.clientX, e.clientY];
//   let position = xy.concat([ex1Layer]);

//   window.requestAnimationFrame(function(){
//     transformElement(ex1Layer, position);
//   });
// };
