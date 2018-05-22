export let Request = (route:any,action:any,req:{event:any,context:any,callback:any},response) => {
    return new Promise((done)=>{
    let routeResponse:any = route[action](req.event);
        if( routeResponse.observers ) {
            routeResponse.subscribe((d) => {
                let res = response(d);
                done (res);
            })
        }else {
            let res = response(routeResponse);
            done (res);
        }
    })
    .then((d) => {
    	req.callback(null,d)
    });
}
