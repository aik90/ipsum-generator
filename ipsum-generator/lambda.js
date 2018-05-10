let AWS = require('aws-sdk');
const ipsum = require('lorem-ipsum');
const dictionary = require('./dictionary');
exports.handler = function (event, context, callback) {
	const response = {
		body: ipsum({
			words: dictionary,
		}),
	};

	callback(null, response.body);
}