var p1=Math.random();
var p2=Math.random();
p1=Math.floor(p1*6)+1;
p2=Math.floor(p2*6)+1;

image1="images/dice"+p1+".png";
image2="images/dice"+p2+".png";

if(p1>p2){
  document.querySelector("h1").textContent="🚩 Player1 Wins!";
}
else if(p1<p2){
  document.querySelector("h1").textContent="Player2 Wins!🚩";
}

else{
    document.querySelector("h1").textContent="Draw!";
}

document.querySelectorAll("img")[0].setAttribute("src",image1);
document.querySelectorAll("img")[1].setAttribute("src",image2);
