
/**
 *解决中间有点的问题
 *
 * @export
 * @param {*} data
 * @param {string} keyName
 * @return {*} 
 */
export default function lookup (data:any,keyName:string){
    let temp = data;
    const names = keyName.split('.');
    if(names.indexOf('.')!==-1 && keyName!=='.'){
        for(let k of names){
            temp = temp[k]
        }
        return temp;
    }
    return data[keyName];
}