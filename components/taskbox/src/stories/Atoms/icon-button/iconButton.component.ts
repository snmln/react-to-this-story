import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';


@Component({
  selector: 'storybook-button',
  imports: [CommonModule, MatIconModule],
  standalone: true,
  template: ` <button
    type="button"
    (click)="onClick.emit($event)"
    [ngClass]="classes"
    [ngStyle]="{ 'background-color': backgroundColor }"
  >
    <div
    type="div"
 class="icon">
 <mat-icon aria-hidden="false" aria-label="Example home icon">{{icon}}</mat-icon>
    </div>
  </button>`,
  styleUrls: ['./iconButton.css'],
})
export default class IconButtonComponent {
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

  @Input()
  icon: 'home' | `sentiment_very_satisfied` | 'expand_more' | 'favorite' | 'editß' = 'home'

  /**
   * Optional click handler
   */
  @Output()
  onClick = new EventEmitter<Event>();

  public get classes(): string[] {
    const mode = (this.type === 'secondaryGray' || this.type === 'tertiaryGray') ? (this.type === 'secondaryGray' ? 'secondary-gray' : 'tertiary-gray') : this.type;

    return ['storybook-button', `storybook-button--large`, `storybook-button--${mode}`];
  }
}
