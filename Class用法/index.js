// function inherit(subType,superType) {
//     subType.prototype = Object.create(subType.prototype,{
//         constructor:{
//             enumerable:false,
//             configurable:true,
//             writeable:true,
//             value:superType.constructor
//         }
//     })

//     Object.setPrototypeOf(subType,superType)
// }

function Point(x,y){
    this.x = x;
    this.y = y;
}

let obj = {};

console.log(Point.prototype);
