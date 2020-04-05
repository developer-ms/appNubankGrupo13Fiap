import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'nbk-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnInit {

  @Input() label: string
  @Input() iconName: string

  constructor() { }

  ngOnInit() {}

}
