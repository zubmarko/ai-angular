import { Component, Input, Output, EventEmitter } from '@angular/core';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';

@Component({
  selector: 'app-toggle',
  templateUrl: './toggle.component.html',
//   styleUrls: ['./toggle.component.css']
})
export class ToggleComponent {
  @Input() label: string = '';
  @Input() isChecked: boolean = false;
  @Output() onToggle = new EventEmitter<boolean>();

  toggle(event: MatSlideToggleChange) {
    this.isChecked = event.checked;
    this.onToggle.emit(this.isChecked);
  }
}
