import { Component, OnInit } from '@angular/core';
import { ImageUploadService } from '../upload/image-upload/imageUpload.service';

@Component({
  selector: 'app-chat-component',
  templateUrl: './chat-component.component.html',
  styleUrls: ['./chat-component.component.css'],
})
export class ChatComponentComponent implements OnInit {
 
  preloadFile: any[] = []
  constructor(private service: ImageUploadService){}

  ngOnInit(): void {
  this.preloadFile = this.service.getFiles
    console.log('preloadfile: ', this.preloadFile)
  }


}
