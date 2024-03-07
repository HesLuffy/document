---
title: "promise"
description: "JavaScript, promise"
date: 2024-03-07
---

## promise 规范

Promise 是一套专门处理异步场景的规范，能有效的避免回调地狱的产生，使异步代码更加清晰、简洁、统一

Promise A+规定：

1. 所有的异步场景（例如 setTimeout），都可以看做是一个异步任务，每个异步任务，在 JS 中应该表现为一个对象，该对象称之为 Promise 对象，也叫做任务对象

2. 每个任务对象，都应该有两个阶段、三个状态（pending、fulfilled、rejected）

- 任务总是从 unsettled 阶段变到 settled，无法逆行
- 任务总是从挂起状态变到完成或失败状态，无法逆行
- 任务一旦完成或失败，状态就固定下来，永远无法改变

3. pending => fulfilled = resolve; pending => rejected = reject

4. 成功和失败，可以根据结果进行不同处理

```js
// new Promise时的阶段为未决阶段（unsettled），状态为挂起状态（pending）
const p = new Promise((resolve, reject) => {
  // 任务得执行是靠这个回调函数
  // 这个回调函数在new Promise时会直接执行，这个函数执行过程就是用来描述任务
  // 要知道结果是成功还是失败，依赖resolve和reject
  // 这里模拟场景：如果随机数小于0.5，成功，小于则失败

  setTimeout(() => {
    if (Math.random() < 0.5) {
      resolve("<");
    } else {
      reject(">");
    }
  }, 5000);
});
// 成功和失败的后续，可以通过then进行处理
// 第一个参数是成功、第二个参数是失败
p.then(
  (res) => {
    console.log(res);
  },
  (err) => {
    console.log(res);
  }
);
```

【例子】

延迟指定时间，返回一个 promise

```js
function delay(duration) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(); // 没传就相当于undefined
    }, duration);
  });
}
delay(1000).then((res) => {
  console.log(res);
});
```

【例子】

根据指定的图片路径，创建一个 img 元素

该函数返回一个 promise。当图片加载成功，任务完成。加载失败，任务失败

任务完成后，提供的数据是图片 DOM 元素；任务失败，提供失败原因

```js
function createImage(imgUrl) {
  return new Promise((resolve, reject) => {
    const img = document.createElement("img");
    img.src = imgUrl;
    img.onload = () => {
      resolve("DOM元素：", img);
    };
    img.onerror = (err) => {
      reject("加载失败：", err);
    };
  });
}

createImage("https://www.xxx.com/xxx.png").then(
  (img) => {
    const p = document.querySelector(".label");
    p.innerHTML = `${img.width} * ${img.height}`;
  },
  (err) => {
    console.log(err);
  }
);
```

一些 promise 的理解

```js
// 下面的输出结果为 任务开始 任务结束
// 一旦状态确定，就不会再改变，调用resolve(1)，则状态为成功，后续调用的reject和resolve无效
new Promise((resolve, reject) => {
  console.log("任务开始");
  resolve(1);
  reject(2);
  resolve(3);
  console.log("任务结束");
});
```
