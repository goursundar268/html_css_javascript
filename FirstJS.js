async function AsynchronousFunction() {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res("Success")
        }, 4000);
    })

}

console.log("Hello World");
setTimeout(() => {
    console.log("Under SetTimeout");

}, 3000);


let Function_Call = async () => {
    let Result = await AsynchronousFunction()
    console.log(Result);
    console.log("Hello World Again");

}
Function_Call()

