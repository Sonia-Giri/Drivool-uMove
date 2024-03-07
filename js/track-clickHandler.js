//MENU ITEMS (3 DOTS MENU)
function onClickManagePOIs() {
  console.log("You've clicked on Manage POIs");
}

function onClickPreferences() {
  console.log("You've clicked on Preferences");
  $("#preferencesDialog").load("map_settings.html");
  $(".transparentdiv").css("height", "100%");
  $("#threeDotsDiv").css("right", "-230px");

  var trackDialogDiv = $("#trackDialogDiv");
  if (
    trackDialogDiv.css("display") === "none" ||
    trackDialogDiv.css("display") === ""
  ) {
    trackDialogDiv.css("display", "block");
    trackDialogDiv.css("animation", "growDialog 0.3s ease-in-out forwards");
  } else {
    console.log("hlo");
    closeTrackDialogDiv();
  }
}

function onClickShowAllVehicles() {
  console.log("You've clicked on Show All Vehicles");
}
function onClickDailyTripReport() {
  console.log("You've clicked on Daily Trip Report");
}

//LABELS
function onClickTrackDate() {
  console.log("You've clicked on Date");
}
function onClickTrackSpeed() {
  console.log("You've clicked on Speed");
  showBox();
  $(".messageDialog").html("Speed is 0km/h");
}
function onClickTrackVolt() {
  console.log("You've clicked on Volt");
  showBox();
  $(".messageDialog").html("Battery Volatge is 12.24V");
}
function onClickTrackSignal() {
  console.log("You've clicked on Signal");
  showBox();
  $(".messageDialog").html("Network Signal Strength is 9 out of 10");
}
function onClickTrackLocation() {
  console.log("You've clicked on Location");
}
function onClickTrackAltitude() {
  console.log("You've clicked on Altitude");
  showBox();
  $(".messageDialog").html("Altitude from mean sea level is 1m");
}
function onClickTrackDistance() {
  console.log("You've clicked on Distance");
}
