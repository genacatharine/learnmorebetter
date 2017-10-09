"use strict";

exports.seed = (knex, Promise) => {
  return knex("cohorts")
    .del()
    .then(function () {
      return knex("cohorts").insert([
        {
          id: 1, title: "g36",
          start_date: new Date("2016-10-03 12:00:00 UTC"),
          end_date: new Date("2017-03-09 20:00:00 UTC"),
          created_at: new Date("2017-10-09 15:00:00 UTC"),
          updated_at: new Date("2017-10-09 15:00:00 UTC")
        }, {
          id: 2, title: "g44",
          start_date: new Date("2017-02-01 12:00:00 UTC"),
          end_date: new Date("2017-07-28 20:00:00 UTC"),
          created_at: new Date("2017-10-09 15:00:00 UTC"),
          updated_at: new Date("2017-10-09 15:00:00 UTC")
        }, {
          id: 3, title: "g49",
          start_date: new Date("2017-04-01 12:00:00 UTC"),
          end_date: new Date("2017-09-28 20:00:00 UTC"),
          created_at: new Date("2017-10-09 15:00:00 UTC"),
          updated_at: new Date("2017-10-09 15:00:00 UTC")
        }, {
          id: 4, title: "g62",
          start_date: new Date("2017-07-31 12:00:00 UTC"),
          end_date: new Date("2018-01-18 20:00:00 UTC"),
          created_at: new Date("2017-10-09 15:00:00 UTC"),
          updated_at: new Date("2017-10-09 15:00:00 UTC")
        }, {
          id: 5, title: "g68",
          start_date: new Date("2017-10-02 12:00:00 UTC"),
          end_date: new Date("2018-03-20 20:00:00 UTC"),
          created_at: new Date("2017-10-09 15:00:00 UTC"),
          updated_at: new Date("2017-10-09 15:00:00 UTC")
        }
      ]);
    })
    .then(() => knex.raw("SELECT setval('cohorts_id_seq', (SELECT MAX(id) FROM cohorts));"))
};
