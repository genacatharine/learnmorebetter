$( document ).ready(function() {




 $.getJSON('/api/v1/dailyplan', {"date": this.value}).then( (data) => {
  console.log('get dailyplan ', data)
  let tbody = $('#dailyPlan tbody')
  data.forEach( (item) => {
  tbody.append($(`<tr>
    <td>${item.time}</td>
    <td>${item.plan}</td>
    <td><a href="${item.lessonLink}">${item.lesson}</a></td>
    </tr>`))
  })
})



  // .done(function() {
  //   alert( "second success" );
  // })
  // .fail(function() {
  //   alert( "error" );
  // })
  // .always(function() {
  //   alert( "finished" );
  // });
// }
})




  // $("this").click(function(){
  //   console.log("helloworld")
  // });
