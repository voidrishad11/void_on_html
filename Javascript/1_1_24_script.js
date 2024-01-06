function hello()
{
    let x,y,z;
    x= 5; 
    y = 10;
    z = x + y;
    console.log("Hello there!");
    console.log("Sum of x and y is ",z);
}
function printmessage(message,times)
{
    for(var i = 0; i<times; i++)
    {
        console.log(message);
    }
}
hello();
printmessage("Siiiuuu",10)