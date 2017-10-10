
exports.seed = (knex, Promise) => {
  return knex("mastery_track")
    .del()
    .then(() => {
      return knex("mastery_track").insert([
        {id: 1, title: "No Title", description: "No Description"}
      ]);
    });
};
