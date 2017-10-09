$( document ).ready(function() {
  $( function() {
    $( "#datepicker" ).datepicker();
  });

$(".chicken").datepicker({
onSelect: function(dateText){
  // console.log('this value', this.value)

 $.get( "dailyPlan.js", {"date": this.value}, function(data) {
data.forEach(function(item){
  console.log(item)
  // res.render('dailyplan')

})


  // alert( "success" );
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
}
})

  // $("this").click(function(){
  //   console.log("helloworld")
  // });

})
