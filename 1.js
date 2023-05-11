const ball = document.querySelector(".ball");
let aheadPosition = 0;
let topPosition = 0;
let i = 1;
let w = window.innerWidth;
let h = window.innerHeight;
let topMove = "top";
function throwBall(){
    const loopBall = setInterval(()=>{        
        if(topMove === "top"){
            if(topPosition >= h){
               topMove = "bottom";
                i++;
                h = h- (Math.floor(h/i));
            }
            else{
                aheadPosition = aheadPosition + 10;               
                ball.style.left = aheadPosition + "px"; 
                ball.style.top = topPosition + "px";
                topPosition = topPosition + 20;
            }
        }
        else{
            if(topPosition >= h){
                ball.style.top = topPosition + "px";
                topPosition = topPosition - 20;  
                aheadPosition = aheadPosition +5;               
                ball.style.left = aheadPosition + "px"; 
            }
            else{
                topMove = "top";   
                h = window.innerHeight;
            }
        }
        if(aheadPosition >= w){
            clearInterval(loopBall);
        }
    },100);   
}

throwBall();
