import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './body/login/login.component';
import { MenuAppComponent } from './body/login/menu-app/menu-app.component';
import { ReminderComponent } from './body/login/menu-app/reminder/reminder.component';
import { FormsModule } from '@angular/forms';
import { CoreModule } from '../core/core,module';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    FooterComponent,
    LoginComponent,
    MenuAppComponent,
    LoginComponent,
    ReminderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CoreModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
