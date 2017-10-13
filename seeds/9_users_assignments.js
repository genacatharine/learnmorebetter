
exports.seed = (knex, Promise) => {
  return knex("users_assignments")
    .del()
    .then(() => {
      return knex("users_assignments").insert([
        {id: 1, user_id: 7, assignment_id: 1, grade: 3},
        {id: 2, user_id: 7, assignment_id: 2, grade: 3},
        {id: 3, user_id: 7, assignment_id: 3, grade: 3},
        {id: 4, user_id: 7, assignment_id: 4, grade: 3},
        {id: 5, user_id: 7, assignment_id: 5, grade: 3},
        {id: 6, user_id: 7, assignment_id: 6, grade: 3},
        {id: 7, user_id: 7, assignment_id: 7, grade: 3},
        {id: 8, user_id: 7, assignment_id: 8, grade: 3},
        {id: 9, user_id: 7, assignment_id: 9, grade: 3},
        {id: 10, user_id: 7, assignment_id: 10, grade: 3},
        {id: 11, user_id: 7, assignment_id: 11, grade: 3},
        {id: 12, user_id: 7, assignment_id: 12, grade: 3},
        {id: 13, user_id: 7, assignment_id: 13, grade: 3},
        {id: 14, user_id: 7, assignment_id: 14, grade: 3},
        {id: 15, user_id: 7, assignment_id: 15, grade: 3},
        {id: 16, user_id: 7, assignment_id: 16, grade: 3},
        {id: 17, user_id: 7, assignment_id: 17, grade: 3},
        {id: 18, user_id: 7, assignment_id: 18},
        {id: 19, user_id: 7, assignment_id: 19},


      ]);
    });
};
