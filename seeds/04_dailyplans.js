
exports.seed = (knex, Promise) => {
  return knex("dailyplans")
    .del()
    .then(() => {
      return knex("dailyplans").insert([
        {id: 1, date: "18-Sep-2017", users_id: 1},
        {id: 2, date: "19-Sep-2017", users_id: 2},
        {id: 3, date: "20-Sep-2017", users_id: 3},
        {id: 4, date: "21-Sep-2017", users_id: 2},
        {id: 5, date: "22-Sep-2017", users_id: 1},
        {id: 6, date: "25-Sep-2017", users_id: 2},
        {id: 7, date: "26-Sep-2017", users_id: 3},
        {id: 8, date: "27-Sep-2017", users_id: 2},
        {id: 9, date: "28-Sep-2017", users_id: 1},
        {id: 10, date: "29-Sep-2017", users_id: 3},
        {id: 11, date: "2-Oct-2017", users_id: 1},
        {id: 12, date: "3-Oct-2017", users_id: 2},
        {id: 13, date: "4-Oct-2017", users_id: 3},
        {id: 14, date: "5-Oct-2017", users_id: 2},
        {id: 15, date: "6-Oct-2017", users_id: 1},
        {id: 16, date: "7-Oct-2017", users_id: 1},
        {id: 17, date: "8-Oct-2017", users_id: 2},
        {id: 18, date: "9-Oct-2017", users_id: 3},
        {id: 19, date: "10-Oct-2017", users_id: 2},
        {id: 20, date: "11-Oct-2017", users_id: 1},
        {id: 21, date: "12-Oct-2017", users_id: 2},
        {id: 22, date: "13-Oct-2017", users_id: 3},
        {id: 23, date: "14-Oct-2017", users_id: 2},
        {id: 24, date: "15-Oct-2017", users_id: 1},
        {id: 25, date: "16-Oct-2017", users_id: 3},
        {id: 26, date: "17-Oct-2017", users_id: 1},
        {id: 27, date: "18-Oct-2017", users_id: 2},
        {id: 28, date: "19-Oct-2017", users_id: 3},
        {id: 29, date: "20-Oct-2017", users_id: 2},
        {id: 30, date: "21-Oct-2017", users_id: 1}
      ]);
    })
};
