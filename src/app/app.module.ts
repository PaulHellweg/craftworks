import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { AppComponent } from './app.component'
import { TaskTileComponent } from './components/task-tile/task-tile.component'

@NgModule({
  declarations: [AppComponent, TaskTileComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
