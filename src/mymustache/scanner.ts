
export default class Scanner{
    templateStr: string;
    pos = 0;
    tail: string;
    constructor(templateStr:string) {
        this.templateStr = templateStr;
        this.tail = templateStr;
    }
    scan(stopTag:string){
        this.pos += stopTag.length;
        this.tail = this.templateStr.substring(this.pos)
    }
    scanUntil(stopTag:string){
        const pre = this.pos
        while(!this.eos() && this.tail.indexOf(stopTag)!==0){
            this.pos++;
            this.tail = this.templateStr.substring(this.pos);
        }
        return this.templateStr.substring(pre,this.pos)
    }
    eos(){
        return this.pos >= this.templateStr.length
    }
}