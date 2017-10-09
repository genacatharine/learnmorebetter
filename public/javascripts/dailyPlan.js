$( document ).ready(function() {
//   $( function() {
//     $( "#datepicker" ).datepicker();
//   });
$(document).on('click', '.chicken', function(e){
  console.log(this.value)
})
// $("#chicken").datepicker({
// onSelect: function(dateText){
//   console.log('this value', this.value)
// }
 $.getJSON('/api/v1/dailyplan', {"date": this.value}).then( (data) => {
  console.log('get dailyplan ', data)
  let tbody = $('#dailyplan tbody')
  data.forEach( (item) => {
  console.log(item)
  tbody.append($(`<tr>
    <td>${item.time}</td>
    <td>${item.plan}</td>
    <td><a href="${item.lessonLink}">${item.lesson}</a></td>
      <div class="btn-group" role="group" aria-label="Basic example">
        <button type="button" class="btn btn-secondary"><a href="/dailyplan/edit">Edit</a></button>
        <button type="button" class="btn btn-secondary deleteBtn" data-id="${student.id}">Delete</button>
      </div>
    </tr>`))
  })
})

}

  // $("this").click(function(){
  //   console.log("helloworld")
  // });
