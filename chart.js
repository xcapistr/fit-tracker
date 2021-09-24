var options = {
  series: [
    {
      name: 'Body weight',
      data: [
        [new Date('2020-09-01'), 81.4],
        [new Date('2020-09-24'), 81.9],
        [new Date('2020-10-05'), 82.3],
        [new Date('2020-10-20'), 85.1]
      ],
      color: '#88f'
    },
    {
      name: 'Fat',
      data: [
        [new Date('2020-09-01'), 21],
        [new Date('2020-09-24'), 19],
        [new Date('2020-10-05'), 18],
        [new Date('2020-10-20'), 15]
      ],
      color: '#cc0'
    }
  ],
  markers: {
    size: 5
  },
  xaxis: {
    type: 'datetime'
  },
  chart: {
    height: 300,
    type: 'line',
    zoom: {
      enabled: false
    },
    toolbar: {
      show: false
    },
    legend: {
      show: true
    }
  },
  legend: {
    show: true
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    curve: 'straight'
  },
  title: {
    text: 'Body Weight vs Fat',
    align: 'left'
  },
  grid: {
    row: {
      colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
      opacity: 0.5
    }
  }
}

var chart = new ApexCharts(document.querySelector('#chart'), options)
chart.render()


var options2 = {
  series: [
    {
      name: 'Body Weight',
      data: [
        [new Date('2020-09-01'), 81.4],
        [new Date('2020-09-24'), 81.9],
        [new Date('2020-10-05'), 82.3],
        [new Date('2020-10-20'), 85.1]
      ],
      color: '#88f'
    }
  ],
  markers: {
    size: 5
  },
  xaxis: {
    type: 'datetime'
  },
  chart: {
    height: 200,
    type: 'line',
    zoom: {
      enabled: false
    },
    toolbar: {
      show: false
    },
    legend: {
      show: true
    }
  },
  legend: {
    show: true
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    curve: 'straight'
  },
  title: {
    text: 'Body Weight',
    align: 'left'
  },
  grid: {
    row: {
      colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
      opacity: 0.5
    }
  }
}

var chart2 = new ApexCharts(document.querySelector('#chart2'), options2)
chart2.render()


var options3 = {
  series: [
    {
      name: 'Body Fat',
      data: [
        [new Date('2020-09-01'), 21],
        [new Date('2020-09-24'), 19],
        [new Date('2020-10-05'), 18],
        [new Date('2020-10-20'), 15]
      ],
      color: '#cc0'
    }
  ],
  markers: {
    size: 5
  },
  xaxis: {
    type: 'datetime'
  },
  chart: {
    height: 200,
    type: 'line',
    zoom: {
      enabled: false
    },
    toolbar: {
      show: false
    },
    legend: {
      show: true
    }
  },
  legend: {
    show: true
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    curve: 'straight'
  },
  title: {
    text: 'Body Fat',
    align: 'left'
  },
  grid: {
    row: {
      colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
      opacity: 0.5
    }
  }
}

var chart3 = new ApexCharts(document.querySelector('#chart3'), options3)
chart3.render()

