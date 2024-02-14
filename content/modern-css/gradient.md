---
title: "gradient"
description: "gradient, css3, 现代css"
date: 2024-02-14
slug: "gradient"
---

相关参考链接：[MDN](https://developer.mozilla.org/zh-CN/docs/Web/CSS/gradient/linear-gradient){class="font-bold mt-4 block" :target="\_blank"}

工具：[uigradients](https://uigradients.com/#Lunada){class="font-bold mt-4 block" :target="\_blank"}

<br />
渐变的本质是图像而不是颜色，这意味着只要能引入图像的地方就可以使用渐变

## 一、线性渐变 linear-gradient

基本语法：linear-gradient(渐变方向，颜色 1 变化区间，颜色 2 渐变区间， ...颜色 n 变化区间);

渐变方向：

- 关键字：to + 方向（top, bottom, right, left）
- 角度：50deg
- 默认值：自上而下，to bottom，180deg

变化区间

- 一个值：作为颜色变化的边界
- 两个值：作为区间的开始以及终止

重复线性渐变：repeating-linear-gradient()

注意：渐变区间的大小指的是在渐变方向的

```css
.g {
  /* 渐变 红色从像素0开始，蓝色从像素80px开始 */
  background: linear-gradient(red 0px, blue 80px, green);
  /* 通过两个值指定像素区间，这时候只会有明确颜色，没有渐变, 也就是说，只有一个值时有渐变，两个值没有渐变 */
  background: linear-gradient(red 0px 30px, blue 30px 50px, green 50px 80px);
}
```

<br />
【demo 1】可以通过渐变实现背景格子

```css
.gradient-test {
  width: 200px;
  height: 100px;
  background-image: repeating-linear-gradient(
      transparent 0px 10px,
      rgb(230, 232, 233) 10px 12px
    ), repeating-linear-gradient(90deg, transparent 0px 10px, rgb(
          230,
          232,
          233
        ) 10px 12px);
}
```

::demoEffect
::

::gradient-bg
::

<br />
【demo 2】给 border 加渐变

```css
.box {
  width: 300px;
  height: 150px;
  border: 10px solid;
  border-image: repeating-linear-gradient(
      45deg,
      transparent 0 10px,
      skyblue 10px 20px
    ) 20;
}
```

::demoEffect
::

::gradient-border
::

<br />
<br />

## 二、径向渐变 radial-gradient

基本语法：radial-gradient(形状 半径大小 at 原点位置，渐变颜色 1 边界，渐变颜色 2 边界，...，渐变颜色 n，边界 n)

位置：

- at + background-position 的属性值
- at + 关键字：center（默认值）top left right bottom，可组合
- at + 位置：at 0 0，at left 0 top 20px

半径大小：

- 一个值：以圆的方式
- 两个值：以椭圆的方式
- 关键字：

<br />

| 关键字          | 描述                                         |
| --------------- | -------------------------------------------- |
| closet-side     | 渐变中心距离容器最近的边作为终止位置         |
| closet-corner   | 渐变中心距离容器最近的角作为终止位置         |
| farthest-side   | 渐变中心距离容器最远的边作为终止位置         |
| farthest-corner | 默认值，渐变中心距离容器最远的角作为终止位置 |

<br />
【demo】重复渐变

```css
.box {
  width: 300px;
  height: 300px;
  margin: 0 auto;
  background-image: repeating-radial-gradient(skyblue 0 10px, #fff 10px 20px);
}
```

::demoEffect
::

::radial-gradient
::
