$(document).ready(() => {

  $('#registerbtn').click(() => {
    $.ajax({
      'url': '/register',
      'type': 'POST',
      'data': {
        firstName: $('#firstName').val(),
        lastName: $('#lastName').val(),
        email: $('#registeremail').val(),
        password: $('#registerpassword').val()
      },
      'success': function(data) {
        window.location = data.redirectURL
      },
      'error': function(err) {
        console.log(err)
        Materialize.toast('That email address is already registered', 1000)
      }


      // 'cache':false
    })


  })
})
