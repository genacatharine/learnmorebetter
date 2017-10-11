$( document ).ready(function() {

 $.getJSON('/api/v1/helps', {userId: 5}).then( (data) => {
  let tbody = $('#helps tbody')
  data.forEach( (item) => {
    tbody.append($(`<tr>
      <td>${item.title}</a></td>
      <td>${item.firstName}</a></td>
      <td>${item.lastName}</a></td>
      <td>${item.email}</a></td>
      </tr>`))
    })
  })

})
