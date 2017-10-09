
exports.seed = (knex, Promise) => {
  return knex("dailyplans")
    .del()
    .then(() => {
      return knex("dailyplans").insert([
        {id: 1, date: "2-Oct-2017", users_id: 1},
        {id: 2, date: "3-Oct-2017", users_id: 2},
        {id: 3, date: "4-Oct-2017", users_id: 3},
        {id: 4, date: "5-Oct-2017", users_id: 2},
        {id: 5, date: "6-Oct-2017", users_id: 1},
      ]);
    })
};
