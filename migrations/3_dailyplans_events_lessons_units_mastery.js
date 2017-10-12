"use strict";

exports.up = (knex, Promise) => {
  return Promise.all([
    knex.schema.createTable("dailyplans_events", (table) => {
    table.increments();
    table.integer("dailyplan_id")
      .notNullable()
      .references("id")
      .inTable("dailyplans")
      .onDelete("CASCADE");
    table.time("event_time").notNullable().defaultTo(knex.fn.now());
    table.varchar("plan", 255);
    table.integer("unit_id");
    table.timestamps(true, true);
    }),
    knex.schema.createTable("lessons", (table) => {
      table.increments();
      table.varchar("title", 255);
      table.varchar("location_url", 255);
      table.integer("dailyplan_id")
        .notNullable()
        .references("id")
        .inTable("units")
        .onDelete("CASCADE");
      table.integer("unit_id")
        .notNullable()
        .references("id")
        .inTable("units")
        .onDelete("CASCADE");
      table.timestamps(true, true);
    }),
    knex.schema.createTable("units", (table) => {
      table.increments();
      table.varchar("title", 255);
      table.varchar("description", 255);
      table.varchar("location_url", 255);
      table.timestamps(true, true);
    }),
    knex.schema.createTable("assignments", (table) => {
      table.increments();
      table.varchar("title", 255);
      table.varchar("description", 255);
      table.varchar("location_url", 255);
      table.varchar("submit_url", 255);
      table.integer("unit_id", 255)
        .references("id")
        .inTable("units")
        .onDelete("CASCADE");
      table.integer("mastery_id")
        .notNullable()
        .references("id")
        .inTable("mastery_track")
        .onDelete("CASCADE");
      table.timestamps(true, true);
    }),
    knex.schema.createTable("mastery_track", (table) => {
      table.increments();
      table.varchar("title", 255);
      table.varchar("description", 255);
      table.timestamps(true, true);
    })
  ]);
};

exports.down = (knex, Promise) => {
  return Promise.all([

    knex.schema.dropTable("assignments"),
    knex.schema.dropTable("lessons"),
    knex.schema.dropTable("units"),
    knex.schema.dropTable("dailyplans_events"),
    knex.schema.dropTable("mastery_track")
  ]);
};
