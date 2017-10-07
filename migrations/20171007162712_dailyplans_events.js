"use strict";

exports.up = (knex, Promise) => {
  return knex.schema.createTable("dailyplans_events", (table) => {
    table.increments();
    table.integer("dailyplan_id")
      .notNullable()
      .references("id")
      .inTable("dailyplans")
      .onDelete("CASCADE");
    table.dateTime("event_time").notNullable().defaultTo(knex.fn.now());
    table.varchar("event", 255);
    table.integer("lesson_id").notNullable().defaultTo(0);
    table.timestamps(true, true);
  })
};

exports.down = (knex, Promise) => knex.schema.dropTable("dailyplans_events");
