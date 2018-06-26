var trace1 = {
  x: ['ALABAMA', 'ALASKA', 'ARIZONA', 'ARKANSAS', 'CALIFORNIA', 'COLORADO', 'CONNECTICUT', 'DELAWARE', 'DISTRICT OF COLUMBIA', 'FLORIDA', 'GEORGIA', 'HAWAII', 'IDAHO', 'ILLINOIS', 'INDIANA', 'IOWA', 'KANSAS', 'KENTUCKY', 'LOUISIANA', 'MAINE', 'MARYLAND', 'MASSACHUSETTS', 'MICHIGAN', 'MINNESOTA', 'MISSISSIPPI', 'MISSOURI', 'MONTANA', 'NEBRASKA', 'NEVADA', 'NEW HAMPSHIRE', 'NEW JERSEY', 'NEW MEXICO', 'NEW YORK', 'NORTH CAROLINA', 'NORTH DAKOTA', 'OHIO', 'OKLAHOMA', 'OREGON', 'PENNSYLVANIA', 'RHODE ISLAND', 'SOUTH CAROLINA', 'SOUTH DAKOTA', 'TENNESSEE', 'TEXAS', 'UTAH', 'VERMONT', 'VIRGINIA', 'WASHINGTON', 'WEST VIRGINIA', 'WISCONSIN', 'WYOMING'],
  y: [51.0, 0.0, 186.0, 13.0, 883.0, 535.0, 11.0, 16.0, 20.0, 12.0, 30.0, 10.0, 65.0, 273.0, 32.0, 76.0, 154.0, 7.0, 126.0, 8.0, 41.0, 14.0, 28.0, 142.0, 112.0, 65.0, 42.0, 472.0, 44.0, 4.0, 29.0, 35.0, 73.0, 142.0, 192.0, 45.0, 113.0, 14.0, 40.0, 12.0, 49.0, 357.0, 31.0, 433.0, 40.0, 5.0, 28.0, 27.0, 5.0, 27.0, 47.0],
  type: "bar",
  marker: {color: 'skyblue'}
};

var data = [trace1];

var layout = {
  title: "Total Number of West Nile Cases per State from 2010 to 2017",
  xaxis: {title: "State", tickangle: -45},
  yaxis: {title: "Number of Cases"}
};

Plotly.newPlot("bar", data, layout);