import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent {
  constructor(private router: Router) {}
  clicked = false;
  onPress() {
    console.log('clicked');
    this.router.navigate(['/forecast']);
    this.clicked = true;
  }
}
