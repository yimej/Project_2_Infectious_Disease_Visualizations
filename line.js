var trace1 = {
    x: [2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017],
    y: [617.0, 206.0, 1176.0, 43.0, 841.0, 698.0, 929.0, 706.0, ],
    type: "line",
    marker: {color: 'skyblue'}
  };
  
  var data = [trace1];
  
  var layout = {
    title: "Total Number of West Nile Cases in U.S. by Year",
    xaxis: {title: "Year"},
    yaxis: {title: "Number of Cases"}
  };
  
  Plotly.newPlot("line", data, layout);