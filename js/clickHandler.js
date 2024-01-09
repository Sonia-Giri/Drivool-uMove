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
function onClickAbout() {}

//tile icons
function onClickTrack() {}
function onClickVehicles() {setTimeout(function () {
    $("div#main-content").load("vehicles.html");
    titlebar4vehicles();
  }, 600);

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
