const student = {
    fistName : "Topu",
    lastName : "Bhuyan",
    age : 21,
    favoritSubject : ["HTML", "CSS", "JS"],
};
// console.log(student.fistName);
// for(let i = 0; i <student.favoritSubject.length; i++){
//     console.log(student.favoritSubject[i]);
// }

// for of loop

for(let subject of student.favoritSubject){
    console.log(subject);
}