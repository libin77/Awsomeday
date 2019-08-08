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
var chart = am4core.create("chartScopeChange", am4charts.XYChart);

// Add data
chart.data = [{
  "sprint": "MAT Sprint1",
  "Committed Scope": 650,
  "Removed Scope": 199
}, {
  "sprint": "MAT Sprint2",
  "Committed Scope": 950,
  "Removed Scope": 199
}, {
  "sprint": "MAT Sprint3",
  "Committed Scope": 750,
  "Removed Scope": 199
}, {
  "sprint": "MAT Sprint4",
  "Added Scope": 501.9,
  "Committed Scope": 250,
  "Removed Scope": 199
}];

// Create axes
var categoryAxis1 = chart.xAxes.push(new am4charts.CategoryAxis());
categoryAxis1.dataFields.category = "sprint";
categoryAxis1.title.text = "sprints";
categoryAxis1.renderer.grid.template.location = 0;
categoryAxis1.renderer.minGridDistance = 20;

var  valueAxis1 = chart.yAxes.push(new am4charts.ValueAxis());
valueAxis1.title.text = "Story Points";

// Create series
var series1 = chart.series.push(new am4charts.ColumnSeries());
series1.dataFields.valueY = "Committed Scope";
series1.dataFields.categoryX = "sprint";
series1.name = "Committed Scope";
series1.tooltipText = "{name}: [bold]{valueY}[/]";
// This has no effect
// series.stacked = true;

var series2 = chart.series.push(new am4charts.ColumnSeries());
series2.dataFields.valueY = "Added Scope";
series2.dataFields.categoryX = "sprint";
series2.name = "Added Scope";
series2.tooltipText = "{name}: [bold]{valueY}[/]";
// Do not try to stack on top of previous series
series2.stacked = true;

var series3 = chart.series.push(new am4charts.ColumnSeries());
series3.dataFields.valueY = "Removed Scope";
series3.dataFields.categoryX = "sprint";
series3.name = "Removed Scope";
series3.tooltipText = "{name}: [bold]{valueY}[/]";
series3.stacked = true;

// Add cursor
chart.cursor = new am4charts.XYCursor();

// Add legend
chart.legend = new am4charts.Legend();