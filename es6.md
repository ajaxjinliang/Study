##变量
* let
1、 声明变量
2、 重复声明
3、 支持块级作用域
4、 const
5、 声明常量
6、 禁止重复声明
7、 支持块级作用域
##解构赋值
```
let {a, b , c} = {a:12, b:13, c:15}
let [a, b, c] = [12, 13, 45]
```
##函数
* 箭头函数
```
(参数)=>{}
如果，有且仅有一个参数可以省略括号
如果，函数体语句有且仅有一个可以省略大括号
修复this对象
```
* 参数展开
```
1 剩余参数
function show(a, b, ...arr){}
2 展开数组
```
##系统对象
* Array

1、map(映射)
```
let arr = [1,2,3,4,5];
1,2,3,4,5
let res = arr.map(item => item>=3)
false,false,true,true,true
```
2、forEach(遍历)
3、filter(过滤)
```
let arr = [1,2,3,4,5,6];
let arr2 = arr.filter(item => item%2==0)
2,4,6
```
4、reduce(减少)
```
let arr = [1,2,3,4,5]
let arr2 = arr.reduce((tmp, item) => {
  return tem+item
})
求值，求平均数
```
* String

1、字符串模板(``)
2、startsWith
2、endsWith
* JSON

1、{"a":"b", "c":2} (标准写法)
2、json对象(JSON.stringify(obj), JSON.parse(str))
##异步处理
* Promise
* Promise.all([请求，请求 ]).then(([data1, data2]) => {},(res) => {})
```
Prominse.all([
  请求,
  请求,
  请求
]).then(([data1, data2, data3])=>{
  console.log(data1, data2, data3);
}, (res)=>{
  console.log("出错")
})
如果第二个请求的需要第一个请求的结果，这个就用不了
```
* async/await
```
async function show(){
  let data1 = await 请求
  let data2 = await 请求
  let data3 = await 请求
  打印出 data1, data2, data3的顺序
}
```

