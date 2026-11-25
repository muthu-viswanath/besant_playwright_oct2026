import { SystemFiles } from "./FileSystem";
export class TextFile extends SystemFiles{
  readFile(){
        console.log("Contents of the file will be displayed as a plan text")
    }

    writeFile(){
        console.log("An simple text document will be created")
    }

    behavior(){
        console.log("A plan text document with no interactions or formatting")
    }
}