import parseTemplateToTokens from './parse-template-to-token';

export default class MyMustache{
    render(str:string){
        return parseTemplateToTokens(str)
    }
    
}