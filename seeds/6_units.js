
exports.seed = (knex, Promise) => {
  return knex("units")
    .del()
    .then(() => {
      return knex("units").insert([
        {id: 1, title: "Productivity"},
        {id: 2, title: "Development Environment"},
        {id: 3, title: "Javascript Language and Concepts"},
        {id: 4, title: "Javascript - Functional Programming"},
        {id: 5, title: "HTML"},
        {id: 6, title: "CSS"},
        {id: 7, title: "The DOM"},
        {id: 8, title: "jQuery"},
        {id: 9, title: "HTTP and AJAX"},
        {id: 10, title: "Intro to Node and Express"},
        {id: 11, title: "Javascript Accumulator Pattern"},
        {id: 12, title: "Javascript Object Creation"},
        {id: 13, title: "Intro to SQL"},
        {id: 14, title: "Intro to Knex and Express"},
        {id: 15, title: "Promises and Validation"},
        {id: 16, title: "Intro to React"},
        {id: 17, title: "React - Modern Javascript"},
        {id: 18, title: "React Components"},
        {id: 19, title: "React - Integrating with APIs"},
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
