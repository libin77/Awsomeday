/**
 * ---------------------------------------
 * This demo was created using amCharts 4.
 *
 * For more information visit:
 * https://www.amcharts.com/
 *
 * Documentation is available at:
 * https://www.amcharts.com/docs/v4/
 * ---------------------------------------
 */

// Apply chart themes
am4core.useTheme(am4themes_animated);
//am4core.useTheme(am4themes_kelly);

// Create chart instance
var chart = am4core.create("chartPriority", am4charts.XYChart);

// Add data
chart.data = [{
  "sprint": "MAT Sprint1",
  "Lowest": 150,
  "Low": 199,
  "Medium": 122,
  "High":101,
  "Highest":70
}, {
  "sprint": "MAT Sprint2",
  "Lowest": 110,
  "Low": 129,
  "Medium": 122,
  "High":231,
  "Highest":70
}, {
  "sprint": "MAT Sprint3",
  "Lowest": 100,
  "Low": 129,
  "Medium": 122,
  "High":231,
  "Highest":70
}, {
  "sprint": "MAT Sprint4",
  "Lowest": 120,
  "Low": 109,
  "Medium": 122,
  "High":101,
  "Highest":170
}];

// Create axes
var categoryAxis2 = chart.xAxes.push(new am4charts.CategoryAxis());
categoryAxis2.dataFields.category = "sprint";
categoryAxis2.title.text = "sprints";
categoryAxis2.renderer.grid.template.location = 0;
categoryAxis2.renderer.minGridDistance = 20;

var  valueAxis2 = chart.yAxes.push(new am4charts.ValueAxis());
valueAxis2.title.text = "Story Points";

// Create series
var series1a = chart.series.push(new am4charts.ColumnSeries());
series1a.dataFields.valueY = "Lowest";
series1a.dataFields.categoryX = "sprint";
series1a.name = "Lowest";
series1a.tooltipText = "{name}: [bold]{valueY}[/]";
// This has no effect
// series.stacked = true;

var series2a = chart.series.push(new am4charts.ColumnSeries());
series2a.dataFields.valueY = "Low";
series2a.dataFields.categoryX = "sprint";
series2a.name = "Low";
series2a.tooltipText = "{name}: [bold]{valueY}[/]";
// Do not try to stack on top of previous series
series2a.stacked = true;

var series3a = chart.series.push(new am4charts.ColumnSeries());
series3a.dataFields.valueY = "Medium";
series3a.dataFields.categoryX = "sprint";
series3a.name = "Medium";
series3a.tooltipText = "{name}: [bold]{valueY}[/]";
series3a.stacked = true;

var series4a = chart.series.push(new am4charts.ColumnSeries());
series4a.dataFields.valueY = "High";
series4a.dataFields.categoryX = "sprint";
series4a.name = "High";
series4a.tooltipText = "{name}: [bold]{valueY}[/]";
series4a.stacked = true;

var series5a = chart.series.push(new am4charts.ColumnSeries());
series5a.dataFields.valueY = "Highest";
series5a.dataFields.categoryX = "sprint";
series5a.name = "Highest";
series5a.tooltipText = "{name}: [bold]{valueY}[/]";
series5a.stacked = true;

// Add cursor
chart.cursor = new am4charts.XYCursor();

// Add legend
chart.legend = new am4charts.Legend();