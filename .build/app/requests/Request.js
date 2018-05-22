"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Request = (route, action, req, response) => {
    return new Promise((done) => {
        let routeResponse = route[action](req.event);
        if (routeResponse.observers) {
            routeResponse.subscribe((d) => {
                let res = response(d);
                done(res);
            });
        }
        else {
            let res = response(routeResponse);
            done(res);
        }
    })
        .then((d) => {
        req.callback(null, d);
    });
};
