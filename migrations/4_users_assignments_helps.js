
exports.up = (knex, Promise) => {
  return Promise.all([
    knex.schema.createTable("users_assignments", (table) => {
    table.increments();
    table.integer("user_id")
      .notNullable()
      .references("id")
      .inTable("users")
      .onDelete("CASCADE");
    table.integer("assignment_id")
        .notNullable()
        .references("id")
        .inTable("assignments")
        .onDelete("CASCADE");
    table.integer("grade");
    table.timestamps(true, true);
    }),
    knex.schema.createTable("helps", (table) => {
      table.increments();
      table.integer("user_id")
        .notNullable()
        .references("id")
        .inTable("users")
        .onDelete("CASCADE");
      table.integer("assignment_id")
        .notNullable()
        .references("id")
        .inTable("assignments")
        .onDelete("CASCADE");
      table.timestamps(true, true);
    })
  ]);
};

exports.down = (knex, Promise) => {
  return Promise.all([
    knex.schema.dropTable("helps"),
    knex.schema.dropTable("users_assignments")
  ]);
};
