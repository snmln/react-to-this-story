import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'storybook-button',
  imports: [CommonModule],
  template: ` <div
    type="div"
    (click)="onClick.emit($event)"
    [ngClass]="classes"

  >
{{label}}
<span class="icon"
></span>
</div>`,
  styleUrls: ['./avatar.css'],
})
export default class AvatarComponent {
  /**
   * Is this the principal call to action on the page?
   */
  @Input()
  type: 'square' | 'rounded' | 'circle' = 'square';


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
  label = 'EI';

  /**
   * Optional click handler
   */
  @Output()
  onClick = new EventEmitter<Event>();

  public get classes(): string[] {


    return [`avatar`, `avatar-${this.size}`, `${this.type}`];
  }

  public get iconClasses(): string[] {


    return [`avatar`, `avatar-${this.size}`, `${this.type}`];
  }
}
