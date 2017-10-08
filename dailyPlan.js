$( document ).ready(function() {
  $( function() {
    $( "#datepicker" ).datepicker();
  });

$(".chicken").datepicker({
onSelect: function(dateText){
  console.log(this.value)

 $.get( "dailyPlan.js", function() {
  alert( "success" );
})
  .done(function() {
    alert( "second success" );
  })
  .fail(function() {
    alert( "error" );
  })
  .always(function() {
    alert( "finished" );
  });
}
})

  // $("this").click(function(){
  //   console.log("helloworld")
  // });

})
