function processData(data) {
  // Extracting t and s values from JSON data for s-t graph
  var tValues = [];
  var vValues = [];
  var sValues = [];
  var lValues = [];
  var nValues = [];
  var hValues = [];
  $.each(data, function (key, obj) {
    tValues.push(obj.t);
    vValues.push(obj.v);
    sValues.push(obj.s);
    lValues.push(obj.l);
    nValues.push(obj.n);
    hValues.push(obj.h);
  });

  // Create data object for the chart
  // var chartData = {
  //   labels: tValues, // Use t values as labels on x-axis
  //   series: [sValues],
  // };

  var options = {
    width: 1500,
    height: 300,
    lineSmooth: true,
    showPoint: false, // Hide dots on the line
    low: 200,
    chartPadding: {
      right: 40,
    },
    axisX: {
      showLabel: false,
    },
    axisY: {},
  };

  new Chartist.Line(
    "#vtGraph",
    {
      labels: tValues,
      series: [vValues],
    },
    options
  );

  new Chartist.Line(
    "#stGraph",
    {
      labels: tValues,
      series: [sValues],
    },
    options
  );
  new Chartist.Line(
    "#ltGraph",
    {
      labels: tValues,
      series: [lValues],
    },
    options
  );
  new Chartist.Line(
    "#ntGraph",
    {
      labels: tValues,
      series: [nValues],
    },
    options
  );
  new Chartist.Line(
    "#htGraph",
    {
      labels: tValues,
      series: [hValues],
    },
    options
  );

  // DATA FOR HOURLY DATA CHART
  var vtHourlyData = {};
  var stHourlyData = {};
  var ltHourlyData = {};
  var ntHourlyData = {};
  var prevHour = null;

  $.each(data, function (key, obj) {
    var timestamp = new Date(obj.t);
    var currentHour = timestamp.getHours();

    // Check if the hour has changed
    if (currentHour !== prevHour) {
      vtHourlyData[currentHour] = [];
      stHourlyData[currentHour] = [];
      ltHourlyData[currentHour] = [];
      ntHourlyData[currentHour] = [];

      prevHour = currentHour;
    }
    vtHourlyData[currentHour].push(obj.v);
    stHourlyData[currentHour].push(obj.s);
    ltHourlyData[currentHour].push(obj.l);
    ntHourlyData[currentHour].push(obj.n);
  });

  // Prepare data for the hourly chart
  var hourlyLabels = [];
  var vtHourlySeries = [];
  var stHourlySeries = [];
  var ltHourlySeries = [];
  var ntHourlySeries = [];

  // Populate hourlyLabels only once
  $.each(stHourlyData, function (hour) {
    hourlyLabels.push(hour + ":00");
  });

  // Calculate average values for each hour
  $.each(vtHourlyData, function (hour, hourlyValues) {
    var vtAvgValue =
      hourlyValues.reduce((acc, val) => acc + val, 0) / hourlyValues.length;
    vtHourlySeries.push(vtAvgValue);
  });

  $.each(stHourlyData, function (hour, hourlyValues) {
    var stAvgValue =
      hourlyValues.reduce((acc, val) => acc + val, 0) / hourlyValues.length;
    stHourlySeries.push(stAvgValue);
  });

  $.each(ltHourlyData, function (hour, hourlyValues) {
    var ltAvgValue =
      hourlyValues.reduce((acc, val) => acc + val, 0) / hourlyValues.length;
    ltHourlySeries.push(ltAvgValue);
  });

  $.each(ntHourlyData, function (hour, hourlyValues) {
    var ntAvgValue =
      hourlyValues.reduce((acc, val) => acc + val, 0) / hourlyValues.length;
    ntHourlySeries.push(ntAvgValue);
  });

  // Options for the hourly chart
  var hourlyOptions = {
    width: 800,
    height: 300,
    lineSmooth: true,
    showPoint: false,
    low: 0,
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
  new Chartist.Line(
    "#vtHourlyGraph",
    {
      labels: hourlyLabels,
      series: [vtHourlySeries],
    },
    hourlyOptions
  );

  new Chartist.Line(
    "#stHourlyGraph",
    {
      labels: hourlyLabels,
      series: [stHourlySeries],
    },
    hourlyOptions
  );

  new Chartist.Line(
    "#ltHourlyGraph",
    {
      labels: hourlyLabels,
      series: [ltHourlySeries],
    },
    hourlyOptions
  );

  new Chartist.Line(
    "#ntHourlyGraph",
    {
      labels: hourlyLabels,
      series: [ntHourlySeries],
    },
    hourlyOptions
  );
  // DATA FOR HALF-HOURLY DATA CHART
  var vtHalfHourlyData = {};
  var stHalfHourlyData = {};
  var ltHalfHourlyData = {};
  var ntHalfHourlyData = {};
  var prevHalfHour = null;

  $.each(data, function (key, obj) {
    var timestamp = new Date(obj.t);
    var currentHalfHour =
      timestamp.getHours() * 2 + Math.floor(timestamp.getMinutes() / 30);

    // Check if the half-hour has changed
    if (currentHalfHour !== prevHalfHour) {
      vtHalfHourlyData[currentHalfHour] = [];
      stHalfHourlyData[currentHalfHour] = [];
      ltHalfHourlyData[currentHalfHour] = [];
      ntHalfHourlyData[currentHalfHour] = [];
      prevHalfHour = currentHalfHour;
    }

    vtHalfHourlyData[currentHalfHour].push(obj.v);
    stHalfHourlyData[currentHalfHour].push(obj.s);
    ltHalfHourlyData[currentHalfHour].push(obj.l);
    ntHalfHourlyData[currentHalfHour].push(obj.n);
  });

  // Prepare data for the half-hourly chart
  var halfHourlyLabels = [];
  var vtHalfHourlySeries = [];
  var stHalfHourlySeries = [];
  var ltHalfHourlySeries = [];
  var ntHalfHourlySeries = [];

  // Populate half-hourly labels only once
  $.each(stHalfHourlyData, function (halfHour) {
    var hour = Math.floor(halfHour / 2);
    var minutes = halfHour % 2 === 0 ? "00" : "30";
    halfHourlyLabels.push(hour + ":" + minutes);
  });

  // Calculate average values for each half-hour
  $.each(vtHalfHourlyData, function (halfHour, halfHourlyValues) {
    var vtAvgValue =
      halfHourlyValues.reduce((acc, val) => acc + val, 0) /
      halfHourlyValues.length;
    vtHalfHourlySeries.push(vtAvgValue);
  });

  $.each(stHalfHourlyData, function (halfHour, halfHourlyValues) {
    var stAvgValue =
      halfHourlyValues.reduce((acc, val) => acc + val, 0) /
      halfHourlyValues.length;
    stHalfHourlySeries.push(stAvgValue);
  });

  $.each(ltHalfHourlyData, function (halfHour, halfHourlyValues) {
    var ltAvgValue =
      halfHourlyValues.reduce((acc, val) => acc + val, 0) /
      halfHourlyValues.length;
    ltHalfHourlySeries.push(ltAvgValue);
  });

  $.each(ntHalfHourlyData, function (halfHour, halfHourlyValues) {
    var ntAvgValue =
      halfHourlyValues.reduce((acc, val) => acc + val, 0) /
      halfHourlyValues.length;
    ntHalfHourlySeries.push(ntAvgValue);
  });

  // Options for the half-hourly charts
  var halfHourlyOptions = {
    width: 800,
    height: 300,
    lineSmooth: true,
    showPoint: false,
    low: 200,
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

  // Initialize the half-hourly charts
  new Chartist.Line(
    "#vtHalfHrlyGraph",
    {
      labels: halfHourlyLabels,
      series: [vtHalfHourlySeries],
    },
    halfHourlyOptions
  );

  new Chartist.Line(
    "#stHalfHrlyGraph",
    {
      labels: halfHourlyLabels,
      series: [stHalfHourlySeries],
    },
    halfHourlyOptions
  );

  new Chartist.Line(
    "#ltHalfHrlyGraph",
    {
      labels: halfHourlyLabels,
      series: [ltHalfHourlySeries],
    },
    halfHourlyOptions
  );

  new Chartist.Line(
    "#ntHalfHrlyGraph",
    {
      labels: halfHourlyLabels,
      series: [ntHalfHourlySeries],
    },
    halfHourlyOptions
  );

  new Chartist.Line(
    "#hourlyGraph",
    {
      labels: hourlyLabels,
      series: [vtHourlySeries, stHourlySeries, ntHourlySeries],
    },
    hourlyOptions
  );

  new Chartist.Line(
    "#halfHourlyGraph",
    {
      labels: halfHourlyLabels,
      series: [vtHalfHourlySeries, stHalfHourlySeries, ntHalfHourlySeries],
    },
    halfHourlyOptions
  );
}
