console.log("这是一个演习，不要紧张");
require.config ({
    paths:{
        clockjs:"index",
      
    }
})
require(['clockjs'],function(clockrun){
    clockrun.clockjs();
    
})