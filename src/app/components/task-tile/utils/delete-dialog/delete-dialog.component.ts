import { Component, Inject, OnInit } from '@angular/core'
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog'
import { RandomTask, TasksService } from '../../../../services/tasks.service'

@Component({
  selector: 'app-delete-dialog',
  templateUrl: './delete-dialog.component.html',
  styleUrls: ['./delete-dialog.component.scss'],
})
export class DeleteDialogComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<DeleteDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: RandomTask,
    private tasksService: TasksService
  ) {}

  ngOnInit(): void {}

  onNoClick() {
    this.dialogRef.close()
  }
  deleteTask(id: string) {
    this.tasksService.deleteTask(id)
  }
}
