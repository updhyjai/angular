import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ImageUploadComponent } from './upload/image-upload/image-upload.component';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { ImageCaptureComponent } from './capture/image-capture/image-capture.component';
import { WebcamModule } from 'ngx-webcam';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ImageUploadComponent,
    ImageCaptureComponent
  ],
  imports: [
    BrowserModule,
    NgxDropzoneModule,
    WebcamModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
