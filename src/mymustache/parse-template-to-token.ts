import Scanner from './scanner';

export default function(templateStr:string){
    const scanner = new Scanner(templateStr);
    const tokens:any = [];
    let word;
    while(!scanner.eos()){
        word = scanner.scanUntil('{{');
        if(word !=='' ){
            tokens.push(['text',word]);
        }
        scanner.scan('{{');
        word = scanner.scanUntil('}}');
        if(word !== ''){
            if(word[0] === '#'){
                tokens.push(['#',word]);
            }else if(word[0] === '/'){
                tokens.push(['/',word]);
            }else {
                tokens.push(['name',word]);
            }
        }
        scanner.scan('}}');
    }
    return tokens;
}