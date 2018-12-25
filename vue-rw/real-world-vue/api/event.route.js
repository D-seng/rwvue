// const mongoose = require('mongoose');
// const asyncMiddleware = require('../middleware/asyncMiddleware');
const express = require('express');
const router = express.Router();
const { Event } = require('../models/customer');

router.get('/', async (req, res) => {
  const events = await Event.find().sort('name');
  res.send(events);
});

module.exports = router;
