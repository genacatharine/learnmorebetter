$( document ).ready(function() {

 $.getJSON('/api/v1/assts', {userId: 5}).then( (data) => {
  console.log('get method assts data ', data)
  let tbody = $('#assignments tbody')
  data.forEach( (item) => {
    tbody.append($(`<tr>
      <td><a href="${item.locationUrl}">${item.title}</a></td>
      <td><a href="${item.unitUrl}">${item.unit}</a></td>
      <td><a href="${item.submitUrl}" class="btn btn-default">Submit</a></td>
      <td>${item.grade}</td>
      <td><button type="submit" class="btn btn-primary" id="helpme">Add Me to Help Board</button></td>

      </tr>`))
    })
  })

})
