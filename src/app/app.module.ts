import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { AppComponent } from './app.component'
import { TaskTileComponent } from './components/task-tile/task-tile.component'
import { AppViewComponent } from './components/app-view/app-view.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MatButtonModule } from '@angular/material/button'
import { MatIconModule } from '@angular/material/icon'
import { MatDialogModule } from '@angular/material/dialog'
import { EditDialogComponent } from './components/utils/edit-dialog/edit-dialog.component'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatPaginatorModule } from '@angular/material/paginator'
import { MatDatepickerModule } from '@angular/material/datepicker'
import { MatNativeDateModule } from '@angular/material/core'
import { MatCardModule } from '@angular/material/card'
import { DatePipe } from '@angular/common'
import { MatSelectModule } from '@angular/material/select'
import { MatInputModule } from '@angular/material/input'
import { FormsModule } from '@angular/forms'
import { DeleteDialogComponent } from './components/task-tile/utils/delete-dialog/delete-dialog.component'
import { SortPipe } from './pipes/sort.pipe'
import {
  MAT_COLOR_FORMATS,
  NgxMatColorPickerModule,
  NGX_MAT_COLOR_FORMATS,
} from '@angular-material-components/color-picker'
import { PriorityPillComponent } from './components/task-tile/utils/priority-pill/priority-pill.component'

@NgModule({
  declarations: [
    AppComponent,
    TaskTileComponent,
    AppViewComponent,
    EditDialogComponent,
    DeleteDialogComponent,
    SortPipe,
    PriorityPillComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatCardModule,
    DatePipe,
    MatSelectModule,
    MatInputModule,
    NgxMatColorPickerModule,
  ],
  providers: [{ provide: MAT_COLOR_FORMATS, useValue: NGX_MAT_COLOR_FORMATS }],
  bootstrap: [AppComponent],
})
export class AppModule {}
