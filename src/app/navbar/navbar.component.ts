import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FirebaseService } from '../services/firebase.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  @Output() isLogout = new EventEmitter<void>()

  constructor(public firebaseService: FirebaseService) { }

  ngOnInit(): void {
  }
  logout() {
    this.firebaseService.logout()
    this.isLogout.emit()
  }

}
