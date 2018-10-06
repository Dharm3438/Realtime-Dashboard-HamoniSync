# [Live Dashboard With Hamoni Sync](https://hamoni.tech/)

This is a sample realtime dashboard using Hamoni Sync. Template is [SB Admin](http://startbootstrap.com/template-overviews/sb-admin/) an open source, admin dashboard template for [Bootstrap](http://getbootstrap.com/) created by [Start Bootstrap](http://startbootstrap.com/).

## Preview

![Live Dashboard Hamoni Sync.gif](https://cdn.filestackcontent.com/HBEqWVISTqdROYByd0sQ)

## Download and Installation

To begin using this sample app

* Clone or download this repository
* Run `npm install` to install its dependencies
* Copy your Account and Application ID from your [dashboard](https://dashboard.hamoni.tech) if you're already logged in. If you don't have an account, [Register and Login](https://dashboard.hamoni.tech) to Hamoni Sync dashboard
* Open **server.js**. On lines **20** & **21**, replace the sring placeholder for account and application ID with values you see on your dashboard.
* Open **sb-admin-charts.js** in `public/js` folder. Replace the sring placeholder for account and application ID with values you see on your dashboard.
* Start the application using `npm start`. This starts the starts the server and serves file from `localhost:5000`. It also tries to create and update state at certain intervals. If you restart the application, it may have created the state. if that is the case, comment lines **37** - **40** and uncomment lines **41** - **43**
* Open the url `localhost:5000` in the browser and see the dashboard change in real-time.

For a walkthrough on Hamoni Sync or Quick Start tutorial on building a live dashboard, see the doccumentation at [docs.hamoni.tech](https://docs.hamoni.tech)

## About Hamoni Sync

Hamoni Sync is a real-time state synchronisation service. Using it helps you:

* avoid building and managing all the real-time infrastructure yourself

* Manage the mental mapping of architecting states around generic publish/subscribe services with rooms or channels.

Hamoni Sync manages all necessary server infrastructure to scale any real-time app. It also provides an SDK for your client and backend applications with an easy-to-understand API to retrieve and manipulate state, which lives in our database.

With Sync you can build:

* Live Dashboards
* Live Score board
* Stock Ticker
* Game States and many more!
