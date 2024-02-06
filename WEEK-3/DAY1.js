// using literals

const object= {
    name:"MEHAK",
    course:"B.Tech",
    rollno:11222587,
    section:"E2",
}

console.log(object.course);

const person={};
person.name="mehak";
person.course="btech";
console.log(person.name);
console.log(person['course']);

// using new() keyword 
const sample= new Object();
sample.firstname="mehak";
sample.lastname="goel";
sample.course="btech cse";
console.log(sample['lastname'])
console.log()
console.log()

// for loop 
let space=''
for  (let x in sample){
    space=space+sample[x];
    console.log(space);
}

// adding properties
person.nationality="indian";
console.log(person);

//deleting properties
delete sample.lastname;
console.log(sample)
delete person['name']
console.log(person)

//nested object 
const nested={
    fruit:"apple",
    color:{
        color1:"red",
        color2:"blue",
    },
    flower:{
        flower1:"tulip",
        flower2:"rose",
    }
}

console.log(nested.flower.flower1)
console.log(nested.color)
console.log(nested.color.color2)

