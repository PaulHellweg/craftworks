import { Component, OnInit } from '@angular/core'
import { TaskService } from '../../services/task.service'
import { Task } from '../../services/task.service'

@Component({
  selector: 'app-task-tile',
  templateUrl: './task-tile.component.html',
  styleUrls: ['./task-tile.component.scss'],
})
export class TaskTileComponent implements OnInit {
  public randomTasks: Task[] = []
  constructor(private taskService: TaskService) {}

  //TODO: display random tasks in app.component.html properly (use *ngFor)

  public ngOnInit(): void {
    setInterval(() => {
      this.taskService.addRandomTasks()
    }, Math.floor(Math.random() * 400) * 1000)
    this.taskService.task.subscribe((task) => this.randomTasks.push(task))
  }
}
