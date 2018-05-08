"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const typedi_1 = require("typedi");
const Request_1 = require("./requests/Request");
const JSON_1 = require("./responses/JSON");
const Inbox_1 = require("./controllers/Inbox");
const dotenv = require("dotenv");
// Atualiza a variavel process com as configurações do '.env'
dotenv.config();
// Bootstrap da Injeção de dependencia
let inbox = typedi_1.Container.get(Inbox_1.InboxController);
// Route Function
exports.getInbox = (e, c, cb) => Request_1.Request(inbox, 'getInbox', { event: e, context: c, callback: cb }, JSON_1.ResJSON);
exports.sendTo = (e, c, cb) => Request_1.Request(inbox, 'sendTo', { event: e, context: c, callback: cb }, JSON_1.ResJSON);
exports.fetchProcess = (e, c, cb) => Request_1.Request(inbox, 'fetchProcess', { event: e, context: c, callback: cb }, JSON_1.ResJSON);
