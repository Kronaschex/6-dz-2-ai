// map filter reduce find findIndex forEAch

const students = [
    { name: "Ayan", age: 14, salary: 50000 },
    { name: "Ariet", age:14, salary: 40000 },
    { name: "Almaz", age: 13, salary: 45000},
    { name: "Erbol", age:14, salary: 40000},
];
console,log(students);

const mapStudents=students.map(students=>{
    return '${students.name} ${students.age}' 
})
console.log(mapStudents);

const filterStudents=students.filter(adam=>adam.salary>=45000)
console.log(FilterStudents);

const reduceStud=students.reduce((total,student)=>{

    return total+student.salary
}, 0)
