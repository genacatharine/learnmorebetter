$(document).ready(function() {


  $.getJSON('/api/v1/assts', {
    userId: 5
  }).then((data) => {
    console.log('getting')
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

    let id = $(e.target).data('id') //id is the assignment id to be added
    $.post(`./helps/${id}`).done((data) => {
      console.log( "Data Loaded: " + data )
    })
  })
})



})
