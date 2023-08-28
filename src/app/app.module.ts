import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ImageUploadComponent } from './upload/image-upload/image-upload.component';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { ImageCaptureComponent } from './capture/image-capture/image-capture.component';
import { WebcamModule } from 'ngx-webcam';
import { FormsModule } from '@angular/forms';
import { ChatComponentComponent } from './chat-component/chat-component.component';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ImageUploadService } from './upload/image-upload/imageUpload.service';

const appRoutes : Routes = [
  {path: '', component: DashboardComponent},
  {path: 'chat', component: ChatComponentComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    ImageUploadComponent,
    ImageCaptureComponent,
    ChatComponentComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    NgxDropzoneModule,
    WebcamModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ImageUploadService],
  bootstrap: [AppComponent]
})
export class AppModule { }
