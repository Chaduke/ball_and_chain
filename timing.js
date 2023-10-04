// timing and random numbers

var i = 1;
var s = setInterval(print_time,100);
let startTime = performance.now();
var t=0;
while (t<100000000) t++;
let endTime = performance.now();
let timeElapsed = endTime - startTime;
console.clear();
console.log("Milliseconds to count: " + timeElapsed + "\n");

function print_time() 
{       
    console.log("Interval:" + i + "\tRandom float:" + Math.random() * 50 + "\t\tRandom Int:" + getRandomInt(50));
    i++;
    if (i>10) clearInterval(s);
}

function getRandomInt(max) 
{
    return Math.floor(Math.random() * max);
}