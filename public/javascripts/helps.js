$(document).ready(function() {

  $.getJSON('/api/v1/helps', {
    userId: 5
  }).then((data) => {
    let tbody = $('#helps tbody')
    for (item in data) {
      tbody.append($(`<tr>
        <td>${item}</td>
        <td></td>
        <td></td>
        <td><button class='remove btn' data-asst='${item}'>Remove</button></td>
        </tr>`))
        data[item].forEach( (user) => {
          tbody.append($(`
          <tr>
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
        $.ajax({url: `/api/v1/helps/remove?asst=${asst}`, method: "DELETE", dataType: 'json'}).done(data => {
          $(e.target).closest('tr').hide()
          console.log("deleted data", data);
        })
      }
    })
  })
})
