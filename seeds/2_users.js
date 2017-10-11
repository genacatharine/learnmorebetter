
exports.seed = (knex, Promise) => {
  // Deletes ALL existing entries
  return knex("users")
    .del()
    .then(() => {
      return knex("users").insert([
        {
          id: 1,
          first_name: "Craig",
          middle_initial: "",
          last_name: "Quincy",
          email: "craig@craig.com",
          hashed_password: "",
          is_instructor: true,
          is_enabled: true
        },
        {
          id: 2,
          first_name: "Pete",
          middle_initial: "",
          last_name: "Silva",
          email: "pete@pete.com",
          hashed_password: "",
          is_instructor: true,
          is_enabled: true
        },
        {
          id: 3,
          first_name: "Alicia",
          middle_initial: "",
          last_name: "Key",
          email: "alicia@alicia.com",
          hashed_password: "",
          is_instructor: true,
          is_enabled: true
        },
        {
          id: 4,
          first_name: "Gena",
          middle_initial: "",
          last_name: "Israel",
          email: "gena@gena.com",
          hashed_password: "$2a$10$b5ZN4Jsr.xPdD7FswhRHf.r.GtcH/jBsIsGuDOrdV4YYceDCpdnLe",
          is_instructor: false,
          is_enabled: true
        },
        {
          id: 5,
          first_name: "Danah",
          middle_initial: "",
          last_name: "Olivetree",
          email: "danah@danah.com",
          hashed_password: "",
          is_instructor: false,
          is_enabled: true
        },
        {
          id: 6,
          first_name: "Steven",
          middle_initial: "J",
          last_name: "Burns",
          email: "stevenjburns@msn.com",
          hashed_password: "",
          is_instructor: false,
          is_enabled: true
        },
      ]);
    });
};
