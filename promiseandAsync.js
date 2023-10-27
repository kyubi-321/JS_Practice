// Using Promises
someAsyncFunction()
  .then(result => {
    return anotherAsyncFunction(result);
  })
  .then(finalResult => {
    console.log(finalResult);
  })
  .catch(error => {
    console.error(error);
  });

// Using Async/Await
async function doAsyncWork() {
  try {
    const result = await someAsyncFunction();
    const finalResult = await anotherAsyncFunction(result);
    console.log(finalResult);
  } catch (error) {
    console.error(error);
  }
}
