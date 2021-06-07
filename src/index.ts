import MyMustache from "./mymustache";

const data = {
    student: [
        { name: 'A', age: 17, sex: '0',hobbies:['footbal','sex','drug'] },
        { name: 'B', age: 18, sex: '0',hobbies:['footbal','fuck','play'] },
        { name: 'E', age: 19, sex: '1',hobbies:['footbal','do'] },
        { name: 'C', age: 20, sex: '1',hobbies:['footbal','make'] },
        { name: 'D', age: 18, sex: '0',hobbies:['footbal','study'] }
    ]
}
// const templateStr = '<h1>我买了个{{thing}}，心情{{mood}},{{a.b.c}}分</h1>';
const templateStr = `
<div>
{{#student}}
<ul>
    <li class="myli">{{name}}</li>
    <li class="myli">{{age}}</li>
    <li class="myli">{{sex}}</li>

        <ol>
        {{#hobbies}}
            <li>
            {{.}}
            </li>
            {{/hobbies}}
        </ol>

</ul>
{{/student}}
</div>
`;
const mustache = new MyMustache();
const htmlStr = mustache.render(templateStr,data);
console.log(htmlStr)
const root = document.getElementById('root');
if(root){
    root.innerHTML = htmlStr;
}
