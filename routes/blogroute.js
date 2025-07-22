import express from 'express';
import blog from '../models/blogroute.js';
const router = express.Router();

// get route for blog
router.get('/blog', (req, res) => {
    res.render('blog');
});

router.post("/blog", async (req, res) => {
  try {
    console.log(req.body);
    const newBlog = new blog(req.body);
    await newBlog.save();
    res.status(201).json({ message: "Blog created successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;