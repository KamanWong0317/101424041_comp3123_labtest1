var lowerCaseWords = arr => {
    let newArr = []
    const thePromise = new Promise((resolve, reject) => {
        // Check if input is an array
        if (!Array.isArray(arr)) {
            return reject("Please input an array");
        }
        // run all array data
        for (var i = 0; i<arr.length; i++){
            // check data is string
            if(typeof arr[i] === "string"){
                newArr.push(arr[i].toLowerCase());}
        }
        resolve(newArr); 
    });   
    thePromise.then((newArr)=>{
        console.log(newArr);
    })
    .catch((error)=> {
        console.error(error);
    })
}

const mixedArray = ['PIZZA', 10, true, 25, false, 'Wings'];
lowerCaseWords(mixedArray)