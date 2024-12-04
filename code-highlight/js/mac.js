// 使用可选链操作符(?.)来防止如果没有找到对应id的元素时导致的错误
const container = document?.getElementById('container');

// 在容器内找到所有的<pre>元素，这些元素通常用于展示代码
const codeBlocks = container?.getElementsByTagName('pre'); 

// 将类数组对象转为数组，并遍历这些<pre>元素
Array.from(codeBlocks).forEach(item => {
  // 设置样式whiteSpace为'pre-wrap'，使得长代码可以换行显示而不是出现滚动条
  item.style.whiteSpace = 'pre-wrap';

  // 创建一个新元素<div>，用于添加Mac风格的代码块装饰
  const preMac = document.createElement('div');

  // 给新创建的<div>添加类名'pre-mac'
  preMac.classList.add('pre-mac');

  // 设置这个<div>的内部HTML，插入3个空的<span>，这些可能是装饰按钮
  preMac.innerHTML = '<span></span><span></span><span></span>';

  // 将新创建的装饰性<div>元素插入到当前<pre>元素的前面
  item.parentElement.insertBefore(preMac, item);
});