import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  isOpen!: boolean;

  ngOnInit(): void {
    this.isOpen = false;
  }

  toggleSide() {
    this.isOpen = !this.isOpen;
  }

  isOpenChange(event: boolean) {
    this.isOpen = event;
  }
}
