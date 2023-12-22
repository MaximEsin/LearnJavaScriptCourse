new Promise(function (resolve, reject) {
  setTimeout(() => {
    throw new Error("Whoops!");
  }, 1000);
}).catch(alert); // Catch wont run, because the error is thrown in the setTimeout function, which is outside the promise
