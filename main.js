// 1:
// let num = +prompt("enter a num");
// function getnum(){
//     switch (num){
//         case 3:
//             console.log("hello")
//             break;
//         case 5:
//             console.log("good bye")
//             break;
//         case 7:
//             console.log("thnks");
//         default:
//             console.log("have no correct massage")
//     }

// }
// getnum();

// 2:

// function getname(){
// let namefromuser = document.getElementById("myinput").value;
//     switch(namefromuser){
//         case "jacob":
//             document.write(namefromuser)
//             return;
//         case "nathan":
//             document.write(namefromuser.toUpperCase())
//             break;
//         case "DALYA":
//             document.write(namefromuser.toLowerCase())
//             return;
//         default:
//             console.log("have no correct massage")
//             break;
//     }
// }

// 3:
// function getnumsandsign(){
//     let users1= document.getElementById("myinput").value
//     let users2= document.getElementById("myinput2").value
//     let sign= document.getElementById("textinput").value
//     switch (sign){
//         case "+":
//             console.log (+users1 + +users2);
//             break;
//         case "*" :
//             console.log (+users1 * +users2);
//             break;

//         case "-" :
//             console.log (+users1 - +users2);
//             break;

//         case "/":
//             console.log (+users1 / +users2);
//             break;
//     }

// }
// 4:
// function printByInfo(){
//     let userssize= document.getElementById("mysize").value;
//     let userscolor= document.getElementById("mycolor").value;
//     let userstext=  document.getElementById("mytext").value;
//     let mydivelem= document.getElementById("mydiv");

//     switch(userssize){
//         case "small":
//             mydivelem.innerHTML= userstext; 
//             mydivelem.style.color= userscolor;
//             mydivelem.style.fontSize= "30px";
//             break;
//         case "meduim":
//             mydivelem.innerHTML= userstext; 
//             mydivelem.style.color= userscolor;
//             mydivelem.style.fontSize= "50px";
//             break;
//         case "large":
//             mydivelem.innerHTML= userstext; 
//             mydivelem.style.color= userscolor;
//             mydivelem.style.fontSize= "100px";
//             break;
//     }

// }

// 5: did on class

// 6: colculaor:
    // function calculat(){
    //     let textfield2= document.getElementById("textshow2");
    //     let op= document.getElementById("plusbtn").value
    //     switch(op){
    //         case "+":
    //             textfield2.innerHTML= + document.getElementById("btnnums1").value +2 
    //             break;
    //         // case "-":
    //         //     return textfield.innerHTML+= sign;
    //         // case "/":
    //         //     return textfield.innerHTML+= sign;
    //         // case "*":
    //         //     return textfield.innerHTML+= sign;
    //     }

    // }

    function numpress(num){
        let textfield= document.getElementById("textshow");
        switch(num){
            case 1:
                 return textfield.innerHTML+= num;
            case 2:
                return textfield.innerHTML+= num;
            case 3:
                return textfield.innerHTML+= num;
            case 4:
                return textfield.innerHTML+= num;
            case 5:
                return textfield.innerHTML+= num;
            case 6:
                return textfield.innerHTML+= num;
            case 7:
                return textfield.innerHTML+= num;
            case 8:
                return textfield.innerHTML+= num;
            case 9:
                return textfield.innerHTML+= num;
            case 0:
                return textfield.innerHTML+= num;
            case "*":
                return textfield.innerHTML+= num;
            case "+":
                return textfield.innerHTML+= num;
            case "-":
                return textfield.innerHTML+= num;
            case "/":
                return textfield.innerHTML+= num;
            case "*":
                return textfield.innerHTML+= num;
            }
    
        }

    



