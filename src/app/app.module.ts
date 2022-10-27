import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { AppComponent } from './app.component'
import { TaskTileComponent } from './components/task-tile/task-tile.component';
import { AppViewComponent } from './components/app-view/app-view.component'

@NgModule({
  declarations: [AppComponent, TaskTileComponent, AppViewComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
