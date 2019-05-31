const selfMap = function (fn,context) {
    let arr = Array.prototype.slice.call(this);
    let mappedArr = [];
    for (let i = 0; i < arr.length; i++) {
        mappedArr.push(fn.call(context,arr[i],i,this))
    }

    return mappedArr;
}

// let arr = [1,4,9,16,25];
// let some = arr.map(Math.sqrt);
// console.log(some,arr);

/**
 * Array.prototype.slice.call()可以将具有length属性的对象或者类数组对象转化为数组的形式，但是对于IE下边的dom结构不能转化，因为IE下的dom结构是由com对象存储的，而此方法不能转化com对象
 */
