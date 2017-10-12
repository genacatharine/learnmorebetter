$(document).ready(() => {

  $('#registerbtn').click(()=> {
    let emailinput= $('#registeremail').val()
    let passwordinput= $('#registerpassword').val()

    $.post('/register', {email: emailinput, password: passwordinput}, (response) => console.log(response)

    )
  })
})
