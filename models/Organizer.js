var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Organizer Model
 * ==========
 */
var Organizer = new keystone.List('Organizer');

Organizer.add({
	name: { type: String, required: true, index: true },
	contact: { type: Types.Email, initial: true, required: true },
	description: { type: String },
	image: { type: Types.Url },
	events: { type: Types.Relationship, ref: 'Event', many: true },
});


/**
 * Registration
 */
Organizer.defaultColumns = 'name, email, isAdmin';
Organizer.register();
