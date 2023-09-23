import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appState]',
})
export class StateDirective {
  private state: boolean = true;

  constructor(public elementRef: ElementRef, public renderer: Renderer2) {}

  @Input('enabled') set enabled(condition: boolean) {
    this.state = condition;
    this.setBackground();
    this.setBorderRadius();
    this.SetWidth();
    this.SetPadding();
    this.setColor();
  }

  SetWidth() {
    this.renderer.setStyle(
      this.elementRef.nativeElement,
      'width',
      'fit-content'
    );
  }

  SetPadding() {
    this.renderer.setStyle(
      this.elementRef.nativeElement,
      'padding-inline',
      '1rem'
    );
  }

  setBackground() {
    const backgroundColor = this.state ? '#198754' : '#dc3545';
    this.renderer.setStyle(
      this.elementRef.nativeElement,
      'background-color',
      backgroundColor
    );
  }

  setBorderRadius() {
    this.renderer.setStyle(
      this.elementRef.nativeElement,
      'border-radius',
      '1rem'
    );
  }

  setColor() {
    this.renderer.setStyle(this.elementRef.nativeElement, 'color', 'white');
  }
}
