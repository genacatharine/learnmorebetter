
exports.seed = (knex, Promise) => {
  return knex("dailyplans")
    .del()
    .then(() => {
      return knex("dailyplans").insert([
        {id: 1, date: "23-Oct-2017", users_id: 1},
        {id: 2, date: "24-Oct-2017", users_id: 2},
        {id: 3, date: "25-Oct-2017", users_id: 3},
        {id: 4, date: "26-Oct-2017", users_id: 2},
        {id: 5, date: "27-Oct-2017", users_id: 1},
        {id: 6, date: "28-Oct-2017", users_id: 2},
        {id: 7, date: "29-Oct-2017", users_id: 3},
        {id: 8, date: "30-Oct-2017", users_id: 2},
        {id: 9, date: "31-Oct-2017", users_id: 1},
        {id: 10, date: "1-Nov-2017", users_id: 3},
        {id: 11, date: "2-Nov-2017", users_id: 1},
        {id: 12, date: "3-Nov-2017", users_id: 2},
        {id: 13, date: "4-Nov-2017", users_id: 3},
        {id: 14, date: "5-Nov-2017", users_id: 2},
        {id: 15, date: "6-Nov-2017", users_id: 1},
        {id: 16, date: "7-Nov-2017", users_id: 1},
        {id: 17, date: "8-Nov-2017", users_id: 2},
        {id: 18, date: "9-Nov-2017", users_id: 3},
        {id: 19, date: "10-Nov-2017", users_id: 2},
        {id: 20, date: "11-Nov-2017", users_id: 1},
        {id: 21, date: "12-Nov-2017", users_id: 2},
        {id: 22, date: "13-Nov-2017", users_id: 3},
        {id: 23, date: "14-Nov-2017", users_id: 2},
        {id: 24, date: "15-Nov-2017", users_id: 1},
        {id: 25, date: "16-Nov-2017", users_id: 3},
        {id: 26, date: "17-Nov-2017", users_id: 1},
        {id: 27, date: "18-Nov-2017", users_id: 2},
        {id: 28, date: "19-Nov-2017", users_id: 3},
        {id: 29, date: "20-Nov-2017", users_id: 2},
        {id: 30, date: "21-Nov-2017", users_id: 1}
      ])
      .then(() => {
          return knex.raw("SELECT setval('dailyplans_id_seq', (SELECT MAX(id) FROM dailyplans));")
        })
    })
};
