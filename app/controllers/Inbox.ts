import { Service, Inject } from "typedi";
import { ConnectMongo } from './../databases/mongoose';
import { ConnectRedis } from './../databases/redis';

import { ReplaySubject } from 'rxjs';

@Service()
export class InboxController {

	// Dá Inject no ConnectMongo
	@Inject()
	connectMongo: ConnectMongo;

	// Dá Inject no ConnectMongo
	@Inject()
	connectRedis: ConnectRedis;

	public getInbox () :any {

		// Cria um Subject que sera a response da api
		let res = new ReplaySubject();

		// Inicia o Mongo DB
		this.connectMongo
		.connection().subscribe(()=> {
			// Quando estar conectado
		});

		// Seta o Server Redis
		let redis = this.connectRedis.getConnection();

		// Exemplos de uso
		redis.set('foo', 'bar');
		redis.get('foo', function (err, result) {
			res.next({'data':result});
		});

		// Retorna a Response da api
		return res;

	}
	sendTo () {
		
		return {error:true};

	}
	fetchProcess () {
		
		return {error:true};

	}

};