$(document).ready(function() {

  $.getJSON('/api/v1/helps', {
    userId: 5
  }).then((data) => {
    console.log('json get query for helps resulted in ', data)
    let tbody = $('#helps tbody')
    data.forEach((item) => {
      tbody.append($(`<tr>
        <td>${item.title}</td>
        <td></td>
        <td></td>
        <td><button id='remove' data-id='${item.id}'>Remove</button></td>
        </tr>
        <tr>
        <td></td>
        <td>${item.firstName} ${item.lastName}</td>
        <td>${item.email}</td>
        </tr>`))

    })
  })


$('#remove').click( (e) => {
  let id = $(e.target).data('id')
  console.log('remove click help id ', id)
  if (id) {
    $.ajax({url: `/api/v1/helps/${id}`, method: "DELETE", dataType: 'json'}).done(data => {
      $(e.target).closest('tr').hide()
      console.log("deleted data", data);
    })
  }
})
