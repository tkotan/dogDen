const express = require('express');
const router = express.Router();
const Dog = require('../models/dogs.js');

router.get('/', (req,res)=>{
  Dog.find({}, (err, dogRoster) => {
    res.render('dogs/index.ejs', {
      dogs: dogRoster
    });
  });
});


//new
router.get('/new', (req, res) => {
  res.render('dogs/new.ejs');
});

//update
router.put('/:id', (req,res)=>{
  Dog.findByIdAndUpdate(req.params.id, req.body, (err, data) =>{
    res.redirect('/dogs');
  })
})

//edit
router.get('/:id/edit', (req,res) => {
  Dog.findById(req.params.id, (err, dogRoster)=>{
    res.render('dogs/edit.ejs', {
      onedog: dogRoster
    })
  });
});

//delete
router.delete('/:id', (req,res)=>{
  Dog.findByIdAndRemove(req.params.id, (err, data)=>{
      res.redirect('/dogs');
  })
});

//show
router.get('/:id', (req,res)=> {
  Dog.findById(req.params.id, (err, dogRoster)=>{
    res.render('dogs/show.ejs', {
      onedog: dogRoster
    })
  });
});

//create
router.post('/', (req, res)=> {
  Dog.create(req.body, (err, newDog) => {
    res.redirect('/dogs');
  })
});

module.exports = router;
