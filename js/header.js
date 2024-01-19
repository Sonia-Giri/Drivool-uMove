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
});

function openDiv() {
  $(".sidemenu_bar").css("left", "0");
  $(".transparentdiv").css("height", "calc(100vh - 60px)");
}

function closeDiv() {
  $(".sidemenu_bar").css("left", "-280px");
  $(".transparentdiv").css("height", "0");
}

function slideLeft() {
  $("#helplineDiv").css("right", "0");
  $(".transparentdiv").css("height", "calc(100vh - 60px)");
}

function slideRight() {
  $("#helplineDiv").css("right", "-200px");
  $(".transparentdiv").css("height", "0");
}

function onClickTransparentDiv() {
  $(".sidemenu_bar").css("left", "-280px");
  $(".transparentdiv").css("height", "0");
  $("#helplineDiv").css("right", "-200px");
  $("div#main-content").load("main_menu.html");
  $("div#aboutdiv").html("");
}
