{

 // asynchronous 
// promise 

const promise: Promise<string> = new Promise((resolve, reject) => {
    const data: string = "data"; // Corrected: Initialized data as a string
    setTimeout(() => {
        resolve(data);
    }, 1000); // Corrected: Added a timeout value (in milliseconds)
});

// calling create promise function 

const showDataPromise = async () => { // Corrected: Removed extra parentheses after async
    const data: string = await promise; // Corrected: Removed extra parentheses after promise
    console.log(data);
}

showDataPromise(); // Corrected: Added missing function call

    
    }