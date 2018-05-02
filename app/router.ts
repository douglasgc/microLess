import { Request } from './requests/Request';
import { ResJSON } from './responses/JSON';

import { InboxController } from './controllers/Inbox';

// Inbox Router
let inbox = new InboxController();
export let getInbox:Function = (e,c,cb) => Request(inbox.getInbox,{event:e, context:c, callback:cb},ResJSON);
export let sendTo:Function = (e,c,cb) => Request(inbox.sendTo,{event:e, context:c, callback:cb},ResJSON);
export let fetchProcess:Function = (e,c,cb) => Request(inbox.fetchProcess,{event:e, context:c, callback:cb},ResJSON);