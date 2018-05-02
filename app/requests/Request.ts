 export function Request (route:any,req:{event:any, context:any, callback:any},response) {
	let routeResponse:any = route(req.event);
	let res = response(routeResponse);
	req.callback(null,res);
}