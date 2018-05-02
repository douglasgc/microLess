export function ResJSON (res,error=false) {
	if(error==false) {
		return {
			statusCode: 500,
			body: JSON.stringify(res),
		};
	}
	return {
		statusCode: 200,
		body: JSON.stringify(res),
	};
}