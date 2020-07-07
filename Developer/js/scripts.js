const languages = ["HTML" , "CSS" , "JavaScript" , "PHP" , "SWAIFT" , "JAVA"];

const needed_language = languages [2];

console.log("مبرحباً بك في برنامج توضيف المبرمجين ");

let name = prompt(" ما اسمك ؟");
let age = prompt(" كم عمرك ؟ ");
let exp = prompt(" كم عدد سنوات الخبرة ؟ ");

console.log(":لغات البرمجة");
console.log("1. " + languages[0]);
console.log("2. " + languages[1]);
console.log("3. " + languages[2]);
console.log("4. " + languages[3]);
console.log("5. " + languages[4]);
console.log("6. " + languages[5]);

let skill = prompt(" اختر اللغة ");
let skill2 = prompt("  اختر لغة اخرى");

if(
age > 25 && age < 40 && exp > 3 && skill == needed_language || skill2 == needed_language

){
console.log("مقبول");
} else{
    console.log("مرفوض");

}