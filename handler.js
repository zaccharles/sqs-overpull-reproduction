'use strict';

module.exports.test = async (event) => {
  await sleep(5000);
  return { message: 'Your function executed successfully!', event };
};

function sleep(ms){
  return new Promise(resolve=>{
      setTimeout(resolve,ms)
  })
}
