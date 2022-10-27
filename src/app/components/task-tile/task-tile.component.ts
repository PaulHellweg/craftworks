import { Component, Input, OnInit } from '@angular/core'
import { RandomTask } from '../../services/task.service'

@Component({
  selector: 'app-task-tile',
  templateUrl: './task-tile.component.html',
  styleUrls: ['./task-tile.component.scss'],
})
export class TaskTileComponent implements OnInit {
  @Input()
  public randomTask: RandomTask | undefined

  constructor() {}

  public ngOnInit(): void {}
}
