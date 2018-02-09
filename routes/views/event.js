var keystone = require('keystone');

exports = module.exports = function (req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;

	locals.section = 'event';

	var limit = 50;
	Event = keystone.list('Event');
 
 	view.render('event', { id: req.params.id });
};
