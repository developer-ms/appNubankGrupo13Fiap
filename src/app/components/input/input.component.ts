import { Component, OnInit, Input, ContentChild, AfterContentInit } from '@angular/core';
import { NgModel, FormControlName } from '@angular/forms';

@Component({
  selector: 'nbk-input',
  templateUrl: './input.component.html'
})
export class InputComponent implements OnInit {

  @Input() label: string;
  @Input() errorMessage: string;

  input: any;

  @ContentChild(NgModel, {static: true}) model: NgModel;
  @ContentChild(FormControlName, {static: true}) control: FormControlName;

  constructor() { }

  ngOnInit() {}


  ngAfterContentInit() {
    this.input = this.model || this.control;
    if (this.input === undefined) {
      console.log('Esse componente precisa ser usado com uma diretiva ngModel ou formControlName');
    }
  }

  hasSuccess(): boolean {
    return this.input.valid && (this.input.dirty || this.input.touched);
  }

  hasError(): boolean {
    return this.input.invalid && (this.input.dirty || this.input.touched);
  }

}
