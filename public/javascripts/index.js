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
  var d = new Date();
  var month = d.getUTCMonth() + 1; //months from 1-12
  var day = d.getUTCDate();
  var year = d.getUTCFullYear();
  d = month + "/" + day + "/" + year;


  $.getJSON('/api/v1/dailyplan', {
    date: d
  }).then((data) => {
    let tbody = $('.dailyplanwidget tbody')
    $(tbody).empty()
    data.forEach((item) => {
      if (!item.unit) {
        item.unit = ''
        item.unitLink = ''
      }
      tbody.append($(`<tr>
       <td>${item.time}</td>
       <td>${item.plan}</td>
       <td><a href="${item.unitLink}">${item.unit}</a></td>
       </tr>`))
    })
  })

  $.getJSON('/api/v1/assts').then((data) => {
    let tbody = $('.asstswidget tbody')
    data.forEach((item) => {
      if (!item.grade) {
        tbody.append($(`<tr>
       <td><a href="${item.locationUrl}">${item.title}</a></td>
       <td><a href="${item.submitUrl}" class="btn btn-default" data-asst='${item}'>Submit</a></td>
       <td><button name="button" type="button" data-id="${item.id}" class="helpMe btn btn-primary"> Add Help </button></td>
       </tr>`))
        $('.helpMe').click((e) => {
          let id = $(e.target).data('id')
          $.post(`./helps/${id}`)
            .done((data) => {
            })
        })

      }
    })
  })

  $.getJSON('/api/v1/helps').then((data) => {
    let dash = $('.helpswidget tbody')
    for (item in data) {
      dash.append($(`<tr>
      <td>${item}</td>
      </tr>`))
      data[item].forEach((user) => {
        dash.append($(`<tr>
        <td></td>
        <td> <a href="mailto:${user.email}">${user.first} ${user.last}</td>

        </tr>`))
      })
    }
  })


})
