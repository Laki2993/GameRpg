let PlaceTop = 0;
let UserTop = 0;
let PlaceRight = 0;
let UserRight = 0;

var CoineTop = 0;  
var CoinRight = 0;
const CONST = 25;
const CONST2 = 20;
var UserCoin = 0;

function Obj(){
    var Yobj = Math.floor(Math.random() * 82) * 10 - 410;
    var Xobj = Math.floor(Math.random() * 37) * 10 - 180; 
    CoineTop = Yobj;
    CoinRight = Xobj;
    var Gold = document.createElement("div");
    Gold.className = "Gold";
    document.getElementById("Place").appendChild(Gold);
    Gold.style.top = CONST-CoineTop + "px";
    Gold.style.right = 10+CONST2-CoinRight + "px";
    return Gold;
}
setTimeout(Obj,1000);

document.getElementById("Up").addEventListener("click", function () {
    if(PlaceTop < 460){
        PlaceTop +=10;
        UserTop+=10;
        document.getElementById("Place").style.top = PlaceTop+"px";
        document.getElementById("User").style.bottom = UserTop+"px";
        console.log(UserTop+"User - Y");
        console.log(CoineTop+ "Coine - Y");
    }
    if(UserTop == CoineTop && UserRight == CoinRight){
        document.querySelector('.Gold').remove();
        Obj();
        UserCoin+=1;
        document.getElementById("UserCoin").innerHTML = UserCoin;
       }
})

document.getElementById("Down").addEventListener("click", function () {
    if(PlaceTop > -410){
        PlaceTop -=10;
        UserTop-=10;
        document.getElementById("Place").style.top = PlaceTop+"px";
        document.getElementById("User").style.bottom = UserTop+"px";
        console.log(UserTop+"User - Y");
        console.log(CoineTop+ "Coine - Y");
    }
    if(UserTop == CoineTop && UserRight == CoinRight){
     document.querySelector('.Gold').remove();
     Obj();
     UserCoin+=1;
    document.getElementById("UserCoin").innerHTML = UserCoin;
    }
})

document.getElementById("Right").addEventListener("click", function () {
   if(PlaceRight <180){
        PlaceRight+=10;
        UserRight+=10;
        document.getElementById("Place").style.right = PlaceRight+"px";
        document.getElementById("User").style.left = UserRight+"px";
        document.getElementById("User").style.backgroundImage = "url(RightMove.gif)";
        console.log(UserRight+"User - X");
        console.log(CoinRight+ "Coine - X");
    }
    if(UserTop == CoineTop  && UserRight == CoinRight){
        document.querySelector('.Gold').remove();
        Obj();
        UserCoin+=1;
        document.getElementById("UserCoin").innerHTML = UserCoin;
       }
})

document.getElementById("Left").addEventListener("click", function () {
    if(PlaceRight >-180){
         PlaceRight-=10;
         UserRight-=10;
         document.getElementById("Place").style.right = PlaceRight+"px";
         document.getElementById("User").style.left = UserRight+"px";
         document.getElementById("User").style.backgroundImage = "url(LeftMove.gif)";
         console.log(UserRight+"User - X");
         console.log(CoinRight+ "Coine - X");
     }
     if(UserTop == CoineTop && UserRight == CoinRight){
        document.querySelector('.Gold').remove();
        Obj();
        UserCoin+=1;
        document.getElementById("UserCoin").innerHTML = UserCoin;
       }
 })




 

//38