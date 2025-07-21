const express = require('express');
const router = express.Router();

//get route for blog`
router.get('/blog', (req, res) => {
    res.render('blog');
});

router.post("/blog", (req, res) => {
  console.log(req.body);
  const newRequest = new blogModel(req.body);
  newRequest.save();
});


module.exports = router;