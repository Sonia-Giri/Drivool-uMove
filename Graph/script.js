function processData(data) {
  // Extracting t and v values from JSON data
  var tValues = [];
  var vValues = [];
  $.each(data, function (key, obj) {
    tValues.push(obj.t);
    vValues.push(obj.v);
  });

  // Create data object for the chart
  var chartData = {
    labels: tValues, // Use t values as labels on x-axis
    series: [
      vValues, // Use v values as data points on y-axis
    ],
  };

  var options = {
    width: 2000,
    height: 400,
    lineSmooth: true,
    showPoint: false, // Hide dots on the line
    low: 11, // Optionally set the lowest value for the y-axis
    chartPadding: {
      right: 40,
    },
    axisX: {
      showLabel: false,
    },
    axisY: {},
  };

  new Chartist.Line("#vtGraph", chartData, options);

  // DATA FOR SECOND CHART (HOURLY DATA CHART)
  var hourlyData = {}; // Object to store aggregated hourly data
  var prevHour = null;

  // Loop through the data and aggregate values for each hour
  $.each(data, function (key, obj) {
    var timestamp = new Date(obj.t);
    var currentHour = timestamp.getHours();

    // Check if the hour has changed
    if (currentHour !== prevHour) {
      // Create a new array for the current hour if it doesn't exist
      hourlyData[currentHour] = [];
      prevHour = currentHour; // Update prevHour
    }

    // Push the v value for the current hour
    hourlyData[currentHour].push(obj.v);
  });

  // Prepare data for the hourly chart
  var hourlyLabels = [];
  var hourlySeries = [];

  // Loop through hourlyData to create labels and series
  $.each(hourlyData, function (hour, hourlyValues) {
    // Format hour labels
    hourlyLabels.push(hour + ":00");

    // Calculate average v value for each hour
    var avgValue =
      hourlyValues.reduce(function (acc, val) {
        return acc + val;
      }, 0) / hourlyValues.length;

    hourlySeries.push(avgValue); // Push average value to series
  });

  // Create data object for the hourly chart
  var hourlyChartData = {
    labels: hourlyLabels,
    series: [hourlySeries],
  };

  // Options for the hourly chart
  var hourlyOptions = {
    width: 800,
    height: 300,
    lineSmooth: true,
    showPoint: false,
    low: 11,
    chartPadding: {
      right: 40,
    },
    axisX: {
      showLabel: true,
    },
    axisY: {
      showLabel: true,
    },
  };

  // Initialize the hourly chart
  new Chartist.Line("#hourlyGraph", hourlyChartData, hourlyOptions);

  // Initialize the bar chart (3rd chart)
  new Chartist.Bar("#hourly2Graph", hourlyChartData, hourlyOptions);

  // DATA FOR FOURTH CHART (HALF-HOURLY DATA CHART)
  var halfHourlyData = {}; // Object to store aggregated half-hourly data
  var prevHalfHour = null;

  // Loop through the data and aggregate values for each half-hour
  $.each(data, function (key, obj) {
    var timestamp = new Date(obj.t);
    var currentHalfHour =
      timestamp.getHours() * 2 + Math.floor(timestamp.getMinutes() / 30);

    // Check if the half-hour has changed
    if (currentHalfHour !== prevHalfHour) {
      // Create a new array for the current half-hour if it doesn't exist
      halfHourlyData[currentHalfHour] = [];
      prevHalfHour = currentHalfHour; // Update prevHalfHour
    }

    // Push the v value for the current half-hour
    halfHourlyData[currentHalfHour].push(obj.v);
  });

  // Prepare data for the half-hourly chart
  var halfHourlyLabels = [];
  var halfHourlySeries = [];

  // Loop through halfHourlyData to create labels and series
  $.each(halfHourlyData, function (halfHour, halfHourlyValues) {
    // Format half-hour labels
    var hour = Math.floor(halfHour / 2);
    var minutes = halfHour % 2 === 0 ? "00" : "30";
    halfHourlyLabels.push(hour + ":" + minutes);

    // Calculate average v value for each half-hour
    var avgValue =
      halfHourlyValues.reduce(function (acc, val) {
        return acc + val;
      }, 0) / halfHourlyValues.length;

    halfHourlySeries.push(avgValue); // Push average value to series
  });

  // Create data object for the half-hourly chart
  var halfHourlyChartData = {
    labels: halfHourlyLabels,
    series: [halfHourlySeries],
  };

  // Options for the half-hourly chart
  var halfHourlyOptions = {
    width: 800,
    height: 300,
    lineSmooth: true,
    showPoint: true,
    low: 11,
    chartPadding: {
      right: 40,
    },
    axisX: {
      showLabel: true,
    },
    axisY: {
      showLabel: true,
    },
  };

  // Initialize the half-hourly chart (4th chart)
  new Chartist.Line("#halfHrlyGraph", halfHourlyChartData, halfHourlyOptions);

  // Initialize the half-hourly chart (5th chart)
  new Chartist.Bar("#halfHrly2Graph", halfHourlyChartData, halfHourlyOptions);
}
