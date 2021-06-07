import lookup from './lookup';

/**
 *将data中的数据填充，并且转换成html字符串
 *
 * @export
 * @param {*} token
 * @param {*} data
 * @return {*} 
 */
export default function renderTemplate(token: any,data: any){
    let resultStr = '';
    for(let t of token){
        if(t[0] === 'text'){
            resultStr += t[1]
        }else if(t[0] === 'name'){
            resultStr += lookup(data,t[1]);
        }else if(t[0] === '#'){
            const children = data[t[1]];
            for(let c of children){
                resultStr += renderTemplate(t[2],{
                    ...c,
                    '.':c
                });
            }
        }
    }
    return resultStr;
}