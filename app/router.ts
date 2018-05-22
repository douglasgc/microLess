import "reflect-metadata";

import { Container } from "typedi";
import { Request } from './requests/Request';
import { ResJSON } from './responses/JSON';
import { InboxController } from './controllers/Inbox';

// Bootstrap da Injeção de dependencia
let inbox = Container.get( InboxController );

// Route Function
export let getInbox: Function = async (e, c, cb) => Request(inbox, 'getInbox', { event: e, context: c, callback: cb }, ResJSON);
export let sendTo: Function = async (e, c, cb) => Request(inbox, 'sendTo', { event: e, context: c, callback: cb }, ResJSON);
export let fetchProcess: Function = async (e, c, cb) => Request(inbox, 'fetchProcess', { event: e, context: c, callback: cb }, ResJSON);