promise.then(f1).catch(f2); // Error will be caught here
promise.then(f1, f2); // f1 has no error handlers
