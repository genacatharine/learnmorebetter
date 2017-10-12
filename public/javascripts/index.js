$(document).ready(() => {

 // $(".login").click(() => {
 //    let loginData = JSON.stringify({
 //      email: $("#loginEmail").val(),
 //      password: $("#loginPassword").val()
 //    });
 //
 //    console.log("Sending Data : ", loginData);
 //
 //    $.post("/", loginData)
 //      .done((response) => console.log(response), "json")
 //  });
  let now = new Date(Date.now())
  console.log(now)


   $.getJSON('/api/v1/dailyplan', {
     "date": 2017-10-02
   }).then((data) => {
     let tbody = $('.dailyplanwidget tbody')
     $(tbody).empty()
     data.forEach((item) => {
       if(item.lesson){
       tbody.append($(`<tr>
       <td>${item.time}</td>
       <td>${item.plan}</td>
       <td><a href="${item.lessonLink}">${item.lesson}</a></td>
       </tr>`))
       }
       else {
         tbody.append($(`<tr>
         <td>${item.time}</td>
         <td>${item.plan}</td>
         <td></td>
         </tr>`))
       }
     })
   })

   $.getJSON('/api/v1/assts', {
     userId: 5
   }).then((data) => {
     console.log('getting')
     let tbody = $('.asstswidget tbody')
     data.forEach((item) => {
       if (!item.grade) {
         tbody.append($(`<tr>
         <td><a href="${item.locationUrl}">${item.title}</a></td>
         <td><a href="${item.submitUrl}" class="btn btn-default">Submit</a></td>
         <td><button name="button" type="button" data-id="${item.id}" class="helpMe btn btn-primary"> Add Help </button></td>
         </tr>`))
       }
     })
   })

   $.getJSON('/api/v1/helps', {
     userId: 5
   }).then((data) => {
     let tbody = $('.helpswidget tbody')
     for (item in data) {
       tbody.append($(`<tr>
         <td>${item}</td>
         </tr>`))
         data[item].forEach( (user) => {
           tbody.append($(`<tr>
           <td></td>
           <td>${user.first} ${user.last}</td>
           <td>${user.email}</td>
           </tr>`))
         })
     }
   })


})
