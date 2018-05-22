export function ResJSON (res,error=false) {
	if(error==false) {
		return {
			statusCode: 200,
			headers: {
				"Access-Control-Allow-Origin" : "*", // Required for CORS support to work
				"Access-Control-Allow-Credentials" : true // Required for cookies, authorization headers with HTTPS
			},
			body: JSON.stringify(res),
		};
	}
	return {
		statusCode: 500,
		headers: {
				"Access-Control-Allow-Origin" : "*", // Required for CORS support to work
				"Access-Control-Allow-Credentials" : true // Required for cookies, authorization headers with HTTPS
			},
		body: JSON.stringify(res),
	};
}