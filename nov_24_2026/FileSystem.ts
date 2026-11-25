export class SystemFiles{
    filename:string;
    filesize:string;
    file_format:string;

    constructor(filename:string, filesize:string, file_format:string){
        this.filename = filename;
        this.filesize = filesize;
        this.file_format = file_format;
    }

    readFile(){
        console.log("Contents of the file will be displayed")
    }

    writeFile(){
        console.log("A file will be created or modified")
    }
}