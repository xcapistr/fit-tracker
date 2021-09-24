// Load the Visualization API and the corechart package.
google.charts.load('current', { packages: ['corechart'] })

// Set a callback to run when the Google Visualization API is loaded.
google.charts.setOnLoadCallback(drawChart)

// Callback that creates and populates a data table,
// instantiates the pie chart, passes in the data and
// draws it.
function drawChart() {
  // Create the data table.
  var data = new google.visualization.DataTable()
  data.addColumn('date', 'Day')
  data.addColumn('number', 'Weight')
  data.addColumn('number', 'Fat')

  data.addRows([
    [new Date('2020-09-01'), 81.4, 19],
    [new Date('2020-09-24'), 81.9, 18.5],
    [new Date('2020-10-05'), 82.3, 16]
  ])

  var data2 = new google.visualization.DataTable()
  data2.addColumn('date', 'Day')
  data2.addColumn('number', 'Weight')

  data2.addRows([
    [new Date('2020-09-01'), 81.4],
    [new Date('2020-09-24'), 81.9],
    [new Date('2020-10-05'), 82.3]
  ])

  var data3 = new google.visualization.DataTable()
  data3.addColumn('date', 'Day')
  data3.addColumn('number', 'Weight')

  data3.addRows([
    [new Date('2020-09-01'), 19],
    [new Date('2020-09-24'), 18.5],
    [new Date('2020-10-05'), 16]
  ])

  // Set chart options
  var options = {
    title: 'Weight vs fat',
    curveType: 'function',
    legend: { position: 'bottom' },
    animation: {
      duration: 1000,
      easing: 'out',
      startup: true
    },
    backgroundColor: { fill: '#fff' },
    chartArea: { left: '12%', top: '10%', width: '80%', height: '70%' },
    colors:['blue','red'],
    pointSize: 3
  }

  var options2 = {
    title: 'Weight',
    curveType: 'function',
    legend: { position: 'none' },
    animation: {
      duration: 1000,
      easing: 'out',
      startup: true
    },
    backgroundColor: { fill: '#fff' },
    chartArea: { left: '12%', top: '10%', width: '80%', height: '70%' },
    colors:['blue']
  }

  var options3 = {
    title: 'Fat',
    curveType: 'function',
    legend: { position: 'none' },
    animation: {
      duration: 1000,
      easing: 'out',
      startup: true
    },
    backgroundColor: { fill: '#fff' },
    chartArea: { left: '12%', top: '10%', width: '80%', height: '70%' },
    colors:['red']
  }

  // Instantiate and draw our chart, passing in some options.
  var chart = new google.visualization.LineChart(
    document.getElementById('chart_div')
  )
  var chart2 = new google.visualization.LineChart(
    document.getElementById('chart_div2')
  )
  var chart3 = new google.visualization.LineChart(
    document.getElementById('chart_div3')
  )
  chart.draw(data, options)
  chart2.draw(data2, options2)
  chart3.draw(data3, options3)
  
}
