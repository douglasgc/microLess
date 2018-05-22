import {Container,Service} from "typedi";
import {Observable} from 'rxjs';
import * as mongoose from 'mongoose';

@Service()
export class ConnectMongo {
	con:any;
	public connection() {
		return new Observable((callback) => {
			if(!this.con) {
				mongoose.connect(process.env.DB_HOST)
				.then((d) => {
					this.con = d;
					callback.next(d)
				});
			}else {
				callback.next(this.con)
			}
		})
	}

}