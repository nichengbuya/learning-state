export default class Subject{
    events:Map<string,Function[]>;
    constructor(){
        this.events = new Map();;
    }
    subscribe(name:string,fn:Function){
        if(!this.events.has(name)){
            this.events.set(name,[]);
        }
        this.events.get(name)?.push(fn);
    }
    public(name:string,data= {}){
        if(!this.events.has(name)){
            return []
        }
        return this.events.get(name)?.map(callback => callback(data));
    }
}