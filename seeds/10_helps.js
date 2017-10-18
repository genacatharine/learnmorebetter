exports.seed = (knex, Promise) => {
  return knex("helps")
    .del()
    .then(() => {
      return knex("helps").insert([
        {id: 1, user_id: 5, assignment_id: 17},
        {id: 2, user_id: 5, assignment_id: 18},
        {id: 3, user_id: 5, assignment_id: 19},
        {id: 4, user_id: 6, assignment_id: 17},
        {id: 5, user_id: 6, assignment_id: 18},
        {id: 6, user_id: 6, assignment_id: 19}
      ])
      .then(() => {
          return knex.raw("SELECT setval('helps_id_seq', (SELECT MAX(id) FROM helps));")
            })
    });
};
