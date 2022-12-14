import { NgxMatColorPickerInputEvent } from '@angular-material-components/color-picker'
import { Component, Inject, OnInit } from '@angular/core'
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog'
import { RandomTask, TasksService } from '../../../services/tasks.service'
import * as uuid from 'uuid'

interface PriorityOptions {
  value: number
  viewValue: string
}
@Component({
  selector: 'edit-dialog',
  templateUrl: './edit-dialog.component.html',
  styleUrls: ['./edit-dialog.component.scss'],
})
export class EditDialogComponent implements OnInit {
  public priorityOptiones: PriorityOptions[] = [
    { value: 1, viewValue: '1' },
    { value: 2, viewValue: '2' },
    { value: 3, viewValue: '3' },
  ]

  public task: RandomTask = {
    title: '',
    description: '',
    color: '',
    priority: 1,
    dueDate: this.tasksService.startDate,
    id: uuid.v4(),
  }

  constructor(
    public dialogRef: MatDialogRef<EditDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: RandomTask,
    public tasksService: TasksService
  ) {}

  ngOnInit(): void {
    if (this.data) {
      this.task = this.data
    }
  }

  onNoClick(): void {
    this.dialogRef.close(this.task)
  }

  updateData() {
    this.tasksService.updateTask(this.data)
  }

  changeDescription(description: string) {
    this.data.description = description
  }

  changeTitle(title: string) {
    this.data.title = title
  }
  changeDueDate(dueDate: Date) {
    this.data.dueDate = dueDate
  }

  setNewColor($event: NgxMatColorPickerInputEvent) {
    if ($event.value?.hex) {
      this.data.color = '#' + $event.value?.toHex()
    }
  }
}
