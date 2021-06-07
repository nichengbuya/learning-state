import nestToken from './nest-token';
import removeWordSpace from './remove-word-space';
import Scanner from './scanner';

/**
 *将模板字符串转换成tokens
 *
 * @export
 * @param {string} templateStr
 * @return {*} 
 */
export default function parseTemplateToTokens(templateStr:string){
    const scanner = new Scanner(templateStr);
    const tokens:any = [];
    let word;
    while(!scanner.eos()){
        word = scanner.scanUntil('{{'); 
        if(word !=='' ){
            word = removeWordSpace(word);
            tokens.push(['text',word]);
        }
        scanner.scan('{{');
        word = scanner.scanUntil('}}');
        if(word !== ''){
            word = removeWordSpace(word);
            if(word[0] === '#'){
                tokens.push(['#',word.substring(1)]);
            }else if(word[0] === '/'){
                tokens.push(['/',word.substring(1)]);
            }else {
                tokens.push(['name',word]);
            }
        }
        scanner.scan('}}');
    }
    return nestToken(tokens);
}