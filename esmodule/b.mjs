// b.mjs
import {foo} from './a.mjs';
console.log('b.mjs');
setTimeout(() => {
  console.log(foo());
})
function bar() { return 'bar' }
export {bar};