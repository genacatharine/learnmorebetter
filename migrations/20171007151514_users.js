"use strict";

exports.up = (knex, Promise) => {
  return knex.schema.createTable("users", (table) => {
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
};

exports.down = (knex, Promise) => knex.schema.dropTable("users");
