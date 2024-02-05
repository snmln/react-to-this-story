import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'storybook-header',
  imports: [CommonModule],
  template: `<div [innerHTML]="'<'+headerLevel+'>'+label+'</'+headerLevel+'>'"></div>
  `,
  styleUrls: ['./header.css'],
})
export default class HeaderComponent {
  /**
   * Is this the principal call to action on the page?
   */
  @Input()
  headerLevel: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' = 'h1';
  /**
   * Button contents
   *
   * @required
   */
  @Input()
  label = 'Button';

}
