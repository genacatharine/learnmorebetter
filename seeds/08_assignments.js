
exports.seed = (knex, Promise) => {
  return knex('assignments')
    .del()
    .then(() => {
      return knex('assignments').insert([
        {
          id: 1,
          title: "CLI Assessment",
          description: "none",
          location_url: "www.assignment.com",
          submit_url: "www.submit.com",
          unit_id: 1,
          mastery_id: 1
        },
        {
          id: 2,
          title: "Reading Javascript Expressions",
          description: "none",
          location_url: "www.assignment.com",
          submit_url: "www.submit.com",
          unit_id: 2,
          mastery_id: 1
        },
        {
          id: 3,
          title: "Writing Javascript Expressions",
          description: "none",
          location_url: "www.assignment.com",
          submit_url: "www.submit.com",
          unit_id: 3,
          mastery_id: 1
        },
        {
          id: 4,
          title: "Semantic HTML",
          description: "none",
          location_url: "www.assignment.com",
          submit_url: "www.submit.com",
          unit_id: 4,
          mastery_id: 1
        },
        {
          id: 5,
          title: "CSS Checkpoint",
          description: "none",
          location_url: "www.assignment.com",
          submit_url: "www.submit.com",
          unit_id: 5,
          mastery_id: 1
        },
        {
          id: 6,
          title: "Project Pixel Art",
          description: "none",
          location_url: "www.assignment.com",
          submit_url: "www.submit.com",
          unit_id: 6,
          mastery_id: 1
        },
        {
          id: 7,
          title: "Galvanize Delivers",
          description: "none",
          location_url: "www.assignment.com",
          submit_url: "www.submit.com",
          unit_id: 7,
          mastery_id: 1
        },
        {
          id: 8,
          title: "Vim Checkpoint",
          description: "none",
          location_url: "www.assignment.com",
          submit_url: "www.submit.com",
          unit_id: 8,
          mastery_id: 1
        },
        {
          id: 9,
          title: "Accumulator",
          description: "none",
          location_url: "www.assignment.com",
          submit_url: "www.submit.com",
          unit_id: 9,
          mastery_id: 1
        },
        {
          id: 10,
          title: "LoDash",
          description: "none",
          location_url: "www.assignment.com",
          submit_url: "www.submit.com",
          unit_id: 10,
          mastery_id: 1
        },
        {
          id: 11,
          title: "AJAX Hero",
          description: "none",
          location_url: "www.assignment.com",
          submit_url: "www.submit.com",
          unit_id: 11,
          mastery_id: 1
        },
        {
          id: 12,
          title: "Q1 Project Demo",
          description: "none",
          location_url: "www.assignment.com",
          submit_url: "www.submit.com",
          unit_id: 12,
          mastery_id: 1
        },
        {
          id: 13,
          title: "Pet Shop",
          description: "none",
          location_url: "www.assignment.com",
          submit_url: "www.submit.com",
          unit_id: 13,
          mastery_id: 1
        },
        {
          id: 14,
          title: "Galvanize Contacts",
          description: "none",
          location_url: "www.assignment.com",
          submit_url: "www.submit.com",
          unit_id: 14,
          mastery_id: 1
        },
        {
          id: 15,
          title: "Galvanize Food Truck",
          description: "none",
          location_url: "www.assignment.com",
          submit_url: "www.submit.com",
          unit_id: 15,
          mastery_id: 1
        },
        {
          id: 16,
          title: "Galvanize Pet Grooming",
          description: "none",
          location_url: "www.assignment.com",
          submit_url: "www.submit.com",
          unit_id: 16,
          mastery_id: 1
        },
        {
          id: 17,
          title: "Galvanize Bookshelf",
          description: "none",
          location_url: "https://github.com/gSchool/galvanize-bookshelf",
          submit_url: "https://learn.galvanize.com/cohorts/236/exercises/10128",
          unit_id: 17,
          mastery_id: 1
        },
        {
          id: 18,
          title: "Server Side Testing",
          description: "none",
          location_url: "https://github.com/gSchool/server-testing-assessment",
          submit_url: "https://learn.galvanize.com/cohorts/236/exercises/10133",
          unit_id: 18,
          mastery_id: 1
        },
        {
          id: 19,
          title: "Q2 Project Demo",
          description: "none",
          location_url: "www.assignment.com",
          submit_url: "www.submit.com",
          unit_id: 19,
          mastery_id: 1
        }
      ])
      .then(() => {
          return knex.raw("SELECT setval('assignments_id_seq', (SELECT MAX(id) FROM assignments));")
            })
    });
};
