"use strict";

exports.up = (knex, Promise) => {
  return knex.schema.createTable("dailyplans", (table) => {
    table.increments();
    table.dateTime("plan_date").notNullable().defaultTo(knex.fn.now());
    table.integer("created_by_instructor")
      .notNullable()
      .references("id")
      .inTable("users")
      .onDelete("CASCADE");
    table.timestamps(true, true);
  })
};

exports.down = (knex, Promise) => knex.schema.dropTable("dailyplans");
