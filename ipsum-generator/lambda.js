let AWS = require('aws-sdk');
const ipsum = require('lorem-ipsum');
exports.handler = function(event, context, callback) {
	const response = {
		statusCode : 200,
		body : ipsum()
	};

	callback(null,response);
}