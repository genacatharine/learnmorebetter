
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
          mastery_id: 0
        },
        {
          id: 2,
          title: "Reading Javascript Expressions",
          description: "none",
          location_url: "www.assignment.com",
          submit_url: "www.submit.com",
          mastery_id: 0
        },
        {
          id: 3,
          title: "Writing Javascript Expressions",
          description: "none",
          location_url: "www.assignment.com",
          submit_url: "www.submit.com",
          mastery_id: 0
        },
        {
          id: 4,
          title: "Semantic HTML",
          description: "none",
          location_url: "www.assignment.com",
          submit_url: "www.submit.com",
          mastery_id: 0
        },
        {
          id: 5,
          title: "CSS Checkpoint"
          description: "none",
          location_url: "www.assignment.com",
          submit_url: "www.submit.com",
          mastery_id: 0
        },
        {
          id: 6,
          title: "Project Pixel Art",
          description: "none",
          location_url: "www.assignment.com",
          submit_url: "www.submit.com",
          mastery_id: 0
        },
        {
          id: 7,
          title: "Galvanize Delivers",
          description: "none",
          location_url: "www.assignment.com",
          submit_url: "www.submit.com",
          mastery_id: 0
        },
        {
          id: 8,
          title: "Vim Checkpoint",
          description: "none",
          location_url: "www.assignment.com",
          submit_url: "www.submit.com",
          mastery_id: 0
        },
        {
          id: 9,
          title: "Accumulator",
          description: "none",
          location_url: "www.assignment.com",
          submit_url: "www.submit.com",
          mastery_id: 0
        },
        {
          id: 10,
          title: "LoDash",
          description: "none",
          location_url: "www.assignment.com",
          submit_url: "www.submit.com",
          mastery_id: 0
        },
        {
          id: 11,
          title: "AJAX Hero",
          description: "none",
          location_url: "www.assignment.com",
          submit_url: "www.submit.com",
          mastery_id: 0
        },
        {
          id: 12,
          title: "Q1 Project Demo",
          description: "none",
          location_url: "www.assignment.com",
          submit_url: "www.submit.com",
          mastery_id: 0
        },
        {
          id: 13,
          title: "Pet Shop",
          description: "none",
          location_url: "www.assignment.com",
          submit_url: "www.submit.com",
          mastery_id: 0
        },
        {
          id: 14,
          title: "Galvanize Contacts",
          description: "none",
          location_url: "www.assignment.com",
          submit_url: "www.submit.com",
          mastery_id: 0
        },
        {
          id: 15,
          title: "Galvanize Food Truck",
          description: "none",
          location_url: "www.assignment.com",
          submit_url: "www.submit.com",
          mastery_id: 0
        },
        {
          id: 16,
          title: "Galvanize Pet Grooming",
          description: "none",
          location_url: "www.assignment.com",
          submit_url: "www.submit.com",
          mastery_id: 0
        },
        {
          id: 17,
          title: "Galvanize Bookshelf",
          description: "none",
          location_url: "www.assignment.com",
          submit_url: "www.submit.com",
          mastery_id: 0
        },
        {
          id: 18,
          title: "Server Side Testing",
          description: "none",
          location_url: "www.assignment.com",
          submit_url: "www.submit.com",
          mastery_id: 0
        },
        {
          id: 19,
          title: "Q2 Project Demo",
          description: "none",
          location_url: "www.assignment.com",
          submit_url: "www.submit.com",
          mastery_id: 0
        }
      ]);
    });
};
