import { Component, ElementRef, Input, Output, Renderer2, ViewChild, OnInit, EventEmitter } from '@angular/core';
import { ImageUploadService } from './imageUpload.service';

@Component({
  selector: 'app-image-upload',
  templateUrl: './image-upload.component.html',
  styleUrls: ['./image-upload.component.css'],
  providers: []

})
export class ImageUploadComponent implements OnInit {
  // @Input('labelComponent') labelComponent: {label: string, imagePath: string} 
  @Input('labelText') labelText: string = 'Drag ‘n drop a photo';
  @Input('labelImagePath') labelImagePath  : string= 'assets\\upload-images\\icn-image.svg';
  @Input() files: Array<any> = [];
  @Output('onUploadImage') onUploadImage = new EventEmitter<any>();
  @Output('onRemoveImage') onRemoveImage = new EventEmitter<any>();
  @Input('width') width: string = '100%';
  @Input('height') height: string = '100%';

  // @Input() file: any
  isUploaded: boolean = false;

  constructor(private imageUploadService: ImageUploadService){}

  ngOnInit(): void {
    this.isUploaded = this.imageUploadService.isUploaded;
    this.files = this.imageUploadService.getFiles;
    this.imageUploadService.isAllowMultiple = false;
  }

  onSelect(event: any){
    this.imageUploadService.onUploadImage(event.addedFiles)
    console.log('files on select',this.files);
    this.onUploadImage.emit(this.getFiles)
  }

  onRemove(data: any){
   const f =  this.imageUploadService.onRemove(data)
    console.log('files on remove',this.files); 
    this.onRemoveImage.emit(f)
  }

  get getLabelText(){
    return this.labelText;
  }

  get getLabelImagePath(){
    return this.labelImagePath;
  }

  set setFiles(file: any){
    this.files.push(file)
  }

  get getFiles(){
    return this.files;
  }
} 
