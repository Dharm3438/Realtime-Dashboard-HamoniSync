$(function() {
  let hamoni = new Hamoni("ACCOUNT_ID", "APP_ID");

  hamoni
    .connect()
    .then(response => {
      hamoni
        .get("dashboard-messages")
        .then(state => {
          $("#newMessage").html(state.get() + " new Messages!");
          state.onUpdated(newState => {
            console.log("new message count");
            $("#newMessage").html(newState + " new Messages!");
          });
        })
        .catch(error => console.log(error));
    })
    .catch(error => console.log(error));
});
