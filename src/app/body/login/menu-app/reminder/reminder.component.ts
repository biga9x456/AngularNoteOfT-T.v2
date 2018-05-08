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
  // keyword: String = '';
  // temp: MyReminder[];


  constructor( private reminderService: ReminderService) {
    // this.temp = Object.assign([], this.reminders);
  }

  addReminder(reminder: string) {
    this.reminderService.pushReminder({completed: false, title: reminder});
    this.reminder = '';
    $('#target').hide(500);
  }

  // search() {
  //   console.log(this.keyword);
  //   this.reminders = this.temp.filter(
  //     s => s.title.toLocaleLowerCase().includes(this.keyword.toLowerCase()
  //   ));
  // }

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

    function search() {
      let input, filter, ul, li, a, i;
      input = document.getElementById('inputSearch');
      filter = input.value.toUpperCase();
      ul = document.getElementById('list');
      li = ul.getElementsByTagName('li');
      // label = li.getElementsByTagName("label");
      for (i = 0; i < li.length; i++) {
          a = li[i].getElementsByTagName('a')[0];
          if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
              li[i].style.display = '';
          } else {
              li[i].style.display = 'none';
          }
      }
    }
  }

  deleteReminder(event, item) {
      this.reminderService.deleteReminder(item);
  }
}


