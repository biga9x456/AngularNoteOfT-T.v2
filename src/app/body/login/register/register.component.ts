import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../../../../core/services/register.service';
import { Info } from '../../../../core/models/Info';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  infos: Info[];
  info: Info = {
    ho: '',
    ten: '',
    pass: '',
    email: '',
    question1: '' ,
    answer1: '' ,
    question2: '' ,
    answer2: '' ,
    country: ''
   };
   constructor (private registerService: RegisterService ) {

   }

  ngOnInit() {
    // console.log('ngOninit ran');
    this.registerService.getInfos().subscribe(infos => {
      this.infos = infos ;
    });
  }

  addInfo() {
    // tslint:disable-next-line:no-unused-expression
    if (this.info.ho !== ''
    && this.info.ten !== '' && this.info.pass !== ''
    && this.info.country !== ''  && this.info.email !== ''
    && this.info.question1 !== '' && this.info.answer1 !== ''
    && this.info.question2 !== '' && this.info.answer2 !== '' ) {
      this.registerService.addInFo(this.info);
      this.info.ho = '';
      this.info.ten = '';
      this.info.pass = '';
      this.info.email = '';
      this.info.question1 = '';
      this.info.answer1 = '';
      this.info.question2 = '';
      this.info.answer2 = '';
      this.info.country = '';
    }
  }
}
