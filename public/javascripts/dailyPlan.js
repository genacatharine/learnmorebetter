$( document ).ready(function() {
  // $( function() {
  //   $( "#datepicker" ).datepicker();
  // });

// $(".chicken").datepicker({
// onSelect: function(dateText){
  // console.log('this value', this.value)

 $.getJSON('/api/v1/dailyplan', {date: '2017-10-02'}).done( (data) => {
  console.log('get dailyplans ', data)
  let tbody = $('#dailyplan tbody')
  data.forEach( (item) => {
  console.log('each ',item)
  tbody.append($(`<tr>
    <td>${item.time}</td>
    <td>${item.plan}</td>
    <td><a href="${item.lessonLink}">${item.lesson}</a></td>
      // <div class="btn-group" role="group" aria-label="Basic example">
      //   <button type="button" class="btn btn-secondary"><a href="/dailyplan/edit">Edit</a></button>
      //   <button type="button" class="btn btn-secondary deleteBtn" >Delete</button>
      </div>
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
