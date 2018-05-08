"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Request = (route, action, req, response) => {
    let routeResponse = route[action](req.event);
    if (routeResponse.observers) {
        routeResponse.subscribe((d) => {
            let res = response(d);
            req.callback(null, res);
        });
    }
    else {
        let res = response(routeResponse);
        req.callback(null, res);
    }
};
