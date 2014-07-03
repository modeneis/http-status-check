module.exports = {
	"concurrentRequests": 3,
	"sites": [
		{
			"name": "LinkSilk",
			"expectedStatus": 200,
			"requestUrl": "http://linksilk.com"
		},
		{
			"name": "LinkSilk WWW",
			"expectedStatus": 301,
			"requestUrl": "http://www.linksilk.com",
			"responseHeaders": {
				"location": "http://linksilk.com/"
			}
		},
		{
			"name": "Google",
			"expectedStatus": 301,
			"requestUrl": "http://google.com",
			"responseHeaders": {
				"location": "http://www.google.com/"
			},
			"disabled": true
		},
		{
			"name": "HTTP Status Check on Guy's Blog",
			"expectedStatus": 200,
			"requestUrl": "http://www.guyellisrocks.com/2014/06/http-status-check.html"
		},
		{
			"name": "Missing URL example",
			"expectedStatus": 404,
			"requestUrl": "http://www.guyellisrocks.com/2014/06/will-this-get-written.html"
		}
	]
};