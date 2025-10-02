import { isTemplateExpression } from "typescript";

export default class weather{
    temp:number = Math.floor(Math.random()*56);
    static weatherTemp(){
        console.log("Weather temperature today is: " + "(C) degress.")
    }
}