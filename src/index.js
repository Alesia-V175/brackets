module.exports = function check(str, bracketsConfig) {
    const string = str;
    const brackets = bracketsConfig;
    let arr = [];
    let obj = {};

    for (let i = 0; i < brackets.length; i++) {
        let key = brackets[i][1];
        let value = brackets[i][0];
        arr.push(value);
        obj[key] = value;
    }

   let result = [];
   for (let i = 0; i < string.length; i++) {
       let currentValue = string[i];
       let endValue = result[result.length - 1];
       if (currentValue === endValue && currentValue === obj[currentValue]) {
           result.pop();
       } else if (arr.includes(currentValue)) {
           result.push(currentValue);
       } else {
           if (result.length === 0) {
               return false;
           }
            if (obj[currentValue] === endValue) {
                result.pop();
            }
       }
   }
   if (result.length === 0) {
       return true;
   } else {
       return false;
   }
}
