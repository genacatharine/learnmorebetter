$(document).ready(function() {





      $.getJSON('/api/v1/dailyplan').then((data) => {
        let tbody = $('#dailyPlan tbody')
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

})
