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

am4core.useTheme(am4themes_animated);

var chart = am4core.create("chartdiv1", am4charts.PieChart3D);
chart.hiddenState.properties.opacity = 0; // this creates initial fade-in

chart.data = [
    {
    sprint: "Sprint1",
    trends: 90
  },
  {
    sprint: "Sprint2",
    trends: 59
  },
  {
    sprint: "Sprint3",
    trends: 11
  },
  {
    sprint: "Sprint4",
    trends: 78
  }
];

chart.innerRadius = am4core.percent(40);
chart.depth = 120;

chart.legend = new am4charts.Legend();
chart.legend.position = "right";

var series = chart.series.push(new am4charts.PieSeries3D());
series.dataFields.value = "trends";
series.dataFields.depthValue = "trends";
series.dataFields.category = "sprint";
series.slices.template.cornerRadius = 5;
series.colors.step = 3;