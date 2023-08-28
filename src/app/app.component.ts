import { Component } from '@angular/core';
import { ImageUploadService } from './upload/image-upload/imageUpload.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ImageUploadService]
})
export class AppComponent {
  title = 'image-dnd-poc';
   labelText: string = 'Drag ‘n drop a photo';
  labelImagePath : string= 'assets\\upload-images\\icn-image.svg';

  constructor(private service: ImageUploadService){}

  preloadFile = this.service.getFiles
}
