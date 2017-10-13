$(document).ready(() => {

$("#loginbtn").click(()=> {
  $.ajax({
    'url':'/login',
      'type':'POST',
      'data':{
        email: $('#loginEmail').val(),
        password: $('#loginPassword').val()
      },
      'success':function(data) { window.location = data.redirectURL },
      'error':function(err){ console.log(err) }

    })
  })
  $('#registerbtn').click(() => {
    window.location='./register';

  })
})
