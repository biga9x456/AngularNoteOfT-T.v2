import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { Router } from '@angular/Router';
import {Info} from '../../../core/models/Info';
import { AngularFirestoreCollection, AngularFirestore } from 'angularfire2/firestore';
import { LoginService } from '../../../core/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  username: string;
  password: string;
  db: AngularFirestore;
  constructor(private router: Router  ,
    private loginService: LoginService ,
    private dbc: AngularFirestore ) { }
  ngOnInit() {
    /*this.db.collection('Info').
    $(document).ready(function() {
      function updateText(event) {
        const input = $(this);
        setTimeout(function() {
          const val = input.val();
          if (val !== '' ) {
            input.parent().addClass('floating-placeholder-float');
          } else {
            input.parent().removeClass('floating-placeholder-float');
          }
        }, 1);
      }
      $('.floating-placeholder input').keydown(updateText);
      $('.floating-placeholder input').change(updateText);
    });
    this.loginService.getInfo().subscribe(this.infos =>{
      this.infos = infos ;
    });*/
  }
// tslint:disable-next-line:eofline
  login(username: string , password: string) {
    if (username !== '' && password !== '') {
      localStorage.setItem('username', username);
      localStorage.setItem('password', password);
      this.router.navigate(['/home']);
      } else {
      if (username === '') {
        alert('Bạn chưa nhập ID');
      }
      if (password === '') {
        alert('Bạn chưa nhập PASSWORD');
      }
    }
     }
}
