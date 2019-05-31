//1.
// const selfReduce = function (fn,initialValue) {
//     let arr = Array.prototype.slice.call(this);
//     if(initialValue) arr.unshift(initialValue);
//     let res = arr[0];
//     for (let i = 0; i < arr.length; i++) {
//         if(!arr.hasOwnProperty(i+1))continue

//         res = fn.call(
//             null,
//             res,
//             arr[i+1],
//             initialValue == undefined?i+1:i,
//             arr
//         )
//     }
//     return res;

// }

// let arr = [1,2,3,4];
// let some = arr.reduce((item,num)=>item+num);
// console.log(some);

/**
 * Array.prototype.slice.call()可以将具有length属性的对象或者类数组对象转化为数组的形式，但是对于IE下边的dom结构不能转化，因为IE下的dom结构是由com对象存储的，而此方法不能转化com对象
 * 学习fn.call()的方法，顺便补充apply和bind的方法用例，对比学习三者的不同点和相同点，fn.call(this,arg1,arg2,arg3...)是其基本调用方式，第一个参数可以控制函数的执行对象指针，第二个及之后可以控制回调执行此函数的时候的参数
 * 对比之下与apply的不同之处在于参数形式的不同fn.apply(this,[arg1,arg2,arg3...])，可以看出apply的用法中，所有参数在第二位是以一个数组的形式出现的。fn.bind(this[,arg1[,arg2[,arg3[...]]]])是一个更有意思的函数，bind一般常用的
 * 场景是只使用第一个this，此时会对原fn函数绑定this执行的指针对象，修改函数执行的上下文对象，而之后的函数参数作为fn的默认参数（**注意此参数会执行参数占位，之后传入的参数是作为后续参数拼接在之后的内容中的）
 * /

//2.
// function fun1 (){
//     console.log(1,'===')
// }

// function fun2 (){
//     console.log(2,'***')
// }


// fun1.call(null) //1 ===
// fun1.call.call(fun2) //2 ***

/**
 * fun1.call(fun2)绑定fun2为执行的this指针，但是执行的仍然是fun1函数，所以输出还是1
 * fun1.call.call(fun2)在研究call的实现原理之后，知道call()执行的时候其实是将fun2作为函数调用的上下文对象，也就是
 * fun1.call = fun2.call,然后执行fun1.call()其实就是fun2.call(),因为call执行的时候没有参数，所以默认window为指针调用对象，执行的是window.fun2()()
 * 参考地址：https://www.cnblogs.com/donghezi/p/9742778.html
 * /