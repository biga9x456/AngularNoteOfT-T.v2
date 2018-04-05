import { Injectable } from '@angular/core';
import { MyReminder } from '../models/MyReminder';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ReminderService {
  constructor(private db: AngularFirestore) { }
  _reminders: BehaviorSubject<Array<MyReminder>> = new BehaviorSubject(new Array());
  get reminders() {
    return this._reminders.asObservable();
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

  removeReminder() {

  }
}
