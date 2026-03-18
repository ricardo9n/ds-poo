const doSomething = () => console.log('test');
const measureDoingSomething = () => {
  console.time();
  // do something, and measure the time it takes
  doSomething();
  console.timeEnd();
};
measureDoingSomething();