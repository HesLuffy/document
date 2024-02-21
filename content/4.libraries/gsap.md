## 基础概念

### gsap.to()
把一个元素的css值，从一个**初始**状态过度到**另一个**状态。

例如原始css值为opacity: 0，过渡后的状态为 opacity: 1
```css
.element {
    opacity: 0;
}
```
```js
gsap.to('.element', {
    opacity: 1
})
```

### gsap.from()
把一个元素的css值，从一个**指定**状态过度到**默认**状态。

例如css默认值为opacity: 1，指定状态为opacity: 0，那么就会从指定状态过渡到默认状态 opacity: 1;
```css
.element {
    opacity: 1;
}
```
```js
gsap.from('.element', {
    opacity: 0
})
```

### gsap.fromTo()
指定一个css的初始状态和过渡后的状态
```js
gsap.fromTo('.element', {
    opacity: 0
}, {
    opacity: 1
})
```

### Easing
[文档链接](https://gsap.com/resources/getting-started/Easing){style="color: green" :target="\_blank"}
<br />

作用类似于css的transition
```js
gsap.to('.element', {
    opacity: 1,
    ease: 'bounce.out'
})
```

### stagger
[文档链接](https://gsap.com/resources/getting-started/Staggers){style="color: green" :target="\_blank"}
<br />

将一组元素的动画按顺序执行，例如有5个.box元素，要按顺序将opacity从0过度到1，可以通过stagger实现。
```js
gsap.to('.element', {
    opacity: 1,
    stagger: 0.2, // 每个元素按照0.2秒的间隔执行动画
    stagger: {
        amount: 1, // 也可以是个object，amount指定所有动画间隔时间均分1秒
        each: 0.5, // 每个元素按照0.5秒的间隔执行动画
        from: "end", // 动画顺序倒序执行 ，其他值有 "center || start"
    },
    stagger: index => console.log(index), // value也可以是个函数
})
```

### random
[文档链接](https://gsap.com/docs/v3/GSAP/UtilityMethods/random()){style="color: green" :target="\_blank"}
<br />

对某个值进行范围内随机取值
```js
gsap.to('.element', {
    opacity: 'random(0.3, 1)', // 可以是明确的两个值
    opacity: 'random([0.2,0.3,0.4,0.7,0.9,1])', // 也可以是在数组里指定特定的值
    stagger: 0.2
})
```

### keyframes
[文档链接](https://gsap.com/resources/keyframes){style="color: green" :target="\_blank"}
<br />

```js
gsap.to('.element', {
    keyframes: [
        // 每个{}都是一个step
        { duration: 0.3, x: 100 },
        { duration: 0.6, x: 200 },
        { duration: 0.3, y: 100 }
    ]
})
```

### callback
[文档链接](https://gsap.com/resources/getting-started/control){style="color: green" :target="\_blank"}
<br />

```js
gsap.to('.element', {
    onStart() {},
    onComplete() {},
    onUpdate() {},
    onRepeat() {}
})
```

### 保存动画
[文档链接](https://gsap.com/docs/v3/GSAP/gsap.registerEffect()){style="color: green" :target="\_blank"}
<br />

```js
gsap.registerEffect({
    name: "imgAnimation",
    effect: (targets, config) => {
        return gsap.to(targets, {
            duration: config.duration,
            y: 200,
            rotation: 333
        })
    }
})

gsap.effects.imgAnimation(".element", { duration: 5 })
```

## timelines
[文档链接](https://gsap.com/docs/v3/GSAP/Timeline){style="color: green" :target="\_blank"}
<br />

```js
// 创建timeline
const TL = gsap.timeline();

// 顺序基本使用
TL.from('.element1', { opacity: 0 })
  .from('.element2', { x: -200 })

// 控制动画执行顺序
// 假如现在要实现第一个动画执行后的0.7秒执行第二个动画
TL.from('.element1', { opacity: 0 })
  .from('.element2', { x: -200 }, '-=0.7')
  .from('.element3', { y: -200 })
```

## scrollTrigger
[文档链接](https://gsap.com/resources/st-mistakes){style="color: green" :target="\_blank"}
<br />

通过滚动控制元素执行动画

```js
gsap.from('h2', {
    duration: 1,
    autoAlpha: 0,
    scrollTrigger: {
        trigger: 'h2',
        start: "top 50%", // 最好直接用%，方便响应式, top center+=50% || top bottom-=20%
        end: "bottom 10%",
        scrub: true, // 可以取数值，例如0.5
        pin: true, // 可以通过end进行控制
    }
})
```

## 常见问题
1. opacity在某些情况下会出现闪烁
   <br />
   可以使用autoAlpha取代opacity，autoAlpha默认的css为 opacity + visibility
