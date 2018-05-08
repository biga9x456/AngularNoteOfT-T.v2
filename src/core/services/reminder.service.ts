import { Injectable } from '@angular/core';
import { MyReminder } from '../models/MyReminder';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class ReminderService {
  _reminders: BehaviorSubject<Array<MyReminder>> = new BehaviorSubject(new Array());

  reminderDoc: AngularFirestoreDocument<MyReminder>;

  get reminders() {
    return this._reminders.asObservable();
  }

  constructor(private db: AngularFirestore) {
   }

  loadReminders() {
    this.db.collection('reminders').snapshotChanges().subscribe(actions => {
     const items = actions.map(a => {
        const item = a.payload.doc.data() as MyReminder;
        console.log(item);
        return item;
      });
      return this._reminders.next(items);
    });
  }

  pushReminder(reminder: MyReminder) {
    const reminders = this._reminders.getValue();
    reminders.push(reminder);
    this._reminders.next(reminders);
    this.db.collection('reminders').add(reminder);
  }

  deleteReminder(item: MyReminder) {
    this.reminderDoc = this.db.doc(`reminders/${item.title}`);
    this.reminderDoc.delete();
  }
}
