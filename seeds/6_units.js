
exports.seed = (knex, Promise) => {
  return knex("units")
    .del()
    .then(() => {
      return knex("units").insert([
        {id: 1, title: "Productivity", location_url: "http://www.unit.com"},
        {id: 2, title: "Development Environment", location_url: "http://www.unit.com"},
        {id: 3, title: "Javascript Language and Concepts", location_url: "http://www.unit.com"},
        {id: 4, title: "Javascript - Functional Programming", location_url: "http://www.unit.com"},
        {id: 5, title: "HTML", location_url: "http://www.unit.com"},
        {id: 6, title: "CSS", location_url: "http://www.unit.com"},
        {id: 7, title: "The DOM", location_url: "http://www.unit.com"},
        {id: 8, title: "jQuery", location_url: "http://www.unit.com"},
        {id: 9, title: "HTTP and AJAX", location_url: "http://www.unit.com"},
        {id: 10, title: "Intro to Node and Express", location_url: "http://www.unit.com"},
        {id: 11, title: "Javascript Accumulator Pattern", location_url: "http://www.unit.com"},
        {id: 12, title: "Javascript Object Creation", location_url: "http://www.unit.com"},
        {id: 13, title: "Intro to SQL", location_url: "http://www.unit.com"},
        {id: 14, title: "Intro to Knex and Express", location_url: "http://www.unit.com"},
        {id: 15, title: "Promises and Validation", location_url: "http://www.unit.com"},
        {id: 16, title: "Intro to React", location_url: "http://www.unit.com"},
        {id: 17, title: "React - Modern Javascript", location_url: "http://www.unit.com"},
        {id: 18, title: "React Components", location_url: "http://www.unit.com"},
        {id: 19, title: "React - Integrating with APIs", location_url: "http://www.unit.com"},
        {id: 20, title: "React - Redux"},
        {id: 21, title: "React Router"},
        {id: 22, title: "React - Testing"},
        {id: 23, title: "Angular - Building Apps"},
        {id: 24, title: "Angular - API Integration"},
        {id: 25, title: "Angular - Organizing Code"},
        {id: 26, title: "Angular - Deploying"},
        {id: 27, title: "Computer Science"},
        {id: 28, title: "Java"},
        {id: 29, title: "Elective - C#"},
        {id: 30, title: "Checkpoints"}
      ]);
    });
};
