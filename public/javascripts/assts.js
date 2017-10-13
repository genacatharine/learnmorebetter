$(document).ready(function() {


  $.getJSON('/api/v1/assts').then((data) => {
    console.log('getting assignments heres the data', data)
    let tbody = $('#assignments tbody')
    data.forEach((item) => {
      tbody.append($(`<tr>
      <td><a href="${item.locationUrl}">${item.title}</a></td>
      <td><a href="${item.unitUrl}">${item.unit}</a></td>
      <td><a href="${item.submitUrl}" class="btn btn-default">Submit</a></td>
      <td>${item.grade}</td>
      <td><button name="button" type="button" data-id="${item.id}" class="helpMe btn btn-primary"> Add Me to Help Board </button></td>
      </tr>`))
    })
  }).done( () => {

  $('.helpMe').click( (e) => {
    let id = $(e.target).data('id') //asst id to be added
    $.post(`./helps/${id}`).done((data) => {
    })
  })
})



})
