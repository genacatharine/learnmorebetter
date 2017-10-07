var express = require('express')
var router = express.Router()
const knex = require('../knex')
const boom = require('boom')
const bcrypt = require('bcrypt')
// var date

router.get('/', (req, res, next) => {

  if (!req.body.date) {
    // return
    knex('dailyplans')
      .select('*')
      .then( (plans) => {
        res.send(plans)
      })catch( (err) => next(err))
  }
  else {
    date = req.body.date
      //might need to parse date
    knex('dailyplan')
      .select('*')
      //.select('dailyplans.plan_date as date' 'dailyplans_events.event_time as time', 'dailyplans_events.event', 'lessons.title as lesson', 'lessons.location_url as lessonLink')
      .where('date', date)
    //  .innnerJoin('dailyplans_events')
    //  .on(dailyplans_events.dailyplan_id = dailyplans.id)
    // .innerJoin('lessons')
    // .on('lessons.id' = 'dailyplans_events.lesson_id')
      .then( (plan) => {
        res.send(plan)
      }).catch( (err) => next(err))
  }


})


router.post('/', (res, req, next) => {
  const {} = req.body

})


module.exports = router;
