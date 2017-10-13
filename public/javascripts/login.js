$(document).ready(() => {

$("#loginbtn").click(()=> {
  $.ajax({
    'url':'/login',
      'type':'POST',
      'data':{
        email: $('#loginEmail').val(),
        password: $('#loginPassword').val()
      },
      'success':function(data) {
        console.log('success')
        window.location = data.redirectURL
      },
      'error':function(err){ console.log('error in ajax request ', err) }

    })
  })
  $('#registerbtn').click(() => {
    window.location='./register';
  })
})
