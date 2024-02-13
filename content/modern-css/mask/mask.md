## css 遮罩

可以让一个元素按照某张图像的轮廓显示。其实就是把原来的部分内容遮盖起来，按照给定的形状显示。

有以下的属性值

- mask-image
- mask-mode
- mask-repeat
- mask-position
- mask-clip
- mask-origin
- mask-size
- mask-composite

### mask-image

用于定义一个元素的蒙版图像，将一个元素的可见部分限制在指定的图形或图案中。

搭配径向渐变，就可以实现只显示图片的一个圆形区域，如果使用 js 动态改变 circle 位置，就可以实现圆形跟随鼠标移动，展示图片对应区域

```css
.mask-test-img {
  mask-image: radial-gradient(
    circle at 100px 100px,
    #000 60px,
    transparent 100px
  );
}
```

::mask
::

### mask-repeat

遮罩区域是否重复

- repeat：默认值，表示水平和垂直方向均平铺。
- no-repeat：表示不平铺，会看到只有一个遮罩图形位于左上角。
- repeat-x: 表示水平方向平铺。
- repeat-y：表示垂直方向平铺。
- space：与 background 属性中的 space 的含义类似，表示遮罩图片尽可能平铺，同时不进行任何裁剪。
- round：表示遮罩图片尽可能靠在一起，没有任何间隙，同时不进行任何裁剪。这意味着图片可能会产生缩放效果。

### mask-position

遮罩区域的位置，同 background-position，例如 mask-position: center | top center | ...;

### mask-size

mask 展示区域大小，例如 mask-size: 30px | cover | contain | ...;

### mask-clip

确定遮罩在元素上的显示范围

- border-box
  特点：蒙版将裁剪到的元素的边框盒（包括边框和内边距），超出边框盒的部分将不可见。
  例子：mask-clip: border-box;

- padding-box
  特点：蒙版将被裁剪到元素的内边框盒（包括内边距），超出内边框盒的部分将不可见。
  例子：mask-clip: padding-box;

- content-box
  特点：蒙版将被裁剪到元素的内容框，超出内容框部分将不可见。
  例子：mask-clip: content-box;

- no-clip
  特点：蒙版不被裁剪，将在整个元素上显示，超出元素的部分也会显示。
  例子：mask-clip: no-clip;

### mask-composite

- add 表示遮罩累加，是默认值
- subtract 表示遮罩相减，也就是遮罩图片重合的区域不显示，这就意味着，遮罩图片越多，遮罩区域越小。
- intersect 表示遮罩相交，也就是遮罩图片重合的区域才显示遮罩。
- exclude 表示遮罩排除，也就是遮罩图片重合的区域被当做透明的。

### mask-mode

默认值是 match-source，作用是根据资源的类型自动采用合适的遮罩模式。例如，如果遮罩效果使用的是 SVG 中的 mask 元素，则此时的 mask-mode 属性的计算值是 luminance，表示基于亮度判断是否要进行遮罩。如果是其他场景，则计算值是 alpha，表示基于透明度判断是否要进行遮罩。

一个简单的效果

```css
.mask-test-img {
  mask-repeat: no-repeat;
  mask-image: linear-gradient(#fff 50px, #fff 100px), linear-gradient(#fff 50px, #fff
        100px);
  mask-size: 100px 100px;
  mask-position: 0 0, 150px 150px;
}
```

::mask-composite
::

## 使用 mask 实现一个手电筒效果

::flashlight
::
