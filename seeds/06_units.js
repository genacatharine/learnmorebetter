
exports.seed = (knex, Promise) => {
  return knex("units")
    .del()
    .then(() => {
      return knex("units").insert([
        {id: 1, title: "Productivity", location_url: "https://learn.galvanize.com/cohorts/236/units/2632"},
        {id: 2, title: "Development Environment", location_url: "https://learn.galvanize.com/cohorts/236/units/2633"},
        {id: 3, title: "Javascript Language and Concepts", location_url: "https://learn.galvanize.com/cohorts/236/units/2634"},
        {id: 4, title: "Javascript - Functional Programming", location_url: "https://learn.galvanize.com/cohorts/236/units/2635"},
        {id: 5, title: "HTML", location_url: "https://learn.galvanize.com/cohorts/236/units/2636"},
        {id: 6, title: "CSS", location_url: "https://learn.galvanize.com/cohorts/236/units/2637"},
        {id: 7, title: "The DOM", location_url: "https://learn.galvanize.com/cohorts/236/units/2638"},
        {id: 8, title: "jQuery", location_url: "https://learn.galvanize.com/cohorts/236/units/2639"},
        {id: 9, title: "HTTP and AJAX", location_url: "https://learn.galvanize.com/cohorts/236/units/2640"},
        {id: 10, title: "Node and Express", location_url: "https://learn.galvanize.com/cohorts/236/units/2641"},
        {id: 11, title: "Javascript Accumulator Pattern", location_url: "https://learn.galvanize.com/cohorts/236/units/2642"},
        {id: 12, title: "Javascript Object Creation", location_url: "https://learn.galvanize.com/cohorts/236/units/2643"},
        {id: 13, title: "SQL", location_url: "https://learn.galvanize.com/cohorts/236/units/2644"},
        {id: 14, title: "Knex and Express", location_url: "https://learn.galvanize.com/cohorts/236/units/2645"},
        {id: 15, title: "Promises and Validation", location_url: "https://learn.galvanize.com/cohorts/236/units/2646/"},
        {id: 16, title: "Intro to React", location_url: "https://learn.galvanize.com/cohorts/236/units/2647"},
        {id: 17, title: "React - Modern Javascript", location_url: "https://learn.galvanize.com/cohorts/236/units/2648"},
        {id: 18, title: "React Components", location_url: "https://learn.galvanize.com/cohorts/236/units/2649"},
        {id: 19, title: "React - Integrating with APIs", location_url: "https://learn.galvanize.com/cohorts/236/units/2650"},
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
