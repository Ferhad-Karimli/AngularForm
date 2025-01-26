import { Directive, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appMaxLength]',
})
export class MaxLengthDirective {
  @Input('appMaxLength') maxLength!: any;

  @HostListener('input', ['$event'])
  onInput(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.value.length > this.maxLength) {
      input.value = input.value.slice(0, this.maxLength); // Trim input value
    }
  }
}
