$( document ).ready(function() {
  $( function() {
    $( "#datepicker" ).datepicker();
  });

$(".chicken").datepicker({
onSelect: function(dateText){
  // console.log('this value', this.value)

 $.get('api/v1/dailyplan', {"date": this.value}, function(data) {
   console.log(data)
data.forEach(function(item){
  console.log(item)
  tbody.append($`<tr>
    <td>${}</td>
    <td></td>
    <td></td>

    </tr>`)
  // res.render('dailyplan')

})


  // alert( "success" );
})

// $.getJSON('/api/v1/students').then(data => {
//   console.log("get students", data)
//   let tbody = $('#studentList tbody')
//
//   data.forEach((student, i) => {
//     tbody.append($(`<tr>
//     <td><a href="/students/${student.id}">${student.id}</a></td>
//     <td>${student.name}</td>
//     <td>${student.mantra}</td>
//     <td>
//       <div class="btn-group" role="group" aria-label="Basic example">
//         <button type="button" class="btn btn-secondary"><a href="/students/${student.id}/edit">Edit</a></button>
//         <button type="button" class="btn btn-secondary deleteBtn" data-id="${student.id}">Delete</button>
//       </div>
//     </td>
//   </tr>`))
//   })
// })
// }

  // .done(function() {
  //   alert( "second success" );
  // })
  // .fail(function() {
  //   alert( "error" );
  // })
  // .always(function() {
  //   alert( "finished" );
  // });
}
})

  // $("this").click(function(){
  //   console.log("helloworld")
  // });

})
