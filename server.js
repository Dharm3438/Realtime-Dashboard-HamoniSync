let static = require("node-static");
let Hamoni = require("hamoni-sync");

//
// Create a node-static server instance to serve the './public' folder
//
let file = new static.Server("./public");

require("http")
  .createServer(function(request, response) {
    request
      .addListener("end", function() {
        // Serve files!
        file.serve(request, response);
      })
      .resume();
  })
  .listen(process.env.PORT || 5000);

const accountId = "YOUR_ACCOUNT_ID";
const appId = "YOUR_APP_ID";
let hamoni;

fetch("https://api.sync.hamoni.tech/v1/token", {
method: "POST",
headers: {
"Content-Type": "application/json; charset=utf-8"
},
body: JSON.stringify({ accountId, appId })
}).then(token =>

 hamoni = new Hamoni(token);

 hamoni
  .connect()
  .then(response => {
    createAreaChart();
    createBarChart();
    createMessageCount();
    createPieChart();
    // updateAreaChart();
    // updateBarChart();
    // updateMessageCount();
  })
  .catch(error => console.log(error));

);

function createMessageCount() {
  hamoni
    .createValue("dashboard-messages", 20)
    .then(state => {
      console.log("create message count success");
      updateMessageCount(state);
    })
    .catch(error => console.log(error));
}

function createPieChart() {
  hamoni
    .createList("myPieChart", [
      { label: "Blue", data: 12.21, backgroundColor: "#007bff" },
      { label: "Red", data: 22.21, backgroundColor: "#dc3545" },
      { label: "Yellow", data: 15.58, backgroundColor: "#ffc107" },
      { label: "Green", data: 11.58, backgroundColor: "#28a745" }
    ])
    .then(areaChart => {
      console.log("create pie chart success");
    })
    .catch(error => console.log(error));
}

function createAreaChart() {
  hamoni
    .createList("myAreaChart", [
      { label: "March 1", data: 1221 },
      { label: "March 2", data: 1558 },
      { label: "March 3", data: 1158 },
      { label: "March 4", data: 2258 },
      { label: "March 5", data: 258 },
      { label: "March 6", data: 3258 }
    ])
    .then(areaChart => {
      console.log("create area chart success");
      updateAreaChart(areaChart);
    })
    .catch(error => console.log(error));
}

function createBarChart() {
  hamoni
    .createList("myBarChart", [
      { label: "January", data: 300 },
      { label: "Feburary", data: 200 },
      { label: "March", data: 500 },
      { label: "April", data: 700 },
      { label: "May", data: 300 },
      { label: "June", data: 900 }
    ])
    .then(barChart => {
      console.log("create success");
      updateBarChart(barChart);
    })
    .catch(error => console.log(error));
}

function updateMessageCount(state) {
  if (state) {
    setInterval(() => {
      let count = Math.floor(Math.random() * (8 - 1)) + 1;
      state.update(state.get() + count);
    }, 3000);
  } else {
    hamoni
      .get("dashboard-messages")
      .then(state => {
        console.log("get success");
        setInterval(() => {
          let count = Math.floor(Math.random() * (8 - 1)) + 1;
          state.update(state.get() + count);
        }, 3000);
      })
      .catch(error => console.log(error));
  }
}

function updateBarChart(state) {
  if (state) {
    setInterval(() => {
      let data = Math.floor(Math.random() * (2500 - 200)) + 200;

      let month = ["January", "February", "March", "April", "May", "June"];
      let index = Math.floor(Math.random() * (5 - 0)) + 0;
      state.update(index, { label: month[index], data: data });
    }, 5000);
  } else {
    hamoni
      .get("myBarChart")
      .then(myBarChart => {
        console.log("get success");
        setInterval(() => {
          let data = Math.floor(Math.random() * (2500 - 200)) + 200;

          let month = ["January", "February", "March", "April", "May", "June"];
          let index = Math.floor(Math.random() * (5 - 0)) + 0;
          myBarChart.update(index, { label: month[index], data: data });
        }, 5000);
      })
      .catch(error => console.log(error));
  }
}
function updateAreaChart(state) {
  if (state) {
    setInterval(() => {
      let data = Math.floor(Math.random() * (40000 - 11000)) + 200;
      let month = ["January", "February", "March", "April", "May", "June"];
      let index = Math.floor(Math.random() * (6 - 0)) + 0;
      state.update(index, { label: month[index], data: data });
    }, 2000);
  } else {
    hamoni
      .get("myAreaChart")
      .then(myAreaChart => {
        console.log("get success");
        setInterval(() => {
          let data = Math.floor(Math.random() * (40000 - 11000)) + 200;
          let month = ["January", "February", "March", "April", "May", "June"];
          let index = Math.floor(Math.random() * (6 - 0)) + 0;
          myAreaChart.update(index, { label: month[index], data: data });
        }, 2000);
      })
      .catch(error => console.log(error));
  }
}
