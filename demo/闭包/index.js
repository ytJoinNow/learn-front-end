function addSomeThing() {
    let count = 0;
    var add = function() {
        count = count+1;
        return count;
    }

    return add;
}

const increment = addSomeThing();
const c1 = increment();
const c2 = increment();
const c3 = increment();

console.log(c1,'first');
console.log(c2,'second');
console.log(c3,'third');

console.log(c1,c2,c3,'value');


/**
 * 闭包是首次返回函数调用，其次返回局部变量
 * 
 */