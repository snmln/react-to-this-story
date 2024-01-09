import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'storybook-rating',
  imports: [CommonModule, MatIconModule],
  standalone: true,
  template: `<div  mat-icon-button class="storybook-ratings" [color]="color" *ngFor="let ratingId of ratingArr;index as i" [id]="'star_'+i" [matTooltip]="ratingId+1" matTooltipPosition="above">
  <mat-icon [ngClass]="iconSize">
{{showIcon(i)}}
  </mat-icon>
</div>`,
  styleUrls: ['./rating.css'],
})
export default class RatingComponent {
  /**
   * Is this the principal call to action on the page?
   */
  @Input() rating: number = 3.5;
  @Input() iconSize: 'small' | 'medium' | 'large' = 'medium';
  @Input('starCount') private starCount: number = 5;
  private ratingArr: number[] = [];


  ngOnInit() {
    console.log("a " + this.starCount)
    for (let index = 0; index < this.starCount; index++) {

      this.ratingArr.push(index);
    }
  }


  showIcon(index: number) {
    var adjRating = this.rating - index
    switch (true) {
      case (adjRating >= 1): {
        return 'star'
        break;
      }
      case (adjRating == .5): {
        return 'star_half'
        break;
      }
      default: {
        return 'star_border';
        break;
      }
    }

  }


}
