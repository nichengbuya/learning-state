import Mustache from 'mustache';
const dom = document.getElementById('root') as HTMLElement;
const templateStr = '<h1>我买了个{{thing}}，心情{{mood}}</h1>';
const data: any = {
    thing:'huawei',
    mood:'happy'
}
function render(str:string,data:any){
    const reg = /\{\{(\w+)\}\}/g;
    return str.replace(reg,(a,$1)=>{
        console.log(a,$1) // a为捕获的字符串，$1
        return data[$1]
    })
}
dom.innerHTML = render(templateStr,data)
