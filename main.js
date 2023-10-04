window.onload=function() {
    var canvas = document.getElementById("canvas"),
    context = canvas.getContext("2d"),
    width = canvas.width = window.innerWidth,
    height = canvas.height = window.innerHeight;

    var centerX = width / 2,
    centerY = height / 2,
    xRadius = 300,
    yRadius = 300,
    xangle = 4,
    yangle = 4,
    xspeed = 0.04,
    yspeed = 0.04,
    x,y;

    render();

    function render() {
        
        x = centerX + Math.cos(xangle) * xRadius, 
        y = centerY + Math.sin(yangle) * yRadius;
        
        context.fillStyle = "deepskyblue";
        context.fillRect(0,0,width,height);
        context.beginPath();
        context.arc(x,y,25,0,Math.PI * 2,false);
        context.fillStyle="yellow";
        context.fill();
        xangle += xspeed;
        yangle += yspeed;
        requestAnimationFrame(render);
    }
};