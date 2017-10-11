"use strict";

exports.up = (knex, Promise) => {
  return knex.schema.createTable("dailyplans", (table) => {
    table.increments();
    table.date("date").notNullable().defaultTo(knex.fn.now());
    table.integer("users_id")
      .notNullable()
      .references("id")
      .inTable("users")
      .onDelete("CASCADE");
    table.timestamps(true, true);
  })
};

exports.down = (knex, Promise) => knex.schema.dropTable("dailyplans");
