"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function Request(route, req, response) {
    var routeResponse = route(req.event);
    var res = response(routeResponse);
    req.callback(null, res);
}
exports.Request = Request;
//# sourceMappingURL=Request.js.map