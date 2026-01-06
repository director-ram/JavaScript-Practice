// export function getMessage(){
//     return `this message was exported to script9.js`;
// }



// ---synchronous & asynchronous---

// synchronous = Executes line by line consecutively in a sequential manner
//  code that waits for an operation to complete.

// asynchronous = Allows multiple operations to be performed concurrently without waiting
//  Doesnt block the execution flow and allows the program to continue(I/O operations, network requests, fetching data)
// Handled with callbacks, Promises, async/await

function func1(callback){
    setTimeout(() => {console.log(`hello, this is executed first, Task 1`)
        callback();
    }, 5000)
}

function func2(){
    console.log(`Task 2`);
    console.log(`Task 3`);
    console.log(`Task 4`);
}

func1(func2);



// ---Error Handling---
// An object that is created to represent a problem that occurs often with user input or establishing a connection.
// try{} = Encloses code that might have potentially cause an error
// catch {} = Catch and handle any thrown errors from try{}
// finally {} = (optional) Always executs. used mostly for clean up.

const dividend = Number(window.prompt("Enter a dividend: "));
const divisor = Number(window.prompt("Enter a divisor: "));

try{
    if(divisor == 0){
        throw new Error("You cant divide with Zero!!");
    }

    if(isNaN(dividend) || isNaN(divisor)){
        throw new Error("Enter only numbers.... you MF");
    }

    const result = dividend / divisor;
    console.log(result);
    window.alert(`The answer is ${result.toFixed(2)}`);
}
catch(error){
    console.error(error);
    window.alert(error);
}
finally{
    console.log("The program has been executed successfully!!");
}

