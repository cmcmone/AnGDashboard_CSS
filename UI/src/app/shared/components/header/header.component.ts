import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  @Output() ToggleSidebar: EventEmitter<any> = new EventEmitter();

  drawerToggle(){
    this.ToggleSidebar.emit();
  }
}
