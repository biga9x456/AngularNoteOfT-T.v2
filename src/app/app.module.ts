import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './body/login/login.component';
import { MenuAppComponent } from './body/login/menu-app/menu-app.component';
import { ReminderComponent } from './body/login/menu-app/reminder/reminder.component';
import { FormsModule, Validators } from '@angular/forms';
import { RouterModule } from '@angular/Router';
import { RegisterComponent } from './body/login/register/register.component';
import { WelcomComponent } from './body/login/register/welcom/welcom.component';
// import { AngularFireDatabaseModule, AngularFireDatabaseProvider } from 'angularfire2/database';
import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';
import { RegisterService } from '../core/services/register.service';
import { AngularFirestore } from 'angularfire2/firestore';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { LoginService } from '../core/services/login.service';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    FooterComponent,
    LoginComponent,
    MenuAppComponent,
    LoginComponent,
    ReminderComponent,
    RegisterComponent,
    WelcomComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase , 'Angular-Note-of-TandT'),
    AngularFirestoreModule,
    RouterModule.forRoot([
    {path: 'login', component: LoginComponent},
    {path: 'register', component: RegisterComponent},
    {path: 'welcome' , component: WelcomComponent},
    {path: 'home', component: MenuAppComponent , children: [
      ]
    },
    {path: 'reminder' , component: ReminderComponent},
    {path: '', component: LoginComponent},
  ])
  ],
  providers: [RegisterService , LoginService],
  bootstrap: [AppComponent]
})
export class AppModule {}
