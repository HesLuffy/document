<script setup>
const boxElement = ref(null);
const maskElement = ref(null);

const mouseMove = e => {
  const { offsetX, offsetY } = e;
  maskElement.value.style.setProperty('--x', `${offsetX}px`);
  maskElement.value.style.setProperty('--y', `${offsetY}px`);
}
const mouseLeave = e => {
  maskElement.value.style.setProperty('--x', `-150px`);
  maskElement.value.style.setProperty('--y', `-150px`);
}

</script>
<template>
  <div class="box" ref="boxElement" @mousemove="mouseMove" @mouseleave="mouseLeave">
    <img ref="maskElement" class="mask-demo w-full" src="/images/2.webp" alt="">
  </div>
</template>
<style scoped>
.box {
  background-color: #000;
}

.mask-demo {
  --x: -150px;
  --y: -150px;
  mask-image: radial-gradient(circle at var(--x) var(--y), #fff 70px, transparent 100px);
}
</style>