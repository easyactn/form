var keystone = require('keystone');

exports = module.exports = function (req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;

	locals.section = 'overview';

	var limit = 50;
	Event = keystone.list('Event');
 
 	Event.model.find()
   		.sort('date.begin')
  		.limit(limit)
  		.exec(function(err, events) {
     		if (err) {
    			console.log('Error: '+err);
     		}
     		else if (events) {
     			view.render('overview', { username: req.user.name.first, events: events});
     		}
	   	});
};
