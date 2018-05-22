"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function ResJSON(res, error = false) {
    if (error == false) {
        return {
            statusCode: 200,
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Credentials": true // Required for cookies, authorization headers with HTTPS
            },
            body: JSON.stringify(res),
        };
    }
    return {
        statusCode: 500,
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Credentials": true // Required for cookies, authorization headers with HTTPS
        },
        body: JSON.stringify(res),
    };
}
exports.ResJSON = ResJSON;
