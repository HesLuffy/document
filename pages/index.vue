<template>
  <div class="container mx-auto px-6 mt-[15rem]">
    <article>
      <h2>为什么会有这个document</h2>
      <p>
        接触前端也有差不多2年时间了，维护过不少项目，也试过从项目搭建开始，到项目上线。这期间也是边写边学，知识点零零散散。虽然尝试过搭建博客，把遇到的和编程有关的问题做个记录，但还是感觉没有一个系统性。
        <br />
        最近在看nuxt3官网的modules，偶然间看到了content模块，这是nuxt3团队推出的工具，大概研究了下后，突然有了想法，不如就通过nuxt3
        +
        content，搭建一个document网站，用来整理之前学过的知识点，并将以后会遇到的相关问题做一个系统性的整理。于是就有了这个document网站。
      </p>
    </article>
    <article class="mt-[6rem]">
      <h2>网站整体架构设计</h2>
      <ol>
        <li>
          技术栈
          <p>Nuxt3、tailwindcss、content、gsap</p>
          <p>
            由于content实在太方便了，所以也没额外再编写后端提供api，自然也就没数据库和CMS，不过将来有可能会改为用MongoDB，这个将来是什么时候，不知道！
          </p>
        </li>
      </ol>
    </article>
  </div>
</template>
