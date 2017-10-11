$( document ).ready(function() {

 $.getJSON('/api/v1/assts', {userId: 5}).then( (data) => {
  console.log('get method assts data ', data)
  let tbody = $('#assignments tbody')
  let newdata = [{title, description, locationUrl, submitUrl}, {title, description, locationUrl, submitUrl}, {title, description, locationUrl, submitUrl}]
  newdata.forEach( (item) => {
  // tbody.append($(`<tr>
  //   <td>${item.title}</td>
  //   <td>${item.description}</td>
  //   <td><a href="${item.locationUrl}">${item.title}</a></td>
  //   <td><a href="${item.submitUrl}">Submit Here</a></td>
  //
  //   </tr>`))
  tbody.append($(`<tr>
    <td>${item.title}</td>
    <td>${item.description}</td>
    <td><a href="${item.locationUrl}">lesson link</a></td>
    <td><a href="${item.submitUrl}">Submit Here</a></td>
    </tr>`))
  })
})

})
