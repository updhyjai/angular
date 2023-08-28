import { Component } from '@angular/core';
import { ImageUploadService } from '../upload/image-upload/imageUpload.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers: []
})
export class DashboardComponent {
  labelText: string = 'Drag ‘n drop a photo';
  labelImagePath : string= 'assets\\upload-images\\icn-image.svg';

  constructor(private service: ImageUploadService, private router: Router){}

  preloadFile = this.service.getFiles

  handleImageUpload(data :any){
    console.log('handleImage upload: ',data)
    this.router.navigate(['/chat'])
  }

  handleRemoveImage(data :any){
    console.log('handleRemoveImage upload: ',data)
  }
}
