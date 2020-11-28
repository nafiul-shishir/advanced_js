const students = [
    { id: 21, name: 'Omar Sunny'},
    {id: 22, name: 'Manna'},
    {id: 23, name: 'Pori Moni'},
    {id: 24, name: 'Dipjol'}
];

const names = students.map(s => s.name);
const Ids = students.map(x => x.id);
const bigger = students.filter ( f => f.id>22);
const find = students.find (f => f.id>22);

console.log(Ids,names,bigger,find);