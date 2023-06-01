const express = require('express');
const router = express.Router();
const News = require('../models/news');

// Get all news
router.get('/', async (req, res) => {
  try {
    const news = await News.find().sort('-createdAt');
    res.json(news);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
});

// Create a new news item
router.post('/', async (req, res) => {
  const { title, content } = req.body;

  try {
    const news = new News({ title, content });
    await news.save();
    res.status(201).json(news);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;