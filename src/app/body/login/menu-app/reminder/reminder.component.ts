import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { ReminderService } from '../../../../../core/services/reminder.service';
import { MyReminder } from '../../../../../core/models/MyReminder';

@Component({
  selector: 'app-reminder',
  templateUrl: './reminder.component.html',
  styleUrls: ['./reminder.component.scss']
})
export class ReminderComponent implements OnInit {
  reminder: string;
  reminders: MyReminder[] = [];

  constructor( private reminderService: ReminderService) {
  }

  addReminder(reminder: string) {
    this.reminderService.pushReminder({completed: false, title: reminder});
    this.reminder = '';
  }

  ngOnInit() {
    this.reminderService.loadReminders();
    this.reminderService.reminders.subscribe((reminders) => {
      this.reminders = reminders;
    });

    $('.Show').click(function() {
      $('#target').show(500);
      $('.Show').hide(0);
      $('.Hide').show(0);
    });
    $('.Hide').click(function() {
      $('#target').hide(500);
      $('.Show').show(0);
      $('.Hide').hide(0);
    });
    $('.toggle').click(function() {
      $('#target').toggle('fast');
    });

  }
}


