// Create chart instance
var chart = am4core.create("chartdiv2", am4charts.XYChart);

// Add data
chart.data = [{
    sprint: "Sprint1",
    trends: 90,
	units:90
  },
  {
    sprint: "Sprint2",
    trends: 59,
	units:59
  },
  {
    sprint: "Sprint3",
    trends: 11,
	units:11
  },
  {
    sprint: "Sprint4",
    trends: 78,
	units:78
  }];

// Create axes
let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
categoryAxis.dataFields.category = "sprint";
categoryAxis.title.text = "sprints";

let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
valueAxis.title.text = "Trends (M)";

// Create series
var series = chart.series.push(new am4charts.ColumnSeries());
series.dataFields.valueY = "trends";
series.dataFields.categoryX = "sprint";
series.name = "Sales";
series.columns.template.tooltipText = "Series: {name}\nCategory: {categoryX}\nValue: {valueY}";
series.columns.template.fill = am4core.color("#808080"); // fill

var series2 = chart.series.push(new am4charts.LineSeries());
series2.name = "Units";
series2.stroke = am4core.color("#000000");
series2.strokeWidth = 3;
series2.dataFields.valueY = "units";
series2.dataFields.categoryX = "sprint";