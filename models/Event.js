var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * User Model
 * ==========
 */
var Event = new keystone.List('Event', {
	map: { name: 'title' }
});

Event.add({
	title: { type: String, index: true, initial: true, required: true },
	description: {
		short: { type: Types.Text, initial: false, index: true, label: 'Short Description' },
		long: { type: Types.Textarea, initial: false, label: 'Full Description' },
	},
	website: { type: Types.Url, initial: true, label: 'Event Website' }, },
	'Image', {
		image: {
			description: { type: String, initial: true },
			license: { type: String, initial: true, required: true },
			url: { type: Types.Url, initial: true, required: true },
		},
	},
	'Location', {
		location: { type: Types.Location, initial: true, required: true },
	},
	'Date + Reccurence', {
		date: {
			begin: { type: Types.Number, initial: true, required: true, label: 'Start' },
			end: { type: Types.Number, initial: true, required: true },
			reccurence: { type: Types.Boolean, default: false, required: true },
			rroutine: { type: String, label: 'Reccurence Routine' },
			rend: { type: Types.Number, label: 'Reccurence End Date' }
		},
	},
	'More Information', {
		price: { type: Types.Number, default: 0, required: true },
		tickets: { type: Types.Url, label: 'Ticket Link' },
		categories: { type: Types.TextArray },
	},
	'Organizer', {
		organizer: {
			name: { type: String, initial: true, required: true },
			contact: { type: Types.Url, initial: true, required: true },
			description: { type: String },
			image: { type: Types.Url }
		},
	},
);


/**
 * Registration
 */
Event.defaultColumns = 'title, description.short';
Event.register();
