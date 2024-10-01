// Напиши програму, яка запитує у користувача номер дня тижня (від 1 до 7)
//  і виводить назву відповідного дня (1 — понеділок, 2 — вівторок і т.д.). 
// Використай switch case.
// let day = prompt("Enter the day of the week number");

// switch (day){
//     case "1":
//         alert("Monday");
//         break;
//     case "2":
//         alert("Tuesday");
//         break;
//     case "3":
//         alert("Wednesday");
//         break;
//     case "4":
//         alert("Thursday");
//         break;
//     case "5":
//         alert("Friday");
//         break;
//     case "6":
//         alert("Sunday");
//         break;
//     case "7":
//         alert("Saturday");
//         break;
// }





// Напиши програму, яка запитує у користувача номер місяця (від 1 до 12) і виводить пору року 
// (1-3 — зима, 4-6 — весна, 7-9 — літо, 10-12 — осінь). Використай switch case.
// let month= prompt("Enter month number");
// switch (true){
//     case (month >=1 && month <=3):
//         alert("Winter");
//         break;
//         case (month >=4 && month <=6):
//         alert("Spring");
//         break;
//         case (month >=7 && month <=9):
//         alert("Summer");
//         break;
//         case (month >= 10 && month <= 12):
//         alert("Fall");
//         break;
// }



// Напиши програму, яка запитує у користувача вік і визначає категорію: дитина (0-12), підліток (13-17),
//  дорослий (18-64), пенсіонер (65 і більше). Використай switch case.
// let age= prompt("Enter your age");
// switch (true){
//     case(age >=0 && age <=12):
//     alert("child");
//     break;
//     case(age >=13 && age <=17):
//     alert("teenager");
//     break;
//     case(age >=18 && age <=64):
//     alert("adult");
//     break;
//     case(age >=65):
//     alert("pensioner");
//     break;
// }


// Напиши програму, яка запитує у користувача назву місяця (наприклад, "Січень") 
// і виводить його порядковий номер (1 для Січня, 2 для Лютого і т.д.). Використай switch case.
let month = prompt("Enter your month");
switch (month) {
    case "January":
        alert("1");
        break;
    case "February":
        alert("2");
        break;
    case "March":
        alert("3");
        break;
    case "April":
        alert("4");
        break;
    case "May":
        alert("5");
        break;
    case "June":
        alert("6");
        break;
    case "July":
        alert("7");
        break;
    case "August":
        alert("8");
        break;
    case "September":
        alert("9");
        break;
    case "October":
        alert("10");
        break;
    case "Novembe":
        alert("11");
        break;
    case "December":
        alert("12");
        break;
 default: alert("There is no such month")
}