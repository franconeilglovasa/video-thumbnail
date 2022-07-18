import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ThumbComponent } from './thumb/thumb.component';
import { VideoProcessingService } from './video-processing-service';

@NgModule({
  declarations: [
    AppComponent,
    ThumbComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    VideoProcessingService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
