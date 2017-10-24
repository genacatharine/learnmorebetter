
exports.seed = (knex, Promise) => {
  return knex("dailyplans_events")
    .del()
    .then(() => {
      return knex("dailyplans_events").insert([
        {
          id: 1,
          dailyplan_id: 1,
          event_time: "09:00:00",
          plan: "Stand Up & Challenge Warm Up"
        },
        {
          id: 2,
          dailyplan_id: 1,
          event_time: "10:00:00",
          plan: "Lesson : Promises",
          unit_id: 15
        },
        {
          id: 3,
          dailyplan_id: 1,
          event_time: "12:00:00",
          plan: "Lunch"
        },
        {
          id: 4,
          dailyplan_id: 1,
          event_time: "16:40:00",
          plan: "Stand Down"
        },
        {
          id: 5,
          dailyplan_id: 2,
          event_time: "09:00:00",
          plan: "Stand Up & Challenge Warm Up"
        },
        {
          id: 6,
          dailyplan_id: 2,
          event_time: "10:00:00",
          plan: "Swift and Xcode with Lisa"
        },
        {
          id: 7,
          dailyplan_id: 2,
          event_time: "12:00:00",
          plan: "Lunch"
        },
        {
          id: 8,
          dailyplan_id: 2,
          event_time: "13:00:00",
          plan: "Python with Alicia"
        },
        {
          id: 9,
          dailyplan_id: 3,
          event_time: "09:00:00",
          plan: "Stand Up & Challenge Warm Up"
        },
        {
          id: 10,
          dailyplan_id: 3,
          event_time: "10:00:00",
          plan: "IoT with Pete"
        },
        {
          id: 11,
          dailyplan_id: 3,
          event_time: "12:00:00",
          plan: "Lunch"
        },
        {
          id: 12,
          dailyplan_id: 3,
          event_time: "13:00:00",
          plan: "Ruby on Rails with Craig"
        },
        {
          id: 13,
          dailyplan_id: 4,
          event_time: "09:00:00",
          plan: "Stand Up & Challenge Warm Up"
        },
        {
          id: 14,
          dailyplan_id: 4,
          event_time: "10:00:00",
          plan: "UFE"
        },
        {
          id: 15,
          dailyplan_id: 4,
          event_time: "12:00:00",
          plan: "Lunch"
        },
        {
          id: 16,
          dailyplan_id: 4,
          event_time: "13:00:00",
          plan: "Career Services"
        },
        {
          id: 17,
          dailyplan_id: 4,
          event_time: "10:00:00",
          plan: "UFE"
        },
        {
          id: 18,
          dailyplan_id: 4,
          event_time: "12:00:00",
          plan: "Lunch"
        },
        {
          id: 19,
          dailyplan_id: 4,
          event_time: "13:00:00",
          plan: "UFE"
        },
        {
          id: 20,
          dailyplan_id: 4,
          event_time: "15:00:00",
          plan: "Lightning Talks"
        }
      ])
      .then(() => {
          return knex.raw("SELECT setval('dailyplans_events_id_seq', (SELECT MAX(id) FROM dailyplans_events));")
            })
    });
};
