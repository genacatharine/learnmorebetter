$(document).ready(function() {

  $.getJSON('/api/v1/helps').then((data) => {
    console.log('data from helps api get ', data)
    let tbody = $('#students tbody')
    for (item in data) {
      tbody.append($(`<tr>
        <td><button class='remove btn' data-asst='${item}'>Remove</button></td>
        <td>${item}</td>
        </tr>`))
        data[item].forEach( (user) => {
          console.log('this should be the right id ',user.id)
          tbody.append($(`<tr class = a${user.id}>
          <td></td>
          <td></td>
          <td>${user.first} ${user.last}</td>
          <td>${user.email}</td>
          </tr>`))
        })
    }
  }).done( () => {
    $('.remove').click( (e) => {
      let asst = $(e.target).data('asst')
      if (asst) {
        $.ajax({url: `/helps/remove?asst=${asst}`, method: "DELETE", dataType: 'json'}).done((assignmentId) => {
          console.log('asst came back to json request as ', assignmentId)
          console.log('how do i match a class with a number? ', $(`.a${assignmentId}`))
          console.log('it should look more like ', $(e.target).closest('tr'))
          $(e.target).closest('tr').remove()
         $(`.a${assignmentId}`).remove()

        })
      }
    })
  })
})
