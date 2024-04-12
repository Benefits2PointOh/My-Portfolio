var img = document.getElementById('img');
var slides = ['/ticTactoe2.JPG','/ticTactoe3.jpg','/ticTactoe4.JPG'];
var Start=0;
function slider(){
    if(Start<slides.length){
         Start=Start+1;
    }else{
        Start=1;
    }                    
    console.log(img);
    img.innerHTML = "<img src="+slides[Start-1]+">";                    
    }
    setInterval(slider,1000);
                                        