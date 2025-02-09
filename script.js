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

    let FantomCoin = document.createElement("div");
    FantomCoin.className = "FantomCoin";
    FantomCoin.style.top = (CONST-CoineTop)/10 + "px";
    FantomCoin.style.right = (10+CONST2-CoinRight)/10 + "px";
    document.getElementById("map").appendChild(FantomCoin);
    return Gold;
}
setTimeout(Obj,1000);

function Indicator(){
    if(UserRight-CoinRight>100 || UserRight-CoinRight<100){
        console.log("You found the coin!");
    }
}

document.getElementById("Up").addEventListener("click", function () {
    Indicator();
    if(PlaceTop < 460){
        PlaceTop +=10;
        UserTop+=10;
        document.getElementById("Place").style.top = PlaceTop+"px";
        document.getElementById("User").style.bottom = UserTop+"px";
        document.getElementById("FantomUser").style.top = -(UserTop)/10 + "px";
        console.log(UserTop+"User - Y");
        console.log(CoineTop+ "Coine - Y");
    }
    if(UserTop == CoineTop && UserRight == CoinRight){
        document.querySelector('.Gold').remove();
        document.querySelector('.FantomCoin').remove();
        Obj();
        UserCoin+=1;
        document.getElementById("UserCoin").innerHTML = UserCoin;
       }
})

document.getElementById("Down").addEventListener("click", function () {
    Indicator();
    if(PlaceTop > -410){
        PlaceTop -=10;
        UserTop-=10;
        document.getElementById("Place").style.top = PlaceTop+"px";
        document.getElementById("User").style.bottom = UserTop+"px";
        document.getElementById("FantomUser").style.top = -(UserTop)/10 + "px";
        console.log(UserTop+"User - Y");
        console.log(CoineTop+ "Coine - Y");
    }
    if(UserTop == CoineTop && UserRight == CoinRight){
     document.querySelector('.Gold').remove();
     document.querySelector('.FantomCoin').remove();
     Obj();
     UserCoin+=1;
    document.getElementById("UserCoin").innerHTML = UserCoin;
    }
})

document.getElementById("Right").addEventListener("click", function () {
    Indicator();
   if(PlaceRight <180){
        PlaceRight+=10;
        UserRight+=10;
        document.getElementById("Place").style.right = PlaceRight+"px";
        document.getElementById("User").style.left = UserRight+"px";
        document.getElementById("User").style.backgroundImage = "url(RightMove.gif)";
        document.getElementById("FantomUser").style.right = -(UserRight)/10 + "px";
        console.log(UserRight+"User - X");
        console.log(CoinRight+ "Coine - X");
    }
    if(UserTop == CoineTop  && UserRight == CoinRight){
        document.querySelector('.Gold').remove();
        document.querySelector('.FantomCoin').remove();
        Obj();
        UserCoin+=1;
        document.getElementById("UserCoin").innerHTML = UserCoin;
       }
})

document.getElementById("Left").addEventListener("click", function () {
    Indicator();
    if(PlaceRight >-180){
         PlaceRight-=10;
         UserRight-=10;
         document.getElementById("Place").style.right = PlaceRight+"px";
         document.getElementById("User").style.left = UserRight+"px";
         document.getElementById("User").style.backgroundImage = "url(LeftMove.gif)";
         document.getElementById("FantomUser").style.right = -(UserRight)/10 + "px";
         console.log(UserRight+"User - X");
         console.log(CoinRight+ "Coine - X");
     }
     if(UserTop == CoineTop && UserRight == CoinRight){
        document.querySelector('.Gold').remove();
        document.querySelector('.FantomCoin').remove();
        Obj();
        UserCoin+=1;
        document.getElementById("UserCoin").innerHTML = UserCoin;
       }
 })




//var ConrollerX = 0;
//var ConrollerY = 0;
//let Jostick = document.getElementById("Manipulatar");
//var isMouseDown = false;

//document.getElementById("Controller").addEventListener('mousemove',log);
//   
//function log(e){
//    ClientX = e.clientX;
//    ClientY = e.clientY;
//    console.log(ClientX+" "+ClientY);
//}
//
//document.getElementById("Controller").addEventListener('mousedown',()=>{
//    document.body.onmousedown = function() { isMouseDown = true; }
//    document.getElementById("Controller").addEventListener('mousemove',()=>{
//        document.body.onmouseup = function() { isMouseDown = false};
//        if(isMouseDown){
//            if(ClientX < 250  && ClientX > 100 && ClientY > 420  && ClientY < 620){
//                Jostick.style.left = ClientX - 180 + "px"; 
//                Jostick.style.top = ClientY -540 + "px";
//                if(ClientX>230){
//                    Indicator();
//                       if(PlaceRight <180){
//                            PlaceRight+=0.2;
//                            UserRight+=0.2;
//                            document.getElementById("Place").style.right = PlaceRight+"px";
//                            document.getElementById("User").style.left = UserRight+"px";
//                            document.getElementById("User").style.backgroundImage = "url(RightMove.gif)";
//                            document.getElementById("FantomUser").style.right = -(UserRight)/10 + "px";
//                            console.log(UserRight+"User - X");
//                            console.log(CoinRight+ "Coine - X");
//                        }
//                        if(UserTop == CoineTop  && UserRight == CoinRight){
//                            document.querySelector('.Gold').remove();
//                            document.querySelector('.FantomCoin').remove();
//                            Obj();
//                            UserCoin+=1;
//                            document.getElementById("UserCoin").innerHTML = UserCoin;
//                           }
//                }
//                if(ClientX< 140){
//                    Indicator();
//                    if(PlaceRight >-180){
//                         PlaceRight-=0.2;
//                         UserRight-=0.2;
//                         document.getElementById("Place").style.right = PlaceRight+"px";
//                         document.getElementById("User").style.left = UserRight+"px";
//                         document.getElementById("User").style.backgroundImage = "url(LeftMove.gif)";
//                         document.getElementById("FantomUser").style.right = -(UserRight)/10 + "px";
//                         console.log(UserRight+"User - X");
//                         console.log(CoinRight+ "Coine - X");
//                     }
//                     if(UserTop == CoineTop && UserRight == CoinRight){
//                        document.querySelector('.Gold').remove();
//                        document.querySelector('.FantomCoin').remove();
//                        Obj();
//                        UserCoin+=1;
//                        document.getElementById("UserCoin").innerHTML = UserCoin;
//                       }
//                }
//                if(ClientY<450){
//                    Indicator();
//                    if(PlaceTop < 460){
//                        PlaceTop +=0.2;
//                        UserTop+=0.2;
//                        document.getElementById("Place").style.top = PlaceTop+"px";
//                        document.getElementById("User").style.bottom = UserTop+"px";
//                        document.getElementById("FantomUser").style.top = -(UserTop)/10 + "px";
//                        console.log(UserTop+"User - Y");
//                        console.log(CoineTop+ "Coine - Y");
//                    }
//                    if(UserTop == CoineTop && UserRight == CoinRight){
//                        document.querySelector('.Gold').remove();
//                        document.querySelector('.FantomCoin').remove();
//                        Obj();
//                        UserCoin+=1;
//                        document.getElementById("UserCoin").innerHTML = UserCoin;
//                       }
//
//                }
//                if(ClientY>550){
//                    Indicator();
//                    if(PlaceTop > -410){
//                        PlaceTop -=0.2;
//                        UserTop-=0.2;
//                        document.getElementById("Place").style.top = PlaceTop+"px";
//                        document.getElementById("User").style.bottom = UserTop+"px";
//                        document.getElementById("FantomUser").style.top = -(UserTop)/10 + "px";
//                        console.log(UserTop+"User - Y");
//                        console.log(CoineTop+ "Coine - Y");
//                    }
//                    if(UserTop == CoineTop && UserRight == CoinRight){
//                     document.querySelector('.Gold').remove();
//                     document.querySelector('.FantomCoin').remove();
//                     Obj();
//                     UserCoin+=1;
//                    document.getElementById("UserCoin").innerHTML = UserCoin;
//                    }
//                }
//                
//              }
//        }
//        else{
//            Jostick.style.left = 0 + "px";
//            Jostick.style.top = 0 + "px";
//        }
//       
//    })
//});