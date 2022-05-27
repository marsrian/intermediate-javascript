const students = [
    { id: 11, name: 'Rahat' },
    { id: 23, name: 'Jusef' },
    { id: 34, name: 'Munsef' },
    { id: 45, name: 'Robiul' },
];
const names = students.map(s => s.name);
console.log(names);
const ids = students.map(s => s.id);
console.log(ids);
const highStudent = students.filter(s => s.id > 25);
console.log(highStudent);
const lookHighOne = students.find(s => s.id > 20);
console.log(lookHighOne);