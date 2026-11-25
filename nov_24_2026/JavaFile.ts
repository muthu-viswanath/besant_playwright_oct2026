import { SystemFiles } from "./FileSystem";
export class JavaFile extends SystemFiles{
  readFile(){
        console.log("Contents of the file will be displayed as java code")
    }

    writeFile(){
        console.log("A sophisticated Java code will be written in the file")
    }

    behavior(){
        console.log("Java syntaxes will be highlighted")
    }
}