Highcharts.chart('container', {
  chart: {
    reflow: true
  },
  title: {
    text: {}
  },
  yAxis: {
    title: {
      text: "6 months"
    },
    type: "linear"
  },
  credits: {
    enabled: false
  },
  exporting: {
    enabled: false
  },
  boost: {
    enabled: false
  },
  plotOptions: {
    series: {
      label: {
        enabled: false
      },
      turboThreshold: 0,
      showInLegend: false
    },
    treemap: {
      layoutAlgorithm: "squarified"
    },
    scatter: {
      marker: {
        symbol: "circle"
      }
    }
  },
  series: [
    {
      group: "group",
      data: [
        {
          plot_date: "2021 January",
          "6 months": 75.0555,
          y: 75.0555,
          name: "2021 January"
        },
        {
          plot_date: "2021 February",
          "6 months": 75.8444,
          y: 75.8444,
          name: "2021 February"
        },
        {
          plot_date: "2021 March",
          "6 months": 74.3878,
          y: 74.3878,
          name: "2021 March"
        },
        {
          plot_date: "2021 April",
          "6 months": 76.2979,
          y: 76.2979,
          name: "2021 April"
        },
        {
          plot_date: "2021 May",
          "6 months": 74.5106,
          y: 74.5106,
          name: "2021 May"
        },
        {
          plot_date: "2021 June",
          "6 months": 74.8464,
          y: 74.8464,
          name: "2021 June"
        },
        {
          plot_date: "2021 July",
          "6 months": 73.7804,
          y: 73.7804,
          name: "2021 July"
        },
        {
          plot_date: "2021 August",
          "6 months": 74.1651,
          y: 74.1651,
          name: "2021 August"
        },
        {
          plot_date: "2021 September",
          "6 months": 71.1005,
          y: 71.1005,
          name: "2021 September"
        },
        {
          plot_date: "2021 October",
          "6 months": 74.8288,
          y: 74.8288,
          name: "2021 October"
        },
        {
          plot_date: "2021 November",
          "6 months": 73.3236,
          y: 73.3236,
          name: "2021 November"
        },
        {
          plot_date: "2021 December",
          "6 months": 73.6873,
          y: 73.6873,
          name: "2021 December"
        },
        {
          plot_date: "2022 January",
          "6 months": 68.7251,
          y: 68.7251,
          name: "2022 January"
        },
        {
          plot_date: "2022 February",
          "6 months": 71.8,
          y: 71.8,
          name: "2022 February"
        },
        {
          plot_date: "2022 March",
          "6 months": 66.4838,
          y: 66.4838,
          name: "2022 March"
        },
        {
          plot_date: "2022 April",
          "6 months": 68.0416,
          y: 68.0416,
          name: "2022 April"
        },
        {
          plot_date: "2022 May",
          "6 months": 66.9193,
          y: 66.9193,
          name: "2022 May"
        },
        {
          plot_date: "2022 June",
          "6 months": 67.701,
          y: 67.701,
          name: "2022 June"
        },
        {
          plot_date: "2022 July",
          "6 months": 67.6053,
          y: 67.6053,
          name: "2022 July"
        },
        {
          plot_date: "2022 August",
          "6 months": 68.3706,
          y: 68.3706,
          name: "2022 August"
        },
        {
          plot_date: "2022 September",
          "6 months": 67.7747,
          y: 67.7747,
          name: "2022 September"
        },
        {
          plot_date: "2022 October",
          "6 months": 68.123,
          y: 68.123,
          name: "2022 October"
        },
        {
          plot_date: "2022 November",
          "6 months": 70.3845,
          y: 70.3845,
          name: "2022 November"
        },
        {
          plot_date: "2022 December",
          "6 months": 66.7904,
          y: 66.7904,
          name: "2022 December"
        }
      ],
      type: "line"
    }
  ],
  xAxis: {
    type: "category",
    title: {
      text: "plot_date"
    },
    categories: {}
  }
});
