var list = [
    {
        name: 'Daniel',
        age: 22,
        skill: 'HTML'
    },
    {
        name: 'Jayden',
        age: 30,
        skill: 'CSS'
    },
    {
        name: 'Jin',
        age: 28,
        skill: 'JavaScript'
    },
    {
        name: 'Joons',
        age: 30,
        skill: 'React'
    }
];

/* ourTeam */
var space = ',' + ' ';

// document.getElementById('ourTeam').innerHTML = list[0].name + space + list[1].name + space + list[2].name + space + list[3].name;
var x = [list[0].name, list[1].name, list[2].name, list[3].name];

function y(x) {
    for (var i=0; i< x.length; i+=1) {
        console.log(x[i]);
        
        // return(document.getElementById('ourTeam').innerHTML = x[i]);
    }
};

y(x);

/* teamAverage */
var ageArray = [list[0].age, list[1].age, list[2].age, list[3].age];
var sumResult = ageArray.reduce(function add(sum, currValue) {
    return sum + currValue;
}, 0);
var average = sumResult / ageArray.length;

document.getElementById('teamAgeAverage').innerText = average;

// console.log(average);

/* 첫번째 방법 해결 사칙연산으로 인해 () 추가  */
// console.log(list.length);
// console.log(110 / 4);
// console.log((list[0].age + list[1].age + list[2].age + list[3].age) / list.length); 


/* ourSkills */

var space2 = ':' + ' ';
var nameSkills = [list[0].name + space2 + list[0].skill + '<br>' +
list[1].name + space2 + list[1].skill + '<br>' +
list[2].name + space2 + list[2].skill + '<br>' +
list[3].name + space2 + list[3].skill];

document.getElementById('ourSkills').innerHTML = nameSkills;

/* 줄바꿈 1안 => 터미널안에서만 적용됨 */ 
// var joinTest = nameSkills1.join("\n");
// // console.log(joinTest);s
// document.getElementById('ourSkills').innerHTML = nameSkills1.join("\n");



// var nameSkills = [{
//                     nameSkills1: list[0].name + space2 + list[0].skill
//                 },
//                 {
//                     nameSkills2: list[1].name + space2 + list[1].skill
//                 }
//                 ,
//                 {
//                     nameSkills3: list[2].name + space2 + list[2].skill
//                 }
//                 ,
//                 {
//                     nameSkills4: list[3].name + space2 + list[3].skill
//                 }];
// console.log(nameSkills); -> undefined 배열 안에 변수는 들어갈 수 없다? 

