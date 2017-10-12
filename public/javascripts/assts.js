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
      <td><button name="button" type="button" id="helpMe" data-id="${item.id}" class="btn btn-primary"> Add Me to Help Board </button></td>
      </tr>`))
    })
  })

  $('#helpMe').click( (e) => {
    
    console.log('listener on helpme button')
    // let id = $(e.target).data('id') //id is the assignment id to be added
    // console.log('id on helpme button ', id)
    // $.post(`/api/v1/helps/${id}`).done((data) => {
    //   alert( "Data Loaded: " + data );
    // })
  })




})
