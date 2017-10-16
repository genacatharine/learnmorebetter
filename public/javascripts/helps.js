$(document).ready(function() {

  $.getJSON('/api/v1/helps').then((data) => {
    console.log('data from helps api get ', data)
    let tbody = $('#students tbody')
    for (item in data) {
      tbody.append($(`<tr class = ${item}>
        <td><button class='remove btn' data-asst='${item}'>Remove</button></td>
        <td>${item}</td>
        </tr>`))
        data[item].forEach( (user) => {
          tbody.append($(`<tr class = ${item}>
          <td></td>
          <td></td>
          <td>${user.first} ${user.last}</td>
          <td>${user.email}</td>
          </tr>`))
        })
    }
  }).done(()=> {
    $('.remove').click( (e) => {
      let asst = $(e.target).data('asst')
      if (asst) {
        $.ajax({url: `/helps/remove?asst=${asst}`, method: "DELETE", dataType: 'json'}).done((asst) => {
          console.log('done with delete')
          console.log('asst came back as ', asst)
          console.log('e.target.closeesttr ', $(e.target).closest('tr'))
          $(e.target).closest('tr').remove()
          // $('tr .${asst}').remove()

        })
      }
    })
  })
})
