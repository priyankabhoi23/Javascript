// console.log("print message")----->for printing
console.log("my name is priyanka");
// variable declearation
age=25;// this is not way to declear variable in javascript even though error do not occur
console.log(age);
// javascript is dynamically typed language(pehale hi variable ka type nahi dena padata)
// VARIABLE RULES
// 1.Variable names are case sensitive;"a" & "A" is different.
// 2.only letters,digits,underscore(_) and $ is allowed.(not even space)
// 3.only a letter, (_) or $ should be 1st character.
// Reserved words cannot be variable names.

// VARIABLE DECLEARATION IN JAVASCRIPT
let weight=25;//variable cannot be redecleared but can be updated.A block scope variable.

const mass=25;//variable cannot be redecleared but can be updated.A block scope variable.व्हेरिएबलच्या ब्लॉक स्कोपचा अर्थ असा आहे की व्हेरिएबल कर्ली ब्रेसेसमध्ये असलेल्या ब्लॉकमध्ये प्रवेश करण्यायोग्य आहे.

var height=145;//variable can be redecleared and updated.A global scope variable.(Not used)
console.log(weight);


// Data Types in JS
// Primitive:-Number,string,boolean,Undefined,Null,BigInt,Symbol
let a=25;
typeof(a);
let t=-1111;
typeof(t);
let isfollw=true;
typeof(isfollw);
let x;
typeof(x);
let y="my name";
typeof(y);
let r=null;
typeof(r);
let num=BigInt("1234");
typeof(num);
let w=Symbol("hello!!")
console.log(typeof(w));

// Non-Primitive:- object,array ,function
// 1.object:-collection of different variables
const student={
    fullName:"priya",
    sge:20,
    cgpa:40,
}
console.log(student);
console.log(student.sge);
console.log(student["cgpa"]);
student["cgpa"]=55;
console.log(student["cgpa"]);

