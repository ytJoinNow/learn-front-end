
const isType = type => target => `[object ${type}]` === Object.prototype.toString.call(target);
// const isType = type => {target => {console.log(target,'***')};console.log(type,'///')};

const isNull = isType('Null');
const isString = isType('String');
const isNumber = isType('Number');
const isObject = isType('Object');

console.log(isNull(null),'null')
console.log(isString('ASDASD'),'string')
console.log(isNumber(2),'number')
console.log(isObject({'KEY':'SOME'}),'object')

/** 利用回调函数将执行的函数回调指针指向新的函数名称实现由基础类到实际类的转化 **/
/** ES6的isNumber底层大概就是由这个写法完成的，主要是target这个变量的转向比较有意思，isType函数的定义被传入参数以后构成了新的回调函数，形成了具体判断某个类型的函数 **/