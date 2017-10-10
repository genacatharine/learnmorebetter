$( document ).ready(function() {




 $.getJSON('/api/v1/assts', {"usersId": '1'}).then( (data) => {
  console.log('get assts ', data)
  let tbody = $('#assignments tbody')
  data.forEach( (item) => {
  tbody.append($(`<tr>
    <td>${item.title}</td>
    <td>${item.description}</td>
<<<<<<< HEAD
    <td><a href="${item.location_url}">${item.title}</a></td>
    <td><a href="${item.submit_url}">Submit Here</a></td>
=======
    <td><a href="${item.locationUrl}">${item.title}</a></td>
    <td><a href="${item.submitUrl}">Submit Here</a></td>
>>>>>>> FirstPage
    </tr>`))
  })
})

})




  // $("this").click(function(){
  //   console.log("helloworld")
  // });
