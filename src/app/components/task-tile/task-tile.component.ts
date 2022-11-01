import { Component, Input, OnDestroy, OnInit } from '@angular/core'
import { MatDialog } from '@angular/material/dialog'
import { SubSink } from 'subsink'
import { DeleteDialogComponent } from './utils/delete-dialog/delete-dialog.component'
import { EditDialogComponent } from '../utils/edit-dialog/edit-dialog.component'
import { RandomTask } from '../../services/tasks.service'

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
    this.sink.add(dialofRef.afterClosed().subscribe((result) => {}))
  }
  public openDeleteDialog(): void {
    const dialofRef = this.dialog.open(DeleteDialogComponent, {
      data: this.randomTask,
      width: '20rem',
      closeOnNavigation: true,
    })

    this.sink.add(dialofRef.afterClosed().subscribe((result) => {}))
  }

  ngOnDestroy(): void {
    this.sink.unsubscribe()
  }
}
