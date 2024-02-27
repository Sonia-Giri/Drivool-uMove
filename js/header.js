$(document).ready(function () {
  $("#menu-icon").click(function () {
    if ($(".sidemenu_bar").css("left") === "0px") {
      closeDiv();
    } else {
      openDiv();
    }
  });

 $("#helpline-icon").click(function () {
    if ($("#helplineDiv").css("right") === "-200px") {
      slideLeft();
    } else {
      slideRight();
    }
  });

   // FOR TRACK.HTML
  $("#threeDots-icon").click(function () {
    if ($("#threeDotsDiv").css("right") === "-230px") {
      slideLeft();
    } else {
      slideRight();
    }
  });
});

function openDiv() {
  $(".sidemenu_bar").css("left", "0");
  $(".transparentdiv").css("height", "100vh");
}

function closeDiv() {
  $(".sidemenu_bar").css("left", "-280px");
  $(".transparentdiv").css("height", "0");
}

function slideLeft() {
  $("#helplineDiv").css("right", "0");
  $("#threeDotsDiv").css("right", "0"); // FOR TRACK.HTML
  $(".transparentdiv").css("height", "100vh");
}

function slideRight() {
  $("#helplineDiv").css("right", "-200px");
  $("#threeDotsDiv").css("right", "-230px"); // FOR TRACK.HTML
  $(".transparentdiv").css("height", "0");
}

function onClickTransparentDiv() {
  $(".sidemenu_bar").css("left", "-280px");
  $(".transparentdiv").css("height", "0");
  $("#helplineDiv").css("right", "-200px");
  $("#threeDotsDiv").css("right", "-230px"); // FOR TRACK.HTML
  $("div#dialogdiv").html("");
}
