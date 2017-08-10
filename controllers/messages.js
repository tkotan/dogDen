const express = require('express');
const router = express.Router();
const Message = require('../models/messages.js');

router.get('/', (req, res)=>{
	Message.find({}, (err, allMessages)=>{
		res.render('messages/index.ejs', {
			messages: allMessages
		});
	})
});

router.get('/new', (req, res)=>{
	res.render('messages/new.ejs');
});

router.post('/', (req, res)=>{
	Message.create(req.body, (err, createdMessage)=>{
		res.redirect('/messages');
	});
});

router.get('/:id', (req, res)=>{
	Message.findById(req.params.id, (err, foundMessage)=>{
		res.render('messages/show.ejs', {
			onemessage: foundMessage
		});
	});
});

router.delete('/:id', (req, res)=>{
	Message.findByIdAndRemove(req.params.id, ()=>{
		res.redirect('/messages');
	});
});

router.get('/:id/edit', (req, res)=>{
	Message.findById(req.params.id, (err, foundMessage)=>{
		res.render('messages/edit.ejs', {
			message: foundMessage
		});
	});
});

router.put('/:id', (req, res)=>{
	Message.findByIdAndUpdate(req.params.id, req.body, ()=>{
		res.redirect('/messages');
	});
});

module.exports = router;
