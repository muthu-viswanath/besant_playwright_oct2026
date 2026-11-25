import { SystemFiles } from "./FileSystem";
export class PdfFile extends SystemFiles{
  readFile(){
        console.log("Contents of the file will be displayed as a document"+
            " containing images, text and links")
    }

    writeFile(){
        console.log("An portable document will be created")
    }

    behavior(){
        console.log("Links are intractable")
    }
}