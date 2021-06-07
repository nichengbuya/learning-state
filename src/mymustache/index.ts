import parseTemplateToTokens from './parse-template-to-token';
import renderTemplate from './render-template';
export default class MyMustache{
    render(str:string,data:any){
        return renderTemplate(parseTemplateToTokens(str),data)  
    }
}