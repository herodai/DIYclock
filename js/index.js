define(
   function() {   
  
        function secfun(){
            var osec=document.getElementById("sec");
            setInterval(function(){
                var d= new Date();
                var second=d.getSeconds();
                osec.style.webkitTransform = "rotate("+second*6+"deg)";
                osec.style.webkitTransformOrigin=  "bottom center";
        
                var omin=document.getElementById("min");
               
                    var d= new Date();
                    var minus=d.getMinutes();
                    var minuso=minus*6+parseInt(second/10);
                    //alert(minus); output int 7
                    omin.style.webkitTransform = "rotate("+minuso+"deg)";
                    omin.style.webkitTransformOrigin=  "bottom center";
        
                    var omin=document.getElementById("hour");
               
                    var d= new Date();
                    var hr=d.getHours();
                    var ohr=hr*30+parseInt(minus/2)
                    //alert(ohr); output int 12
                  
                       
                    hour.style.webkitTransform ="rotate("+ohr+"deg)";
                    hour.style.webkitTransformOrigin=  "bottom center";
            }
            
            ,1000)
               
              
        }
        
    
    return{
        clockjs:secfun
    }
    
});


