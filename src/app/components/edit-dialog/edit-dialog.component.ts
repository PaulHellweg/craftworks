import { Component, Inject, OnInit } from '@angular/core'
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog'
import { RandomTask, TaskService } from '../../services/task.service'
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
  constructor(
    public dialogRef: MatDialogRef<EditDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: RandomTask,
    public taskService: TaskService
  ) {}

  ngOnInit(): void {}

  onNoClick(): void {
    this.dialogRef.close()
  }

  updateData(id: string) {
    localStorage.setItem(id, JSON.stringify(this.data))
  }
}
