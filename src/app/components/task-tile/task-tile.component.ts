import { Component, Input, OnDestroy, OnInit } from '@angular/core'
import { MatDialog } from '@angular/material/dialog'
import { SubSink } from 'subsink'
import { RandomTask } from '../../services/task.service'
import { DeleteDialogComponent } from './utils/delete-dialog/delete-dialog.component'
import { EditDialogComponent } from './utils/edit-dialog/edit-dialog.component'

@Component({
  selector: 'app-task-tile',
  templateUrl: './task-tile.component.html',
  styleUrls: ['./task-tile.component.scss'],
})
export class TaskTileComponent implements OnInit, OnDestroy {
  private sink = new SubSink()
  @Input()
  public randomTask: RandomTask | undefined

  constructor(private dialog: MatDialog) {}

  public ngOnInit(): void {}

  public openEditDialog(): void {
    const dialofRef = this.dialog.open(EditDialogComponent, {
      data: this.randomTask,
      width: '50rem',
      closeOnNavigation: true,
    })
    this.sink.add(
      dialofRef.afterClosed().subscribe((result) => {
        console.log(`Dialog result: ${result}`)
      })
    )
  }
  public openDeleteDialog(): void {
    console.log('openDialog')
    const dialofRef = this.dialog.open(DeleteDialogComponent, {
      data: this.randomTask,
      width: '20rem',
      closeOnNavigation: true,
    })

    this.sink.add(
      dialofRef.afterClosed().subscribe((result) => {
        console.log(`Dialog result: ${result}`)
      })
    )
  }

  ngOnDestroy(): void {
    this.sink.unsubscribe()
  }
}
