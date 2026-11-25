import { JavaFile } from "./JavaFile";
import { PdfFile }from "./PdfFile";
import { SystemFiles } from "./FileSystem";
import { JpegFile } from "./JpegFile";
import { TextFile } from "./TextFile";
class VsCodeApp{
    open(file: SystemFiles){
        let j;
        file.readFile();
        file.writeFile();
        if( file instanceof JavaFile){
            j = file as JavaFile;
            j.behavior();
        }
        else if(file instanceof PdfFile)
        {
            j = file as PdfFile;
            j.behavior();
        }
    }
}

let vs = new VsCodeApp()
let java_source = new JavaFile("HelloWorld","2 kb",".java")
let pdf_source = new PdfFile("My_Resume","150 MB",".pdf")
vs.open(java_source)
vs.open(pdf_source)