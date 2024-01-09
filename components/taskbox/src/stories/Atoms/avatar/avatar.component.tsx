import { CommonModule } from "@angular/common";
import { Component, Input, Output, EventEmitter } from "@angular/core";
import { MatIconModule } from "@angular/material/icon";

@Component({
  selector: "avatar",
  imports: [CommonModule, MatIconModule],
  standalone: true,

  template: `<div type="div" [ngClass]="classes">
    <div>{{ avatarContent }}</div>
    <span class="icon"></span>
  </div>`,

  styleUrls: ["./avatar.css"],
})
export default class AvatarComponent {
  /**
   * Is this the principal call to action on the page?
   */
  @Input()
  type: "square" | "rounded" | "circle" = "square";

  /**
   * How large should the button be?
   */
  @Input()
  size: "small" | "medium" | "large" = "medium";

  /**
   * Button contents
   *
   * @required
   */
  @Input()
  label = "EI";
  @Input()
  content: "label" | "icon" | "image" = "label";

  public get classes(): string[] {
    return [`avatar`, `avatar-${this.size}`, `${this.type}`];
  }

  public get iconClasses(): string[] {
    return [`avatar`, `avatar-${this.size}`, `${this.type}`];
  }

  public get avatarContent(): string {
    let finalContent;
    switch (this.content) {
      case "icon":
        finalContent = `person`;
        break;
      case "image":
        finalContent = "image";
        break;
      case "label":
        finalContent = this.label;
        break;
      default:
        finalContent = this.label;
    }

    return finalContent;
  }
}
