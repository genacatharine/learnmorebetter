$(document).ready(() => {

$("#loginbtn").click(()=> {
  $.ajax({
      url:'/login',
      type:'POST',
      dataType:'json',
      data:{
        email: $('#loginEmail').val(),
        password: $('#loginPassword').val()
      },
      success:
        ((data) => {
          console.log('success')
          window.location = data.redirectURL
        }),
      error: function(err) {
        console.log('error in ajax request ', err) }
    }).done( () => {
      window.location = './'
    })
  })

  $('#registerbtn').click(() => {
    window.location='./register';
  })
})
