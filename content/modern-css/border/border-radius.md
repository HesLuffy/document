---
title: "border radius"
description: "border radius, css3, 现代css"
date: 2024-02-12
slug: "border-radius"
---

> border-radius 是一个很常用到的 css3 的一个属性，大多直接用来将一个元素设置为圆形或者四边同值圆角。

### 第一种写法

border-radius: 左上，右上，右下，左下

```css
.box {
  width: 100px;
  height: 100px;
  background-color: pink;
  border-radius: 50%;
}
```

### 第二种写法

border-top-left-radius: 30px;
<br />
border-top-left-radius: 30px 40px;
<br />
这种写法的意思是：水平半径 垂直半径
<br />
具体玩法可以看下面 MDN 提供的工具：

[圆角生成器](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_backgrounds_and_borders/Border-radius_generator){class="text-[pink] mt-4 block" :target="\_blank"}

**border-radius 的值不能大于 width**
