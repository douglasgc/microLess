"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const typedi_1 = require("typedi");
const Request_1 = require("./requests/Request");
const JSON_1 = require("./responses/JSON");
const Inbox_1 = require("./controllers/Inbox");
// Bootstrap da Injeção de dependencia
let inbox = typedi_1.Container.get(Inbox_1.InboxController);
// Route Function
exports.getInbox = (e, c, cb) => __awaiter(this, void 0, void 0, function* () { return Request_1.Request(inbox, 'getInbox', { event: e, context: c, callback: cb }, JSON_1.ResJSON); });
exports.sendTo = (e, c, cb) => __awaiter(this, void 0, void 0, function* () { return Request_1.Request(inbox, 'sendTo', { event: e, context: c, callback: cb }, JSON_1.ResJSON); });
exports.fetchProcess = (e, c, cb) => __awaiter(this, void 0, void 0, function* () { return Request_1.Request(inbox, 'fetchProcess', { event: e, context: c, callback: cb }, JSON_1.ResJSON); });
