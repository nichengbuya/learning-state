import MyMustache from "./mymustache";

// const templateStr = '<h1>我买了个{{thing}}，心情{{mood}}</h1>';
const templateStr = `
<div>
{{#student}}
<ul>
    <li>{{item.name}}</li>
    <li>{{item.age}}</li>
    <li>{{item.hobbies}}</li>
</ul>
{{/student}}
</div>
`;
const mustache = new MyMustache();
const tokens = mustache.render(templateStr);
console.log(tokens);