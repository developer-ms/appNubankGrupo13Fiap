import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'nbk-slider-range',
  templateUrl: './slider-range.component.html',
  styleUrls: ['./slider-range.component.scss'],
})
export class SliderRangeComponent implements OnInit {


  @Output() value = new EventEmitter<number>();

  @Input() prefix: string
  @Input() label: string
  @Input() isCurrency: boolean

  @Input() minValue: number
  @Input() maxValue: number


  setValue: number
  inputFocus: boolean = false
  sliderFocus: boolean = false
  sliderValue: number
  inputValue: string

  labelMin: string
  labelMax: string

  constructor() { }

  ngOnInit() {
    this.setValue = this.minValue
    this.sliderValue = this.minValue
    if (this.isCurrency) {
      this.inputValue = this.prefix + " " + (parseFloat(this.minValue.toString())).toLocaleString("pt-BR", { maximumFractionDigits: 2, minimumFractionDigits: 2 })
      this.labelMin = this.prefix + " " + (parseFloat(this.minValue.toString())).toLocaleString("pt-BR", { maximumFractionDigits: 2, minimumFractionDigits: 2 })
      this.labelMax = this.prefix + " " + (parseFloat(this.maxValue.toString())).toLocaleString("pt-BR", { maximumFractionDigits: 2, minimumFractionDigits: 2 })
    }
    else {
      this.inputValue = this.prefix + " " + this.minValue.toString()
      this.labelMin = this.prefix + " " + this.minValue.toString()
      this.labelMax = this.prefix + " " + this.maxValue.toString()
    }

    this.value.emit(this.setValue)
  }

  /*
    Controles Input
  */

  hasFocusInput() {
    this.inputFocus = true
    this.sliderFocus = false
  }

  noFocusInput() {
    this.inputFocus = false
    this.verifyIsCurrency()
    this.sliderValue = this.setValue
  }

  onChangeInput($event) {
    if (this.inputFocus) {
      this.setValue = parseFloat($event.target.value.replace('.', '').replace(',', '.').replace('R$', ''))
      this.sliderValue = this.setValue
      this.value.emit(this.setValue)
    }
  }

  /*
    Controles Slider
  */

  hasFocusSlider() {
    this.sliderFocus = true
    this.inputFocus = false
  }

  onChangeSlider(Value: number) {
    if (this.sliderFocus) {
      this.setValue = Value
      this.verifyIsCurrency()
      this.value.emit(this.setValue)
    }
  }

  /*
    Controles Auxiliares
  */

  minValueInvalid(): boolean {
    return this.setValue < this.minValue
  }

  maxValueInvalid(): boolean {
    return this.setValue > this.maxValue
  }

  verifyIsCurrency() {
    if (this.isCurrency) {
      this.inputValue = this.prefix + " " + this.setValue.toLocaleString("pt-BR", { maximumFractionDigits: 2, minimumFractionDigits: 2 });
    }
    else {
      this.inputValue = this.setValue.toString();
    }
  }
}
