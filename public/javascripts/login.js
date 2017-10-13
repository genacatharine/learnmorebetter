$(document).ready(() => {

$("#loginbtn").click(()=> {
  $.ajax({
      url:'/login',
      type:'POST',
      dataType:'json',
      data:{
        email: $('#loginEmail').val(),
        password: $('#loginPassword').val()
      }
    }).done((data) => {
      console.log('data.redirectURL', data.redirectURL)
          window.location = data.redirectURL
        })
        .fail((err) => {
          console.log('error in ajax request ', err)
    })
  })

  $('#registerbtn').click(() => {
    window.location='./register';
  })
})
