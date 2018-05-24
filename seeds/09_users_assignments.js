
exports.seed = (knex, Promise) => {
  return knex("users_assignments")
    .del()
    .then(() => {
      return knex("users_assignments").insert([
        {id: 1, user_id: 4, assignment_id: 1, grade: 3},
        {id: 2, user_id: 4, assignment_id: 2, grade: 3},
        {id: 3, user_id: 4, assignment_id: 3, grade: 3},
        {id: 4, user_id: 4, assignment_id: 4, grade: 3},
        {id: 5, user_id: 4, assignment_id: 5, grade: 3},
        {id: 6, user_id: 4, assignment_id: 6, grade: 3},
        {id: 7, user_id: 4, assignment_id: 7, grade: 3},
        {id: 8, user_id: 4, assignment_id: 8, grade: 3},
        {id: 9, user_id: 4, assignment_id: 9, grade: 3},
        {id: 10, user_id: 4, assignment_id: 10, grade: 3},
        {id: 11, user_id: 4, assignment_id: 11, grade: 3},
        {id: 12, user_id: 4, assignment_id: 12, grade: 3},
        {id: 13, user_id: 4, assignment_id: 13, grade: 3},
        {id: 14, user_id: 4, assignment_id: 14, grade: 3},
        {id: 15, user_id: 4, assignment_id: 15, grade: 3},
        {id: 16, user_id: 4, assignment_id: 16, grade: 3},
        {id: 17, user_id: 4, assignment_id: 17, grade: 3},
        {id: 18, user_id: 4, assignment_id: 18},
        {id: 19, user_id: 4, assignment_id: 19},
        {id: 20, user_id: 5, assignment_id: 1, grade: 3},
        {id: 21, user_id: 5, assignment_id: 2, grade: 3},
        {id: 22, user_id: 5, assignment_id: 3, grade: 3},
        {id: 23, user_id: 5, assignment_id: 4, grade: 3},
        {id: 24, user_id: 5, assignment_id: 5, grade: 3},
        {id: 25, user_id: 5, assignment_id: 6, grade: 3},
        {id: 26, user_id: 5, assignment_id: 7, grade: 3},
        {id: 27, user_id: 5, assignment_id: 8, grade: 3},
        {id: 28, user_id: 5, assignment_id: 9, grade: 3},
        {id: 29, user_id: 5, assignment_id: 10, grade: 3},
        {id: 30, user_id: 5, assignment_id: 11, grade: 3},
        {id: 31, user_id: 5, assignment_id: 12, grade: 3},
        {id: 32, user_id: 5, assignment_id: 13, grade: 3},
        {id: 33, user_id: 5, assignment_id: 14, grade: 3},
        {id: 34, user_id: 5, assignment_id: 15, grade: 3},
        {id: 35, user_id: 5, assignment_id: 16, grade: 3},
        {id: 36, user_id: 5, assignment_id: 17, grade: 3},
        {id: 37, user_id: 5, assignment_id: 18},
        {id: 38, user_id: 5, assignment_id: 19},
        {id: 39, user_id: 6, assignment_id: 1, grade: 3},
        {id: 40, user_id: 6, assignment_id: 2, grade: 3},
        {id: 41, user_id: 6, assignment_id: 3, grade: 3},
        {id: 42, user_id: 6, assignment_id: 4, grade: 3},
        {id: 43, user_id: 6, assignment_id: 5, grade: 3},
        {id: 44, user_id: 6, assignment_id: 6, grade: 3},
        {id: 45, user_id: 6, assignment_id: 7, grade: 3},
        {id: 46, user_id: 6, assignment_id: 8, grade: 3},
        {id: 47, user_id: 6, assignment_id: 9, grade: 3},
        {id: 48, user_id: 6, assignment_id: 10, grade: 3},
        {id: 49, user_id: 6, assignment_id: 11, grade: 3},
        {id: 50, user_id: 6, assignment_id: 12, grade: 3},
        {id: 51, user_id: 6, assignment_id: 13, grade: 3},
        {id: 52, user_id: 6, assignment_id: 14, grade: 3},
        {id: 53, user_id: 6, assignment_id: 15, grade: 3},
        {id: 54, user_id: 6, assignment_id: 16, grade: 3},
        {id: 55, user_id: 6, assignment_id: 17, grade: 3},
        {id: 56, user_id: 6, assignment_id: 18},
        {id: 57, user_id: 6, assignment_id: 19},

      ])
      .then(() => {
          return knex.raw("SELECT setval('users_assignments_id_seq', (SELECT MAX(id) FROM users_assignments));")
            })
    });
};