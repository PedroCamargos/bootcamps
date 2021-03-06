async function myfunction() {
    console.log('Dentro da minha função');
  }

  // Here we wait for the myfunction to finish
  // and then returns a promise that'll be waited for aswell
  // It's useless to wait the myfunction to finish before to return
  // we can simply returns a promise that will be resolved later
  
  // Also point that we don't use async keyword on the function because
  // we can simply returns the promise returned by myfunction
  function start() {
    return myfunction();
  }
  
  // Call start
  (async() => {
    console.log('Após minha função');
  
    await start();
    
    console.log('Depois do Start');
  })();