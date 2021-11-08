// myvar.js 불러와서 콘솔에 a 출력해보세요.
const rst = require('./myvar')
console.log(rst.a)

const stu = new rst()
console.log(stu.name)
console.log(stu.hello)