export default function(token:any[]){
    const nestToken: any = [];
    const stack = [];
    let collector = nestToken;
    for(let i=0;i<token.length;i++){
        let t = token[i];
        switch(t[0]){
            case '#':{
                stack.push(t);
                collector.push(t);
                collector = t[2] = [];
                break;
            }case '/':{
                stack.pop();
                collector = stack.length > 0? stack[stack.length-1][2] : nestToken;
                break;
            }default:{
                collector.push(t);
            }
        }
    }

    return nestToken;
}








