
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Info } from '../models/Info';
// import { Change } from '@firebase/database/dist/esm/src/core/view/Change';
// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/catch';
@Injectable()
export class RegisterService {
   infosCollection: AngularFirestoreCollection<Info>;
   infos: Observable<Info[]>;
   /*constructor(public db: AngularFirestore) {
       this.infos  =this.infosCollection('/info').valueChanges();
   }*/

   constructor(public afs: AngularFirestore) {
    // this.infos = this.afs.collection('infos').valueChanges();
    this.infosCollection = this.afs.collection('/Info');
    this.infos = this.infosCollection.snapshotChanges().map(changes => {
        return changes.map(a => {
        const data = a.payload.doc.data() as Info;
               data.id = a.payload.doc.id;
               return data;
           });
       });
   }
   getInfos() {
       return this.infos;
   }
   addInFo(info: Info) {
       this.infosCollection.add(info);
   }
}
