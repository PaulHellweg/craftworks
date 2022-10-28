import { Component, OnInit } from '@angular/core'
import { MatDialog } from '@angular/material/dialog'
import { RandomTask, TaskService } from '../../services/task.service'

@Component({
  selector: 'app-app-view',
  templateUrl: './app-view.component.html',
  styleUrls: ['./app-view.component.scss'],
})
export class AppViewComponent implements OnInit {
  public randomTasks: RandomTask[] = []

  constructor(private taskService: TaskService, public dialog: MatDialog) {}

  ngOnInit(): void {
    const tasklist = JSON.parse(localStorage.getItem('tasklist') || '[]')
    for (let i = 0; i < tasklist.length; i++) {
      let task: any = JSON.parse(localStorage.getItem(tasklist[i]) || '{}')
      if (!task.id) continue
      this.randomTasks.push(task)
    }
    this.taskService.task.subscribe((task) => {
      this.randomTasks.push(task)
    })
    this.addRandomTasks(0)
  }

  addRandomTasks(count: number): void {
    this.taskService.addRandomTasks(count)
    setTimeout(() => {
      this.addRandomTasks(++count)
    }, Math.floor(Math.random() * 20000) + 7000)
  }
}
