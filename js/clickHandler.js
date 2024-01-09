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
    console.log("hello");
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
