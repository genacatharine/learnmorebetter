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
          window.location = data.redirectURL
        })
        .fail((err) => {
    })
  })

  $('#registerbtn').click(() => {
    window.location='./register';
  })
})
