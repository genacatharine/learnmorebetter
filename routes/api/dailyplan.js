var express = require('express')
var router = express.Router()
const knex = require('../../knex')
const boom = require('boom')
const bcrypt = require('bcrypt')
// var date

router.get('/', (req, res, next) => {

  if (!req.body.date) {
    // return
    knex('dailyplans')
      .select('*')
      .then((plans) => {
        res.send(plans)
      }).catch((err) => next(err))
  } else {
    date = req.body.date
    //might need to parse date
    knex('dailyplan')
      .pluck('dailyplans_events.event_time as time', 'dailyplans_events.plan', 'lessons.title as lesson', 'lessons.location_url as lessonLink')
      .where('date', date)
      .innnerJoin('dailyplans_events')
      .on(dailyplans_events.dailyplan_id = dailyplans.id)
      .innerJoin('lessons', 'dailyplans_events.lesson_id', 'lessons.id')
      .then((plan) => {
        res.send(plan)
      }).catch((err) => next(err))
  }
})

router.post('/', (res, req, next) => {
  let newPlan = {}
  newPlan.date = date
  newPlan.createdBy = createdBy
  console.log(req.body)
  const {
    date,
    createdBy,
    plans
  } = req.body
  knex('dailyplans')
    .insert({
      'plan_date': newPlan.date,
      'created_by_instructor': newPlan.createdBy
    }, 'id')
    .then((id) => {
      plans.forEach((el) => {
          newPlan.time = el.time
          newPlan.plan = el.plan
          if (lessonId) {
            newPlan.lessonId = lessonId
          }
          knex('dailyplans_events')
            .insert({
              'dailyplan_id': id,
              'event_time': newPlan.time,
              'plan': newPlan.plan,
              'lesson_id': newPlan.lessonId
            }, 'lesson_id')
        })
        .then((lesson) => {
          if (lesson) {
            knex('lessons')
              .select('title', 'location_url') //might not need title
              .where('id', newPlan.lessonId)
              .then( (lessonInfo) => {
                res.send(lessonInfo)
              })
          }
          else res.send(200)
        })


    }).catch( (err) => next(err))



})


module.exports = router;
