$( document ).ready(function() {
<<<<<<< HEAD
  // $( function() {
  //   $( "#datepicker" ).datepicker();
  // });

// $(".chicken").datepicker({
// onSelect: function(dateText){
  // console.log('this value', this.value)

 $.getJSON('/api/v1/dailyplan', {date: '2017-10-02'}).done( (data) => {
  let tbody = $('#dailyPlan tbody')
=======
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
>>>>>>> fa4282257513713869cdb5e0d9202203b6cb4bd4
  data.forEach( (item) => {
  tbody.append($(`<tr>
    <td>${item.time}</td>
    <td>${item.plan}</td>
    <td><a href="${item.lessonLink}">${item.lesson}</a></td>
    </tr>`))
  })
})

<<<<<<< HEAD

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
=======
}
>>>>>>> fa4282257513713869cdb5e0d9202203b6cb4bd4

  // $("this").click(function(){
  //   console.log("helloworld")
  // });
