# 2.0前端开发文档
2.0前端项目是基于`Vue`、`Element-UI`、`Echarts`、`Lodash`、`Moment`，使用`webpack`对代码进行打包编译。项目使用了`ES6`和`Vue`的语法，最终经过打包工具，打包成浏览器可使用的代码。

## 安装环境

### 安装nodejs
`nodejs`下载地址<https://nodejs.org/en/>，选择`LTS`稳定版本进行下载，默认选项安装即可。

### 前端编辑器
`vscode`下载地址<https://code.visualstudio.com/>，选择默认安装即可。


## 项目运行

### 下载依赖包
```bash
npm install
```

### 启动项目
```bash
npm run serve
```
项目运行在`http://localhost:8080/`。端口号可以通过`vue.config.js`的`port`修改，默认是`8080`

## 项目结构

### 目录
```bash
├── babel.config.js
├── dist
|  ├── css
|  ├── favicon.ico
|  ├── fonts
|  ├── index.html
|  └── js
├── gulpfile.js
├── package.json
├── proxy.config.js
├── public
|  ├── favicon.ico
|  └── index.html
├── README.md
├── src
|  ├── api
|  ├── App.vue
|  ├── assets
|  ├── axios.config.js
|  ├── components
|  ├── lib
|  ├── main.js
|  ├── router
|  ├── store
|  └── views
├── vue.config.js
└── yarn.lock
```

### 说明
+ `src` 源文件
    + `views` 页面文件
    + `router` 路由配置
    + `store` vuex状态管理
    + `components` 组件
    + `lib` 函数库、公共工具
    + `assets` 静态文件css,image,fonts
    + `api` 接口配置
+ `dist` 编译后的文件
+ `proxy.config.js` 接口代理地址
+ `vue.config.js` webpack配置

## ES6常用的语法
### 变量声明const和let
```js
const a = 1;  // 常量，不能修改
let b = 1;    // 变量，作用于块级

a = 2;    // 报错：不能修改常量
b = 2;    // 2
```

### 箭头函数
```js
// ES5
function foo() {
  ...
}

// ES6
const foo = () => {
  ...
}
```
实例，可以省略`return`
```js
[1,2,3].map(x => x + 1)

// 等价于
[1,2,3].map(function() {
  return x + 1;
})
```

### import 和 export
```js
import foo from './foo.js';
import { aaa } from './foo.js';
```

```js
// foo对象
const foo = {
  ...
};

// 默认导出
export default foo;

// 命名导出
export const aaa = 123;
```

### 拓展的对象功能
```js
let a = 1;
let b = 2;

// 键值对写法
const foo = {
  a: a,
  b: b
}
// 等价于
const foo = {
  a,
  b
}
```

### 字符串
```js
let name = 'World';
// ES5
console.log('Hello ' + name);
// ES6
console.log(`Hello ${name}`);
```

## Vue常用的语法

### 条件渲染
v-if
```html
<h1 v-if="ok">Yes</h1>
```

### 列表渲染
用 v-for 把一个数组对应为一组元素
```html
<ul id="example-1">
  <li v-for="item in items">
    {{ item.message }}
  </li>
</ul>
```

```js
var example1 = new Vue({
  el: '#example-1',
  data: {
    items: [
      { message: 'Foo' },
      { message: 'Bar' }
    ]
  }
})
```

### 标签表达式
```html
<!-- vue -->
<div :class="className"></div>

<!-- 渲染结果 -->
<div class="box"></div>
```

```js
export default {
  data() {
    return {
      className: 'box'
    }
  }
}
```

### 绑定事件
```html
<button @click="handleClick">Click</button>
```

```js
export default {
  methods: {
    handleClick(e) {
      console.log('事件对象', e)
    }
  }
}
```

## 常用的组件

### Button 按钮
```html
<el-row>
  <el-button>默认按钮</el-button>
  <el-button type="primary">主要按钮</el-button>
  <el-button type="success">成功按钮</el-button>
  <el-button type="info">信息按钮</el-button>
  <el-button type="warning">警告按钮</el-button>
  <el-button type="danger">危险按钮</el-button>
</el-row>
```

### Input 输入框
```html
<el-input v-model="input" placeholder="请输入内容"></el-input>
```

### Select 选择器
```html
<el-select v-model="value" placeholder="请选择">
  <el-option label="选项一" value="1"></el-option>
  <el-option label="选项二" value="2"></el-option>
</el-select>
```

### Checkbox 多选框
```html
<el-checkbox v-model="checked">备选项</el-checkbox>
```

### Table 表格
```html
<el-table
  :data="tableData"
  style="width: 100%">
  <el-table-column
    prop="date"
    label="日期"
    width="180">
  </el-table-column>
  <el-table-column
    prop="name"
    label="姓名"
    width="180">
  </el-table-column>
  <el-table-column
    prop="address"
    label="地址">
  </el-table-column>
</el-table>
```

```js
export default {
  data() {
    return {
      tableData: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      }]
    }
  }
}
```

## 学习资料
+ [ES6语法学习](http://es6.ruanyifeng.com/)
+ [Sass语法学习](https://www.sass.hk/docs/)
+ [Vue中文官网](https://cn.vuejs.org/index.html)
+ [ElementUI组件](http://element-cn.eleme.io/#/zh-CN/component/installation)
+ [Echarts官网实例](http://echarts.baidu.com/examples/)
+ [Lodash实用工具库](https://lodash.com/)
+ [Moment日期处理类库](http://momentjs.com)
