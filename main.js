window.onload=function() {
    var canvas = document.getElementById("canvas"),
    ctx = canvas.getContext("2d"),
    width = canvas.width = window.innerWidth,
    height = canvas.height = window.innerHeight;

    var centerX = width / 2,
    centerY = height / 2,
    xRadius = 200,
    yRadius = 200,
    xangle = 4,
    yangle = 4,
    xspeed = 0.12,
    yspeed = 0.12,
    x,y,
    fps=0.0,start_time=performance.now(),frames=0;
    
   render();    

    function render() {        
        x = centerX + Math.cos(xangle) * xRadius, 
        y = centerY + Math.sin(yangle) * yRadius;        
        ctx.fillStyle = "gray";
        ctx.fillRect(0,0,width,height);
        ctx.beginPath();
        ctx.arc(x,y,20,0,Math.PI * 2,false);
        ctx.fillStyle="orange";
        ctx.fill();
        xangle += xspeed;
        yangle += yspeed;            
        ctx.font = "26px serif";
        ctx.fillStyle = "red";        
        ctx.fillText("FPS : " + fps,10,26);
        total_time = performance.now() - start_time;        
        frames++;
        if (total_time>999) 
        {            
            fps = frames;
            frames = 0; start_time = performance.now();
        }              
        requestAnimationFrame(render);        
    }
};