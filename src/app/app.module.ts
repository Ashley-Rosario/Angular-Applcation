import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FirebaseService } from './services/firebase.service';
import { NavbarComponent } from './navbar/navbar.component';
import { AboutComponent } from './about/about.component';
import { FooterComponent } from './footer/footer.component';
import { RateComponent } from './rate/rate.component';
import { TodoItemComponent } from './todo-item/todo-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    AboutComponent,
    FooterComponent,
    RateComponent,
    TodoItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyDqz4UG_wyIMu4JbUG1LeXXACoMK0y81oE",
      authDomain: "movieapp-3a3c3.firebaseapp.com",
      projectId: "movieapp-3a3c3",
      storageBucket: "movieapp-3a3c3.appspot.com",
      messagingSenderId: "47741992682",
      appId: "1:47741992682:web:e41f909f87889832ece193",
      measurementId: "G-6JE4WPNES9"
    })
  ],
  providers: [FirebaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
