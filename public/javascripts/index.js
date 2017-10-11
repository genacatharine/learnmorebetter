$( document ).ready(() => {
  $(".login").click(() => {
    let loginData = JSON.stringify({
    email: $('#loginEmail').val(),
    password: $('#loginPassword').val()
  });

  console.log('Sending Data : ', loginData);

  $.post("/", loginData)
  .done((response) => console.log(response), "json")
  });
});
