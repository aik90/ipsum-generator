let AWS = require('aws-sdk');
const ipsum = require('lorem-ipsum');
const dictionary = require('./dictionary');
exports.handler = function (event, context, callback) {
	const response = {
		statusCode: 200,
		body: ipsum({
			words: dictionary,
		})
	};

	callback(null, response);
}