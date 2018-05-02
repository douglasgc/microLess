"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function ResJSON(res, error) {
    if (error === void 0) { error = false; }
    if (error == false) {
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
exports.ResJSON = ResJSON;
//# sourceMappingURL=JSON.js.map