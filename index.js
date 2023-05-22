var random1=Math.floor(Math.random()*6)+1;
var randomimage="dice"+random1+".png";
var imagesource="images/"+randomimage;

var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src",imagesource);

var random2 =Math.floor(Math.random()*6)+1;

var randomimage2="images/dice"+random2+".png";

document.querySelectorAll("img")[1].setAttribute("src",randomimage2);




var date = new Date().getFullYear();

document.getElementById("year").innerHTML = date;

if(random1>random2)
{
    document.querySelector("h1").innerHTML="player1 wins";
    
}
else if(random2>random1)
{
    document.querySelector("h1").innerHTML="player2 wins";
    
}
else
{
    document.querySelector("h1").innerHTML="Draw";
    
}
