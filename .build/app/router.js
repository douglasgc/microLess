"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Request_1 = require("./requests/Request");
var JSON_1 = require("./responses/JSON");
var Inbox_1 = require("./controllers/Inbox");
// Inbox Router
var inbox = new Inbox_1.InboxController();
exports.getInbox = function (e, c, cb) { return Request_1.Request(inbox.getInbox, { event: e, context: c, callback: cb }, JSON_1.ResJSON); };
exports.sendTo = function (e, c, cb) { return Request_1.Request(inbox.sendTo, { event: e, context: c, callback: cb }, JSON_1.ResJSON); };
exports.fetchProcess = function (e, c, cb) { return Request_1.Request(inbox.fetchProcess, { event: e, context: c, callback: cb }, JSON_1.ResJSON); };
//# sourceMappingURL=router.js.map