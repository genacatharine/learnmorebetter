$(document).ready(function() {

  $(".login").click(() => {
    event.preventDefault();
    let loginEmail = $('#loginEmail').val();
    let loginPassword = $('#loginPassword').val();


    let logindata = JSON.stringify({
      email: loginEmail,
      password: loginPassword
    })

    console.log("sending data", logindata);

    $.ajax({
      type: 'POST',
      url: '/',
      data: logindata,
      contentType: 'application/json',
      success: (data) => {
        console.log("Data added!", logindata)
      },
      error: console.log("you suck")

    });
  })
})
