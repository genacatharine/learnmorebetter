"use strict";

exports.up = (knex, Promise) => {
  return Promise.all([
    knex.schema.createTable("cohorts", (table) => {
      table.increments();
      table.varchar("title", 255).notNullable().defaultTo("");
      table.dateTime("start_date").notNullable().defaultTo(knex.fn.now());
      table.dateTime("end_date").notNullable().defaultTo(knex.fn.now());
      table.timestamps(true, true);
    }),
    knex.schema.createTable("cohorts_users", (table) => {
      table.increments();
      table.integer("user_id")
        .notNullable()
        .references("id")
        .inTable("users")
        .onDelete("CASCADE");
      table.integer("cohort_id")
        .notNullable()
        .references("id")
        .inTable("cohorts")
        .onDelete("CASCADE");
      table.timestamps(true, true);
    }),
    knex.schema.createTable("users", (table) => {
      table.increments();
      table.varchar("first_name", 255).notNullable().defaultTo("");
      table.varchar("middle_initial", 1).defaultTo("");
      table.varchar("last_name", 255).notNullable().defaultTo("");
      table.varchar("email", 255).unique().notNullable();
      table.specificType("hashed_password", "char(60)").notNullable();
      table.boolean("is_instructor").notNullable().defaultTo(false);
      table.boolean("is_enabled").notNullable().defaultTo(true);
      table.timestamps(true, true);
    })
  ]);
};

exports.down = (knex, Promise) => {
  return Promise.all([
    knex.schema.dropTable("cohorts_users"),
    knex.schema.dropTable("users"),
    knex.schema.dropTable("cohorts")
  ]);
};
