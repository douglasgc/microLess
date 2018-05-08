export let Request = (route:any,action:any,req:{event:any, context:any, callback:any},response) => {
	let routeResponse:any = route[action](req.event);
	if( routeResponse.observers ) {
		routeResponse.subscribe((d) => {
			let res = response(d);
			req.callback(null,res);
		})
	}else {
		let res = response(routeResponse);
		req.callback(null,res);
	}
}
