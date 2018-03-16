// Chart.js scripts
let hamoni = new Hamoni(
  "AccountID",
  "APP_ID"
);

hamoni
  .connect()
  .then(response => {
    // -- Set new default font family and font color to mimic Bootstrap's default styling
    Chart.defaults.global.defaultFontFamily =
      '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
    Chart.defaults.global.defaultFontColor = "#292b2c";
    // -- Area Chart Example
    hamoni
      .get("myAreaChart")
      .then(myAreaChart => {
        console.log("get success");
        var state = myAreaChart.getAll();
        makeAreaChart(state);

        myAreaChart.onItemAdded(value => {
          console.log("item added") || console.log(value);
          var state = myAreaChart.getAll();
          makeAreaChart(state);
        });
        myAreaChart.onItemUpdated(value => {
          console.log("item updated") || console.log(value);
          var state = myAreaChart.getAll();
          makeAreaChart(state);
        });
      })
      .catch(error => console.log(error));

    // -- Bar Chart Example
    hamoni
      .get("myBarChart")
      .then(myBarChart => {
        console.log("get success");
        var state = myBarChart.getAll();
        makeBarChart(state);

        myBarChart.onItemAdded(value => {
          console.log("item added") || console.log(value);
          var state = myBarChart.getAll();
          makeBarChart(state);
        });
        myBarChart.onItemUpdated(value => {
          console.log("item updated") || console.log(value);
          var state = myBarChart.getAll();
          makeBarChart(state);
        });
      })
      .catch(error => console.log(error));

    // -- Pie Chart Example
    hamoni
      .get("myPieChart")
      .then(myPieChart => {
        console.log("get success");
        var state = myPieChart.getAll();
        makePieChart(state);

        myPieChart.onItemAdded(value => {
          console.log("item added") || console.log(value);
          var state = myPieChart.getAll();
          makePieChart(state);
        });
        myPieChart.onItemUpdated(value => {
          console.log("item updated") || console.log(value);
          var state = myPieChart.getAll();
          makePieChart(state);
        });
      })
      .catch(error => console.log(error));
  })
  .catch(error => console.log(error));
function makeAreaChart(state) {
  var ctx = document.getElementById("myAreaChart");
  var myLineChart = new Chart(ctx, {
    type: "line",
    data: {
      labels: state.map(element => element.label),
      datasets: [
        {
          label: "Sessions",
          lineTension: 0.3,
          backgroundColor: "rgba(2,117,216,0.2)",
          borderColor: "rgba(2,117,216,1)",
          pointRadius: 5,
          pointBackgroundColor: "rgba(2,117,216,1)",
          pointBorderColor: "rgba(255,255,255,0.8)",
          pointHoverRadius: 5,
          pointHoverBackgroundColor: "rgba(2,117,216,1)",
          pointHitRadius: 20,
          pointBorderWidth: 2,
          data: state.map(element => element.data)
        }
      ]
    },
    options: {
      scales: {
        xAxes: [
          {
            time: {
              unit: "date"
            },
            gridLines: {
              display: false
            },
            ticks: {
              maxTicksLimit: 7
            }
          }
        ],
        yAxes: [
          {
            ticks: {
              min: 0,
              max: 40000,
              maxTicksLimit: 5
            },
            gridLines: {
              color: "rgba(0, 0, 0, .125)"
            }
          }
        ]
      },
      legend: {
        display: false
      }
    }
  });
}

function makeBarChart(state) {
  var ctx = document.getElementById("myBarChart");
  var myLineChart = new Chart(ctx, {
    type: "bar",
    data: {
      labels: state.map(element => element.label),
      datasets: [
        {
          label: "Revenue",
          backgroundColor: "rgba(2,117,216,1)",
          borderColor: "rgba(2,117,216,1)",
          data: state.map(element => element.data)
        }
      ]
    },
    options: {
      scales: {
        xAxes: [
          {
            time: {
              unit: "month"
            },
            gridLines: {
              display: false
            },
            ticks: {
              maxTicksLimit: 6
            }
          }
        ],
        yAxes: [
          {
            ticks: {
              min: 0,
              max: 15000,
              maxTicksLimit: 5
            },
            gridLines: {
              display: true
            }
          }
        ]
      },
      legend: {
        display: false
      }
    }
  });
  return { ctx, myLineChart };
}

function makePieChart(state) {
  var ctx = document.getElementById("myPieChart");
  var myPieChart = new Chart(ctx, {
    type: "pie",
    data: {
      labels: state.map(element => element.label),
      datasets: [
        {
          data: state.map(element => element.data),
          backgroundColor: state.map(element => element.backgroundColor)
        }
      ]
    }
  });
  return ctx;
}
