// var num1 = Math.random();
// num1 = num1*6 + 1;
// num1 = Math.floor(num1);


// var randomimg = "dice"+num1+".png";
// var imgsrc = "./images/"+randomimg;
// var img1 =document.querySelectorAll("img")[0]
// img1.setAttribute("src",imgsrc);



// var num2 = Math.random();
// num2 = num2*6 + 1;
// num2 = Math.floor(num2);

// var randomimg1 = "dice"+num2+".png";
// var imgsrc1 = "./images/"+randomimg1;
// var img2 =document.querySelectorAll("img")[1]
// img2.setAttribute("src",imgsrc1);
var num1 = Math.floor(Math.random() * 6) + 1;
var randomimg = "dice" + num1 + ".png";
var imgsrc = "./images/" + randomimg;
var img1 = document.querySelectorAll("img")[0];
img1.setAttribute("src", imgsrc);

var num2 = Math.floor(Math.random() * 6) + 1;
var randomimg2 = "dice" + num2 + ".png";
var imgsrc2 = "./images/" + randomimg2;
var img2 = document.querySelector("#ABC");
img2.setAttribute("src", imgsrc2);


if(num1>num2){
    document.querySelector("h2").innerHTML="Player 1 Won!!";
}else if(num1<num2){
    document.querySelector("h2").innerHTML="Player 2 Won!!";
}else{
    document.querySelector("h2").innerHTML="Score are equal retry players.";
}


// if(num1 ==1){
//     document.querySelector("img").src="./images/dice1.png"
// }else if(num1 == 2){
//     document.querySelector("img").src="./images/dice2.png"
// }else if(num1 == 3){
//     document.querySelector("img").src="./images/dice3.png"
// }else if(num1 == 4){
//     document.querySelector("img").src="./images/dice4.png"
// }else if(num1 == 5){
//     document.querySelector("img").src="./images/dice5.png"
// }else{
//     document.querySelector("img").src="./images/dice6.png"
// }

// if(num2 ==1){
//     document.querySelector("img").src="./images/dice1.png"
// }else if(num2 == 2){
//     document.querySelector("img").src="./images/dice2.png"
// }else if(num2 == 3){
//     document.querySelector("img").src="./images/dice3.png"
// }else if(num2 == 4){
//     document.querySelector("img").src="./images/dice4.png"
// }else if(num2 == 5){
//     document.querySelector("img").src="./images/dice5.png"
// }else{
//     document.querySelector("img").src="./images/dice6.png"
// }

