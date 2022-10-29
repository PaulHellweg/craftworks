import { Component, Inject, OnInit } from '@angular/core'
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog'
import { RandomTask, TaskService } from '../../../../services/task.service'

@Component({
  selector: 'app-delete-dialog',
  templateUrl: './delete-dialog.component.html',
  styleUrls: ['./delete-dialog.component.scss'],
})
export class DeleteDialogComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<DeleteDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: RandomTask,
    public taskService: TaskService
  ) {}

  ngOnInit(): void {}

  onNoClick() {
    this.dialogRef.close()
  }
  deleteTask(id: string) {
    localStorage.removeItem(id)
  }
}
