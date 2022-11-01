import { Component, OnDestroy, OnInit } from '@angular/core'
import { MatDialog } from '@angular/material/dialog'
import { SubSink } from 'subsink'
import { RandomTask, TasksService } from '../../services/tasks.service'
import { EditDialogComponent } from '../utils/edit-dialog/edit-dialog.component'

@Component({
  selector: 'app-app-view',
  templateUrl: './app-view.component.html',
  styleUrls: ['./app-view.component.scss'],
})
export class AppViewComponent implements OnInit, OnDestroy {
  public randomTasks: RandomTask[] = []
  private sink = new SubSink()

  constructor(public dialog: MatDialog, private tasksService: TasksService) {}

  ngOnInit(): void {
    this.sink.add(
      this.tasksService.tasks$.subscribe((tasks) => {
        if (tasks.length) {
          this.randomTasks = tasks
          this.randomTasks.forEach((i) => {
            i.dueDate = new Date(i.dueDate)
          })
        } else {
          this.tasksService.addRandomTasks(0)
        }
      })
    )
  }

  openEditDialog() {
    this.dialog.open(EditDialogComponent, {})
  }

  ngOnDestroy(): void {
    this.sink.unsubscribe()
  }
}
