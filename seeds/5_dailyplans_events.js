
exports.seed = (knex, Promise) => {
  return knex("dailyplans_events")
    .del()
    .then(() => {
      return knex("dailyplans_events").insert([
        {
          id: 1,
          dailyplan_id: 11,
          event_time: "09:00:00",
          plan: "Stand Up & Challenge Warm Up"
        },
        {
          id: 2,
          dailyplan_id: 11,
          event_time: "10:00:00",
          plan: "Lesson 1 : Promises"
        },
        {
          id: 3,
          dailyplan_id: 11,
          event_time: "12:00:00",
          plan: "Lunch"
        },
        {
          id: 4,
          dailyplan_id: 11,
          event_time: "16:40:00",
          plan: "Stand Down"
        }
      ]);
    });
};
