const ctx = document.getElementById("canvas").getContext("2d");

ctx.globalCompositeOperation = "destination-over";
ctx.clearRect(0, 0, 800, 600); // clear canvas
