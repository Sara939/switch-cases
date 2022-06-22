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
// //     }

// // }
// // 4:
// // function printByInfo(){
// //     let userssize= document.getElementById("mysize").value;
// //     let userscolor= document.getElementById("mycolor").value;
// //     let userstext=  document.getElementById("mytext").value;
// //     let mydivelem= document.getElementById("mydiv");

// //     switch(userssize){
// //         case "small":
// //             mydivelem.innerHTML= userstext; 
// //             mydivelem.style.color= userscolor;
// //             mydivelem.style.fontSize= "30px";
// //             break;
// //         case "meduim":
// //             mydivelem.innerHTML= userstext; 
// //             mydivelem.style.color= userscolor;
// //             mydivelem.style.fontSize= "50px";
// //             break;
// //         case "large":
// //             mydivelem.innerHTML= userstext; 
// //             mydivelem.style.color= userscolor;
// //             mydivelem.style.fontSize= "100px";
// //             break;
// //     }

// // }

// // 5: did on class

// // 6: colculaor:


    let textfield= document.getElementById("textshow");
    let textfield2= document.getElementById("textshow2");
    let textfield3= document.getElementById("textshow3");
   


    function calculat(){
        switch(textfield2.innerText){
            case "+": 
            textfield2.innerText= +(textfield.innerHTML) + +(textfield3.innerHTML);   
            textfield.innerText =textfield2.innerText;
            textfield3.innerText = "";
                break;        
            case "-":
                textfield2.innerText= +(textfield.innerHTML) - +(textfield3.innerHTML);   
                textfield.innerText = textfield2.innerText;
                textfield3.innerText = "";
                break;
            case "/":
                textfield2.innerText= +(textfield.innerHTML) / +(textfield3.innerHTML);   
                textfield.innerText = textfield2.innerText;
                textfield3.innerText = "";
                break;
            case "*":
                textfield2.innerText= +(textfield.innerHTML) * +(textfield3.innerHTML);   
                textfield.innerText = textfield2.innerText;
                textfield3.innerText = "";
                break;
        }


    }



// ///////////////////////////////////onother option- not done yet


    // function numpress(num){
    //     if(typeof num == 'number'){
    //         return textfield.innerHTML+= num;
    //     }
    //     else{
    //         calculat();
    //     }
    // }



    function numpress(num){

        switch(num){
            case 1:
                if(textfield.innerHTML == ""){
                    return textfield.innerHTML+= num;
                }
                else{
                    return textfield3.innerHTML+= num;
                }
                
            case 2:
                if(textfield.innerHTML == ""){
                    return textfield.innerHTML+= num;
                }
                else{
                    return textfield3.innerHTML+= num;
                }
            case 3:
                if(textfield.innerHTML == ""){
                    return textfield.innerHTML+= num;
                }
                else{
                    return textfield3.innerHTML+= num;
                }
            case 4:
                if(textfield.innerHTML == ""){
                    return textfield.innerHTML+= num;
                }
                else{
                    return textfield3.innerHTML+= num;
                }
            case 5:
                if(textfield.innerHTML == ""){
                    return textfield.innerHTML+= num;
                }
                else{
                    return textfield3.innerHTML+= num;
                }
            case 6:
                if(textfield.innerHTML == ""){
                    return textfield.innerHTML+= num;
                }
                else{
                    return textfield3.innerHTML+= num;
                }
            case 7:
                if(textfield.innerHTML == ""){
                    return textfield.innerHTML+= num;
                }
                else{
                    return textfield3.innerHTML+= num;
                }
            case 8:
                if(textfield.innerHTML == ""){
                    return textfield.innerHTML+= num;
                }
                else{
                    return textfield3.innerHTML+= num;
                }
            case 9:
                if(textfield.innerHTML == ""){
                    return textfield.innerHTML+= num;
                }
                else{
                    return textfield3.innerHTML+= num;
                }
            case 0:
                if(textfield.innerHTML == ""){
                    return textfield.innerHTML+= num;
                }
                else{
                    return textfield3.innerHTML+= num;
                }
            case "*":
                return textfield2.innerHTML= num;
            case "+":
                return textfield2.innerHTML= num;
            case "-":
                return textfield2.innerHTML= num;
            case "/":
                return textfield2.innerHTML= num;
            case "*":
                return textfield2.innerHTML= num;
            }
    
        }
    
    function clearac(){
        textfield.innerText = "";
        textfield2.innerText = "";
        textfield3.innerText = "";
    }

    





