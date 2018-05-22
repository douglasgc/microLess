"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const typedi_1 = require("typedi");
const mongoose_1 = require("./../databases/mongoose");
const redis_1 = require("./../databases/redis");
const rxjs_1 = require("rxjs");
let InboxController = class InboxController {
    getInbox() {
        // Cria um Subject que sera a response da api
        let res = new rxjs_1.ReplaySubject();
        // Inicia o Mongo DB
        //this.connectMongo
        //.connection().subscribe(()=> {
        // Quando estar conectado
        //});
        // Seta o Server Redis
        let redis = this.connectRedis.getConnection();
        // Exemplos de uso
        redis.set('foo', 'bar');
        redis.get('foo', function (err, result) {
            res.next({ 'data': result });
        });
        // Retorna a Response da api
        return res;
    }
    sendTo() {
        return { error: true };
    }
    fetchProcess() {
        return { error: true };
    }
};
__decorate([
    typedi_1.Inject(),
    __metadata("design:type", mongoose_1.ConnectMongo)
], InboxController.prototype, "connectMongo", void 0);
__decorate([
    typedi_1.Inject(),
    __metadata("design:type", redis_1.ConnectRedis)
], InboxController.prototype, "connectRedis", void 0);
InboxController = __decorate([
    typedi_1.Service()
], InboxController);
exports.InboxController = InboxController;
;
