import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Input() toggleDrawValue!: boolean;
  @Output()
  isOpen: EventEmitter<boolean> = new EventEmitter<boolean>();

  ngOnInit(): void {}

  onDrawToggle(): void {
    this.isOpen.emit(!this.toggleDrawValue);
  }
}
