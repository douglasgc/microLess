import {Container,Service} from "typedi";
import * as Redis from 'ioredis';

@Service()
export class ConnectRedis {
	redis:any = new Redis(process.env.REDIS_HOST);
    getConnection() {
		return this.redis;
    }

}