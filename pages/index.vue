<script setup>
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


const helloElement = ref(null);

const whoamiAnimation = () => {
  const tl = gsap.timeline();
  tl.to('.a', {
    rotateX: '360px'
  })
    .to('.a', {
      y: -100,
      opacity: 0,
    })
    .to('.E', {
      opacity: 1,
      y: 0
    }, '-=0.3')

}

onMounted(() => {
  whoamiAnimation();
})
</script>

<template>
  <div class="gridBg container mx-auto px-6 mt-[15rem] mb-[4rem]">
    <h1 class="whoami">
      <span class="flex" ref="helloElement">
        <span class="block h">H</span>
        <span class="block relative">
          <div class="block a">
            &spades;
          </div>
          <div class="E absolute bottom-0 left-0 translate-y-[6rem] opacity-0">
            E
          </div>
        </span>
        <span class="block">L</span>
        <span class="block">L</span>
        <span class="block">O</span>
      </span>
      <span class="flex">
        <span>I</span>
        <span>&nbsp;</span>
        <span>a</span>
        <span>m</span>
        <span>&nbsp;</span>
        <span>R</span>
        <span>y</span>
        <span>a</span>
        <span>n</span>
        <span>&nbsp;</span>
        <span>L</span>
        <span>i</span>
      </span>
    </h1>
  </div>
</template>

<style scoped>
.gridBg {
  height: 100vh;
  background-image: radial-gradient(circle, rgb(215, 216, 211) 2px, #f7f7f7 2px);
  background-size: 15px 15px;
  background-position: center center;
}

.whoami {
  font-size: max(5.125rem, min(13.3333vw + 2rem, 18rem));
  perspective: 750px;
}

.E {
  transform-origin: 50% 750px;
}
</style>