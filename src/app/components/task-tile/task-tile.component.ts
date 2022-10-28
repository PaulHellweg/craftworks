import { Component, Input, OnInit } from '@angular/core'
import { MatDialog } from '@angular/material/dialog'
import { RandomTask } from '../../services/task.service'
import { EditDialogComponent } from '../edit-dialog/edit-dialog.component'

@Component({
  selector: 'app-task-tile',
  templateUrl: './task-tile.component.html',
  styleUrls: ['./task-tile.component.scss'],
})
export class TaskTileComponent implements OnInit {
  @Input()
  public randomTask: RandomTask | undefined

  constructor(private dialog: MatDialog) {}

  public ngOnInit(): void {}

  public openDialog(): void {
    console.log('openDialog')
    const dialofRef = this.dialog.open(EditDialogComponent, {
      data: this.randomTask,
      width: '50rem',
      closeOnNavigation: true,
    })

    dialofRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`)
    })
  }
}
