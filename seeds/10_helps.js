exports.seed = (knex, Promise) => {
  return knex("helps")
    .del()
    .then(() => {
      return knex("helps").insert([
        {id: 1, user_id: 5, assignment_id: 17}
        {id: 1, user_id: 5, assignment_id: 18}
        {id: 1, user_id: 5, assignment_id: 19}
        {id: 1, user_id: 6, assignment_id: 17}
        {id: 1, user_id: 6, assignment_id: 18}
        {id: 1, user_id: 6, assignment_id: 19}
      ]);
    });
};
