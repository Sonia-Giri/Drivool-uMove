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
}

//tile icons
function onClickTrack() {}
function onClickVehicles() {setTimeout(function () {
    $("div#main-content").load("vehicles.html");
    titlebar4vehicles();
  }, 800);

 function titlebar4vehicles() {
    $("#leftside-header div").html("Vehicles()").css("font-size", "22px");

    var vehiclesRHeader = `<img
    src="img/search.png"
    id="search-icon"
    height="36px"
    width="auto"    
  />
  <img
    src="img/add_gps.png"
    id="addGPS-icon"
    onclick="onClickAddGps()"
    height="36px"
    width="auto"
    style="margin-left: 20px"
  />
  <img
    src="img/add_phone.png"
    id="addPHN-icon"
    height="36px"
    width="auto"
    style="margin-left: 20px"
  />`;

    $("#rightside-header").html(vehiclesRHeader);
  }
}
function onClickQuickShare() {}
function onClickHistory() {
      $("div.sidemenu_bar").load("vehicles_list_sidemenu.html"); //no toggle for now!
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
  $("div#dialogdiv").load("add_gps.html");
  console.log("Is it clicking?");
}
