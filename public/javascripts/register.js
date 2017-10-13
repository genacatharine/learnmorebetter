$(document).ready(() => {

  // $('#registerbtn').click(()=> {
//     $.post('/register', {email: emailinput, password: passwordinput}, (response) => {
//       console.log('ajax res',response)
//       window.location = response.redirectURL
//     })
//   })
// })
$('#registerbtn').click(()=>{
            $.ajax({
              'url':'/register',
                'type':'POST',
                'data':{
                  firstName: $('#firstName').val(),
                  lastName: $('#lastName').val(),
                  email: $('#registeremail').val(),
                  password: $('#registerpassword').val()
                },
                'success':function(data) { window.location = data.redirectURL },
                'error':function(err){ console.log(err) }

              })
                // 'cache':false
              })


      })
