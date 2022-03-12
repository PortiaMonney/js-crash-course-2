let a=10;
let b=6;


console.log(a * b);
console.log(a - b);
console.log(a / b);
console.log(a % b);

// urinary operator

console.log(a++);
console.log(a);
console.log(++a);
console.log(a--);
console.log(a);
console.log(--a);

// comparison
//let a=10;
//let b=6;
//let c="10";
console.log(a < b);
console.log(a > b);
console.log(a == b);
console.log(a == c);
console.log(a === c); 


//control flow
let age =18;

if(age>18){
    console.log("you had A");

}else if (score>=75){
    console.log("you had B+");
}
if(score>=70){
    console.log("you had B");

}else if(score>=65){
    console.log("you had C+");

} else if (score>= 60) {
    console.log("you had C");

} else if (score>=55) {
    console.log("you had D+");

} else if (score >= 50) {
    console.log("you had D");
    
}else {
    console.log("you had E");
}

const gender="male"

switch(gender){
    case"male":
    console.log("go to the male washroom")
    break;
    case"female":
    console.log("go to female washroom")
    break;
    default:
    console.log("no washroom for you");
    break;
}
for(let count=1;count<10;count++){
 console.log(count);
 console.log(a);

}