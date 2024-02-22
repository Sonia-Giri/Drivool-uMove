//menu items
function onClickChangeAcc() {}
function onClickManageAcc() {}
function onClickManageDev() {}
function onClickPortal() {}
function onClickSimRecharge() {}
function onClickGpsRecharge() {}
function onClickDrivoolShop() {}
function onClickHelp() {}
function onClickLiveChat() {}
function onClickAbout() {
  $("div#dialogdiv").load("about.html");
  $(".sidemenu_bar").css("left", "-280px");
  // $("div#main-content").html("");
}

//tile icons
function onClickTrack() {}

function onClickVehicles() {
  setTimeout(function () {
    $("div#root").load("vehicles.html");
    // titlebar4vehicles();
  }, 800);
} 

function onClickQuickShare() {}

function onClickHistory() {
  $("div.sidemenu_bar").load("vehicles_list_sidemenu.html");
}

function onClickAnalytics() {}

function onClickAlert() {
  $("div.sidemenu_bar").load("vehicles_list_sidemenu.html");
}

function onClickManageUsers() {}

function onClickDrivoolShop() {}

//Elements When Clicked on Vehicles Icon
function onClickAddGps() {
  $(".transparentdiv").css("height", "calc(100vh - 60px)");
  $("div#addGpsDiv").load("add_gps.html");
  console.log("Is it clicking?");
}
