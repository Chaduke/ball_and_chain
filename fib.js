// fibonacci sequence

console.clear();
fib();

function fib()
{
output = "Fibonacci Sequence\n--------- --------\n";

s1 = 0; s2 = 1; 
var s3,i;

for (i = s1; i<30; i++)
{
  s3 = s2 + s1;    
  output +=s3 + ",";
  s1 = s2; s2 = s3;
}
output = output.substr(0,output.length - 1) + ".\n";
output += "Sequence length: " + i;
console.info(output);
} 

