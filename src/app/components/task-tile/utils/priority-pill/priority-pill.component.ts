import { Component, Input } from '@angular/core'

@Component({
  selector: 'priority-pill',
  templateUrl: './priority-pill.component.html',
  styleUrls: ['./priority-pill.component.scss'],
})
export class PriorityPillComponent {
  @Input()
  public priority: number = 1
}
