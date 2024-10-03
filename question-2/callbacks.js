const resolvedPromise = () => new Promise((resolve) => {
    setTimeout(() => {
        let success = {"message": 'delayed success!'}
      resolve(success);
    }, 500);
  });

const rejectedPromise = () => new Promise((_, reject) => {
    setTimeout(() => {
        let error = {"error": 'delayed exception!'}
        reject(error);
    }, 500);    
});  
resolvedPromise().then((result) => {
    console.log(result);
});
rejectedPromise().catch((result) => {
    console.log(result);
});

resolvedPromise()
rejectedPromise()


  