import { SystemFiles } from "./FileSystem";

export class JpegFile extends SystemFiles{
  readFile(){
        console.log("Contents of the file will be displayed as flat image")
    }

    writeFile(){
        console.log("An image file will be created with millions of colors")
    }

    behavior(){
        console.log("File dimensions will be associated : 1920px X 1080px")
    }
}