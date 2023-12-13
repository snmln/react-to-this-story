import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'storybook-button',
  imports: [CommonModule],
  template: ` <button
    type="button"
    (click)="onClick.emit($event)"
    [ngClass]="classes"
    [ngStyle]="{ 'background-color': backgroundColor }"
  >
    {{ label }}
  </button>`,
  styleUrls: ['./button.css'],
})
export default class ButtonComponent {
  /**
   * Is this the principal call to action on the page?
   */
  @Input()
  type: 'primary' | 'secondary' | 'secondaryGray' | 'tertiary' | 'tertiaryGray' = 'primary';

  /**
   * What background color to use
   */
  @Input()
  backgroundColor?: string;

  /**
   * How large should the button be?
   */
  @Input()
  size: 'small' | 'medium' | 'large' = 'medium';

  /**
   * Button contents
   *
   * @required
   */
  @Input()
  label = 'Button';

  /**
   * Optional click handler
   */
  @Output()
  onClick = new EventEmitter<Event>();

  public get classes(): string[] {
    const mode = (this.type === 'secondaryGray' || this.type === 'tertiaryGray') ? (this.type === 'secondaryGray' ? 'secondary-gray' : 'tertiary-gray') : this.type;

    return ['storybook-button', `storybook-button--${this.size}`, `storybook-button--${mode}`];
  }
}
