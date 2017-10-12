var express = require('express')
var router = express.Router()
const knex = require('../../knex')
const boom = require('boom')
const bcrypt = require('bcrypt')
var date

router.get('/', (req, res, next) => {
  var d = new Date();
  var month = d.getUTCMonth() + 1; //months from 1-12
  var day = d.getUTCDate();
  var year = d.getUTCFullYear();
  d = month + "/" + day + "/" + year;
  date = req.query.date || d
  knex('dailyplans')
    .where('dailyplans.date', `${date}`)
    .innerJoin("dailyplans_events", "dailyplans_events.dailyplan_id", "dailyplans.id")
   .leftOuterJoin('units', 'dailyplans_events.unit_id', 'units.id')
    .select('dailyplans_events.event_time as time', 'dailyplans_events.plan', 'units.title as unit', 'units.location_url as unitLink')
    .then((plan) => {
      console.log('plan from end of daily get ', plan)
    res.send(plan)
  }).catch((err) => next(err))

})

router.post('/', (res, req, next) => {
  let newPlan = {}
  newPlan.date = date
  newPlan.createdBy = createdBy
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
          if (unitId) {
            newPlan.unitId = unitId
          }
          knex('dailyplans_events')
            .insert({
              'dailyplan_id': id,
              'event_time': newPlan.time,
              'plan': newPlan.plan,
              'unit_id': newPlan.unitId
            }, 'unit_id')
        })
        .then((unit) => {
          if (unit) {
            knex('units')
              .select('title', 'location_url') //might not need title
              .where('id', newPlan.unitId)
              .then( (unitInfo) => {
                res.send(unitInfo)
              })
          }
          else res.send(200)
        })


    }).catch( (err) => next(err))



})


module.exports = router;
