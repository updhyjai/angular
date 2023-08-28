export class ImageUploadService{

    constructor(private allowMultiple: boolean){}

    private files: Array<any> = []
    private isUploaded = false;

  onUploadImage(files :any){
    if(this.allowMultiple && this.files.length){
        this.files.pop()
      }
      this.files.push(...files);
      this.isUploaded = true  
  }

  
  onRemove(data: any){
     this.isUploaded = false
    this.files.pop()
   }
 
   set setFiles(file: any){
     this.files.push(file)
   }
 
   get getFiles(){
     return this.files;
   }
 
}