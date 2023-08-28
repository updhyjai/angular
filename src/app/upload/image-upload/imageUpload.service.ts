export class ImageUploadService{
    
    constructor(){}

    private allowMultiple = false;
    private files: Array<any> = []
    private uploaded = false;

  onUploadImage(files :any){
    if(!this.allowMultiple && this.files.length){
        this.files.pop()
      }
      this.files.push(...files);
      this.uploaded = true  
  }

  get isAllowMultiple(){
    return this.allowMultiple;
  }


  set isAllowMultiple(isAllowMultiple: boolean){
     this.allowMultiple = isAllowMultiple;
  }

  onRemove(fileToRemove: any){
    if(this.allowMultiple){
      this.files.splice(this.files.indexOf(fileToRemove), 1);
    }else{
      this.files.pop()
    }
    if(this.files.length === 0){
      this.uploaded = false
    }
     return fileToRemove;
   }
 
   set setFiles(file: any){
     this.files.push(file)
   }
 
   get getFiles(){
     return this.files;
   }

   get isUploaded(){
    return this.uploaded;
   }
 
}