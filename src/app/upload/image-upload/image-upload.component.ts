import { Component, ElementRef, Input, Output, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-image-upload',
  templateUrl: './image-upload.component.html',
  styleUrls: ['./image-upload.component.css']
})
export class ImageUploadComponent {
  private label: string = 'Drag ‘n drop a photo';
  private imagePath : string= 'assets\\upload-images\\icn-image.svg';
  private files: Array<any> = []
  @Input() file: any

  isUploaded = false;

  onSelect(event: any){
    if(this.files.length){
      this.files.pop()
    }
    this.files.push(...event.addedFiles);
    this.isUploaded = true  
  }

  onRemove(data: any){
   const f =  this.files.pop()
    this.isUploaded = false
  }

  get getLabelText(){
    return this.label;
  }

  get getLabelImagePath(){
    return this.imagePath;
  }

  set setFiles(file: any){
    this.files.push(file)
  }

  get getFiles(){
    return this.files;
  }
} 
