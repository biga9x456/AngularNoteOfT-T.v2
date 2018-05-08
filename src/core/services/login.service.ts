import { AngularFirestoreCollection, AngularFirestore } from 'angularfire2/firestore';
import { Info} from '../models/Info';
import { Observable } from '@firebase/util';
export class LoginService {
    info: AngularFirestoreCollection<Info>;
    user: string;
    password: string;
    infos: Observable<Info[]>;
    query: string;
    /*constructor(public afs: AngularFirestore) {
        this.infos = this.afs.collection('Info');
    }
    getInfo() {
        this.infos.subscribe
    }
    compare(user){
        this.query = info.
    }*/
}
